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

export const userInitialState = {
  user: "" || userDetails,
  refresh: "" || refreshToken,
  access: "" || accessToken,
  loading: false,
  errorMessage: null,
  successMessage: null,
  nextUrl: "" || nextUrl,
  theme: "" || themeChoice
}

export const UserReducer = (userInitialState, action) => {
  switch (action.type) {
    case "REQUEST_REGISTER":
      return {
        ...userInitialState,
        loading: true
      }
    case "REGISTER_SUCCESS":
      return {
        ...userInitialState,
        successMessage: action.payload.message,
        errorMessage: null,
        loading: false
      }
    case "REGISTER_ERROR":
      return {
        ...userInitialState,
        errorMessage: action.error,
        successMessage: null,
        loading: false
      }
    case "REQUEST_VERIFY":
      return {
        ...userInitialState,
        loading: true
      }
    case "VERIFY_SUCCESS":
      return {
        ...userInitialState,
        successMessage: action.payload.message,
        errorMessage: null,
        loading: false
      }
    case "VERIFY_ERROR":
      return {
        ...userInitialState,
        errorMessage: action.error,
        successMessage: null,
        loading: false
      }
    case "REQUEST_USER":
      return {
        ...userInitialState,
        loading: true
      };
    case "USER_SUCCESS":
      return {
        ...userInitialState,
        user: action.payload.user,
        successMessage: action.payload.message,
        errorMessage: null,
        loading: false,
      };
    case "USER_ERROR":
      return {
        ...userInitialState,
        loading: false,
        errorMessage: action.error,
        successMessage: null,
      };
    case "REQUEST_LOGIN":
      return {
        ...userInitialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...userInitialState,
        refresh: action.payload.refresh,
        token: action.payload.access,
        successMessage: action.payload.message,
        errorMessage: null,
        loading: false
      };
    case "LOGIN_ERROR":
      return {
        ...userInitialState,
        loading: false,
        errorMessage: action.error,
        successMessage: null,
      };
    case "REQUEST_LOGOUT":
      return {
        ...userInitialState,
        loading: true
      }
    case "LOGOUT_SUCCESS":
      return {
        ...userInitialState,
        user: "",
        refresh: "",
        access: "",
        successMessage: null,
        errorMessage: null,
        loading: false
      };
    case "LOGOUT_ERROR":
      return {
        ...userInitialState,
        loading: false,
        errorMessage: action.error,
        successMessage: null,
      };
    case "REQUEST_UPDATE_USER":
      return {
        ...userInitialState,
        loading: true
      };
    case "UPDATE_USER_SUCCESS":
      return {
        ...userInitialState,
        user: action.payload.user,
        successMessage: action.payload.message,
        errorMessage: null,
        loading: false
      };
    case "UPDATE_USER_ERROR":
      return {
        ...userInitialState,
        errorMessage: action.error,
        successMessage: null,
        loading: false
      };
    case "SET_NEXT_URL":
      return {
        ...userInitialState,
        nextUrl: action.nextUrl
      };
    case "SWITCH_THEME":
      return {
        ...userInitialState,
        theme: action.themeChoice
      };
    case "CLEAR_MESSAGES":
      return {
        ...userInitialState,
        errorMessage: null,
        successMessage: null
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};