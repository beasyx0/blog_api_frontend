import { registerUser, verifyUser, loginUser, getUser, logoutUser, updateUser, switchTheme, checkAndSetTheme, checkAuthRedirect, clearMessages } from './User/actions';
import { AppContextProvider, useUserState, useUserDispatch, usePostState, usePostDispatch } from './context';
import {getNewestPosts, getFeaturedPosts } from './Posts/actions';

export { 
    AppContextProvider, 
    useUserState, 
    useUserDispatch, 
    registerUser, 
    verifyUser, 
    loginUser, 
    getUser, 
    logoutUser, 
    updateUser, 
    switchTheme, 
    checkAndSetTheme, 
    checkAuthRedirect, 
    clearMessages, 
    usePostState,
    usePostDispatch,
    getNewestPosts,
    getFeaturedPosts,
};
