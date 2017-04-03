import axios from 'axios';
//Log in functions

export function completeSignIn(username, userid) {
  return {
    type: 'SIGN_IN_COMPLETE',
    username,
    userid
  }
}
export function signInError(error) {
  return {
    type: 'SIGN_IN_ERROR',
    error
  }
}
//Logging out function

function loggingOut() {
  return {
    type: 'USER_LOGOUT'
  }
}

export function logOutError(error) {
  return {
    type: 'USER_LOGOUT_ERROR',
    error
  }
}

function logOutSuccessful() {
  return {
    type: 'USER_LOGOUT_SUCCESSFUL'
  }
}

export function logOut() {
  return (dispatch) => {
    dispatch(loggingOut())
    axios.get('http://localhost:8080/auth/logout')
      .then(results => dispatch(USER_LOGOUT_SUCCESSFUL))
      .catch(error => dispatch(logOutError(error)))

  }
}

export function checkSession() {
  return (dispatch) => {
    axios.get('http://localhost:8080/auth/signin')
    .then(results => dispatch(completeSignIn(results.data.username, results.data.user_id)))
    .catch(error => dispatch(signInError(error)))
  }
}