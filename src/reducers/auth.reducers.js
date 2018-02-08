import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED
}

let initialState = {
  isLoading: false,
  user: {},
  err: ''
};

export default(state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return {...state, isLoading: true}
    case USER_LOGIN_SUCCESS:
      return {...state, isLoading: false, user: action.payload.data}
    case USER_LOGIN_FAILED:
      return {...state, isLoading: false, err: action.payload}
    case USER_SIGNUP_PENDING:
      return {...state, isLoading: true}
    case USER_SIGNUP_SUCCESS:
      return {...state, isLoading: false, user: action.payload.data}
    case USER_SIGNUP_FAILED:
      return {...state, isLoading: false, err: action.payload}
    default:
      return state;
  }
}
