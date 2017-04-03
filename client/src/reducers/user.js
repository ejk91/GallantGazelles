const initialState = {
  username: null,
  userid: null,
  checkingInfo: false,
  error: null
}

function user(state = initialState, action) {
  switch (action.type) {
    case 'CHECK_SIGN_IN':
      return {
        ...state,
        checkingInfo: true
      };
    case 'SIGN_IN_COMPLETE':
      return {
        ...state,
        username: action.username,
        userid: action.userid,
        checkingInfo: false
      }
    case 'SIGN_IN_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'USER_LOGOUT_ERROR':
    return {
      ...state,
      error: action.error
    }
    case 'USER_LOGOUT_SUCCESSFUL':
    return {
      ...state,
      username: undefined,
      userid: undefined,
      checkingInfo: false
    }
    default: 
      return state;
  }
}

export default user;