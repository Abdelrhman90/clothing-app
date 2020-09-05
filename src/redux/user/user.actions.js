import userActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailuer = (error) => ({
  type: userActionTypes.SIGNIN_FAILUER,
  payload: error,
});
export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS,
});
export const signOutFailuer = (error) => ({
  type: userActionTypes.SIGNOUT_FAILUER,
  payload: error,
});

export const signUpStart = (userCredientials) => ({
  type: userActionTypes.SIGNUP_START,
  payload: userCredientials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailuer = (error) => ({
  type: userActionTypes.SIGNUP_FAILUER,
});
