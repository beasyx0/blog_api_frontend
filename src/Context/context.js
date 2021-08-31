import React, { createContext, useReducer, useContext } from "react";

import {UserReducer, userInitialState} from './User/reducer.js';
import {PostReducer, postInitialState} from './Posts/reducer.js';


const UserStateContext = createContext();
const UserDispatchContext = createContext();

export function useUserState() {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a Provider");
  }

  return context;
}

export function useUserDispatch() {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a Provider");
  }

  return context;
}

const PostStateContext = createContext();
const PostDispatchContext = createContext();

export function usePostState() {
  const context = useContext(PostStateContext);
  if (context === undefined) {
    throw new Error("usePostState must be used within a Provider");
  }

  return context;
}

export function usePostDispatch() {
  const context = useContext(PostDispatchContext);
  if (context === undefined) {
    throw new Error("usePostDispatch must be used within a Provider")
  }
  return context;
}

export const AppContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(UserReducer, userInitialState);
  const [postState, postDispatch] = useReducer(PostReducer, postInitialState);

  return (
    <UserStateContext.Provider value={userState}>
      <UserDispatchContext.Provider value={userDispatch}>
        <PostStateContext.Provider value={postState}>
          <PostDispatchContext.Provider value={postDispatch}>
            {children}
          </PostDispatchContext.Provider>
        </PostStateContext.Provider>
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};
