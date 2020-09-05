import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  signInSuccess,
  signInFailuer,
  signOutSuccess,
  signOutFailuer,
  signUpSuccess,
  signUpFailuer,
} from "./user.actions";
import userActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const snapShot = yield userRef.get();
    yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));
  } catch (error) {
    yield put(signInFailuer(error));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailuer(error));
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailuer(error));
  }
}

export function* isUserAuthnticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailuer(error));
  }
}
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailuer());
  }
}
export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      signUpSuccess({
        user,
        additionalData: { displayName },
      })
    );
  } catch (error) {
    yield put(signUpFailuer(error));
  }
}
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapShotFromUserAuth(user, additionalData);
}
export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthnticated);
}
export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}
export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGNOUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, signUp);
}
export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signInAfterSignUp);
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
