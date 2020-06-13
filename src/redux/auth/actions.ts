import { AuthTypes } from './types'

export const AuthActions = {
  loginRequest(email: string, password: string) {
    return {
      type: AuthTypes.LOGIN_REQUEST,
      payload: { email, password },
    }
  },
  loginSuccess(authToken: string, email: string) {
    return {
      type: AuthTypes.LOGIN_SUCCESS,
      payload: { authToken, email },
    }
  },
  loginFailure(errorMsg: string) {
    return {
      type: AuthTypes.LOGIN_FAILURE,
      payload: errorMsg,
    }
  },
  logout() {
    return {
      type: AuthTypes.LOGOUT_SUCCESS,
    }
  },
}
