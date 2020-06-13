import { AuthTypes, IAuthActions, IAuthState } from './types'

export { IAuthState }

const initialState: IAuthState = {
  authToken: '',
  email: '',
  hasDone: false,
  isLoading: false,
  hasError: false,
  errorMsg: '',
}

const actionMap = {
  [AuthTypes.LOGIN_REQUEST]: (state: IAuthState, action: IAuthActions) => ({
    ...state,
    isLogging: true,
    hasError: false,
    errorMsg: '',
  }),
  [AuthTypes.LOGIN_SUCCESS]: (state: IAuthState, action: IAuthActions) => ({
    ...state,
    authToken: action.payload.authToken,
    email: action.payload.email,
    hasDone: false,
    isLoading: false,
    hasError: false,
    errorMsg: '',
  }),
  [AuthTypes.LOGIN_FAILURE]: (state: IAuthState, action: IAuthActions) => ({
    ...state,
    hasError: true,
    isLogging: false,
    errorMsg: action.payload,
  }),

  [AuthTypes.LOGOUT_SUCCESS]: () => initialState,
}

export const authReducer = (state = initialState, action: IAuthActions): IAuthState =>
  actionMap[action.type] ? actionMap[action.type](state, action) : state
