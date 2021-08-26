import axios from 'axios';

import { useAuthDispatch } from './index.js';

const ROOT_URL = 'http://localhost:8000/api/v1/users';
const USER = 'user';
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const THEME_CHOICE = 'theme_choice';


const noAuthRequest = axios.create({
      baseURL: ROOT_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
  })
const refreshToken = () => {
  const refreshBody = { refresh: window.localStorage.getItem(REFRESH_TOKEN) }
  return noAuthRequest.post('/user/login/refresh/', refreshBody)
    .then((response)=> {
      window.localStorage.removeItem(ACCESS_TOKEN);
      window.localStorage.setItem(ACCESS_TOKEN, response.data.access);
      window.localStorage.removeItem(REFRESH_TOKEN);
      window.localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
      return Promise.resolve(response.data);
    }).catch((error)=>{
      return Promise.reject(error);
    });
}
export async function loginUser(dispatch, loginPayload) {
  dispatch({ type: 'REQUEST_LOGIN' });
  const loginBody = { email: loginPayload.email, password: loginPayload.password };
  return noAuthRequest.post('/user/login/', loginBody)
    .then((response)=> {
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      window.localStorage.setItem(ACCESS_TOKEN, response.data.access);
      window.localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
      return Promise.resolve(response.data);
    }).catch((error)=>{
      dispatch({ type: 'LOGIN_ERROR', error: error.response.data.detail });
      return Promise.reject(error);
    });
}

const isCorrectRefreshError = (status) => {
  return status === 401 || status === 403;
}

const authRequest = axios.create({
    baseURL: ROOT_URL,
    timeout: 5000,
    headers: {
      'Authorization': `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
      'Content-Type': 'application/json',
    }
});
authRequest.interceptors.response.use(
  (response) => response, // this is for all successful requests.
  (error) => { //handle the request
    return errorInterceptor(error)
  }
);
const errorInterceptor = (error) => {
  const originalRequest = error.config;
  const status = error.response.status;
  if (isCorrectRefreshError(status)) {
    return refreshToken().then((data)=> {
      const headerAuthorization = `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`;
      authRequest.defaults.headers['Authorization'] = headerAuthorization;
      originalRequest.headers['Authorization'] = headerAuthorization;
      return authRequest(originalRequest)
    }).catch((error)=> {
      // if token refresh fails, clear user to avoid potential security risks.
      window.localStorage.clear();
      return Promise.reject(error)
    })
  }
  return Promise.reject(error)
}

export async function getUser(dispatch) {
  dispatch({type: 'REQUEST_USER'});
  return authRequest.get('/user/')
    .then((response)=> {
      dispatch({ type: 'USER_SUCCESS', payload: response.data });
      window.localStorage.setItem(USER, JSON.stringify(response.data.user));
      return Promise.resolve(response.data);
    }).catch((error)=>{
      dispatch({ type: 'USER_ERROR', error: error.message })
      return Promise.reject(error);
    });
}
export async function logoutUser(dispatch) {
  dispatch({ type: "REQUEST_LOGOUT" });
  const logoutBody = { refresh: window.localStorage.getItem(REFRESH_TOKEN) }
  return authRequest.post('/user/logout/', logoutBody)
    .then((response)=> {
      dispatch({ type: 'LOGOUT_SUCCESS' })
      return Promise.resolve(response.data);
    }).catch((error)=>{
      dispatch({ type: 'LOGOUT_ERROR', error: error.message });
      return Promise.reject(error);
    }).finally(() => {
      window.localStorage.clear();
      console.log('User local storage cleared.');
    })
  
}
export async function updateUser(dispatch, updatePayload) {
  dispatch({ type: "REQUEST_UPDATE_USER" })
  const updateBody = { username: updatePayload.userName, name: updatePayload.name, partial: updatePayload.partial }
  return authRequest.put('/user/update/', updateBody)
    .then((response) => {
      dispatch({ type: "UPDATE_USER_SUCCESS", payload: response.data });
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(response.data.user));
      return Promise.resolve(response.data);
    }).catch((error)=>{
      let errorString = '';
      if (error.response.data.message){
        for (const key in error.response.data.message){
          errorString += (error.response.data.message[key][0] + " \n" );
        }
      }
      dispatch({ type: "UPDATE_USER_ERROR", error: errorString });
      return Promise.reject(error);
    })
}

export async function switchTheme(dispatch, body) {
  if (window.localStorage.getItem('theme_choice') === 'light') {
      body.style.background = '#343a40';
      body.style.color = '#f8f9fa';
      window.localStorage.setItem(THEME_CHOICE, 'dark');
  } else {
      body.style.background = '#f8f9fa';
      body.style.color = '#343a40';
      window.localStorage.setItem(THEME_CHOICE, 'light');
  }
  dispatch({ type: 'SWITCH_THEME', themeChoice: window.localStorage.getItem('theme_choice') })
}

export async function checkAndSetTheme(userDetails, body) {
  if (userDetails.theme === 'dark') {
    body.style.background = '#343a40';
    body.style.color = '#f8f9fa';
  }
}

export async function checkAuthRedirect(dispatch, userDetails, location, history) {
  if (!userDetails.user) {
    window.localStorage.setItem('nextUrl', location.pathname);
    dispatch({ type: 'SET_NEXT_URL', nextUrl: window.localStorage.getItem('nextUrl') })
    history.push('/login');
  }
}

export async function clearMessages(dispatch) {
  dispatch({ type: 'CLEAR_MESSAGES' });
}
