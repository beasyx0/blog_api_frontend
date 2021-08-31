import React, { useReducer } from "react";


export const postInitialState = {
  postsLoading: false,
  featuredPostsLoading: false,
  tagsLoading: false,
  errorMessage: null,
  successMessage: null,
}

export const PostReducer = (postInitialState, action) => {
  switch (action.type) {
    case "REQUEST_ALL_POSTS":
      return {
        ...postInitialState,
        postsLoading: true
      }
    case "ALL_POSTS_SUCCESS":
      return {
        ...postInitialState,
        postsLoading: false
      }
    case "ALL_POSTS_ERROR":
      return {
        ...postInitialState,
        errorMessage: action.error,
        postsLoading: false
      }
      case "REQUEST_FEATURED_POSTS":
      return {
        ...postInitialState,
        featuredPostsLoading: true
      }
    case "FEATURED_POSTS_SUCCESS":
      return {
        ...postInitialState,
        featuredPostsLoading: false
      }
    case "FEATURED_POSTS_ERROR":
      return {
        ...postInitialState,
        errorMessage: action.error,
        featuredPostsLoading: false
      }
      case "REQUEST_OLDEST_POSTS":
      return {
        ...postInitialState,
        postsLoading: true
      }
    case "OLDEST_POSTS_SUCCESS":
      return {
        ...postInitialState,
        postsLoading: false
      }
    case "OLDEST_POSTS_ERROR":
      return {
        ...postInitialState,
        errorMessage: action.error,
        postsLoading: false
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
