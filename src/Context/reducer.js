import React, { useReducer } from "react";

let userDetails = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

let refreshToken = localStorage.getItem("refresh_token") 
  ? localStorage.getItem("refresh_token") 
  : "";

let accessToken = localStorage.getItem("access_token") 
  ? localStorage.getItem("access_token")
  : "";

let nextUrl = localStorage.getItem("nextUrl") 
  ? localStorage.getItem("nextUrl")
  : "/";

let themeChoice = localStorage.getItem("theme_choice")
  ? localStorage.getItem("theme_choice")
  : "dark";

export const initialState = {
  user: "" || userDetails,
  refresh: "" || refreshToken,
  access: "" || accessToken,
  loading: false,
  errorMessage: null,
  successMessage: null,
  nextUrl: "" || nextUrl,
  theme: "" || themeChoice
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_USER":
      return {
        ...initialState,
        loading: true
      };
    case "USER_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        successMessage: action.payload.message,
        errorMessage: null,
        loading: false,
      };
    case "USER_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
        successMessage: null,
      };
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        refresh: action.payload.refresh,
        token: action.payload.access,
        successMessage: action.payload.message,
        errorMessage: null,
        loading: false
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
        successMessage: null,
      };
    case "REQUEST_LOGOUT":
      return {
        ...initialState,
        loading: true
      }
    case "LOGOUT_SUCCESS":
      return {
        ...initialState,
        user: "",
        refresh: "",
        access: "",
        successMessage: null,
        errorMessage: null,
        loading: false
      };
    case "LOGOUT_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
        successMessage: null,
      };
    case "REQUEST_UPDATE_USER":
      return {
        ...initialState,
        loading: true
      };
    case "UPDATE_USER_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        successMessage: action.payload.message,
        errorMessage: null,
        loading: false
      };
    case "UPDATE_USER_ERROR":
      return {
        ...initialState,
        errorMessage: action.error,
        successMessage: null,
        loading: false
      };
    case "SET_NEXT_URL":
      return {
        ...initialState,
        nextUrl: action.nextUrl
      };
    case "SWITCH_THEME":
      return {
        ...initialState,
        theme: action.themeChoice
      };
    case "CLEAR_MESSAGES":
      return {
        ...initialState,
        errorMessage: null,
        successMessage: null
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};