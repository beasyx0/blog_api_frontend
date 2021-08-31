import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api/v1/posts';

const noAuthRequest = axios.create({
      baseURL: ROOT_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
  })

export async function getNewestPosts(postDispatch) {
  postDispatch({type: 'REQUEST_ALL_POSTS'});
  return noAuthRequest.get('/posts/')
    .then((response)=> {
      postDispatch({ type: 'ALL_POSTS_SUCCESS' });
      return Promise.resolve(response.data);
    }).catch((error)=>{
      postDispatch({ type: 'ALL_POSTS_ERROR', error: error.message })
      return Promise.reject(error);
    });
}

export async function getFeaturedPosts(postDispatch) {
  postDispatch({type: 'REQUEST_FEATURED_POSTS'});
  return noAuthRequest.get('/featured/')
    .then((response)=> {
      postDispatch({ type: 'FEATURED_POSTS_SUCCESS' });
      return Promise.resolve(response.data);
    }).catch((error)=>{
      postDispatch({ type: 'FEATURED_POSTS_ERROR', error: error.message })
      return Promise.reject(error);
    });
}

export async function getOldestPosts(postDispatch) {
  postDispatch({type: 'REQUEST_OLDEST_POSTS'});
  return noAuthRequest.get('/oldest/')
    .then((response)=> {
      postDispatch({ type: 'OLDEST_POSTS_SUCCESS' });
      return Promise.resolve(response.data);
    }).catch((error)=>{
      postDispatch({ type: 'OLDEST_POSTS_ERROR', error: error.message })
      return Promise.reject(error);
    });
}
