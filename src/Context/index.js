import { loginUser, getUser, logoutUser, updateUser, switchTheme, checkAndSetTheme, checkAuthRedirect, clearMessages } from './actions';
import { AuthProvider, useAuthDispatch, useAuthState } from './context';

export { AuthProvider, useAuthState, useAuthDispatch, loginUser, getUser, logoutUser, updateUser, switchTheme, checkAndSetTheme, checkAuthRedirect, clearMessages };
