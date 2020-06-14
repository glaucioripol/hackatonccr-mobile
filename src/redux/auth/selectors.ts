import { AppState } from '../index'
import { IAuthState } from './types'

export const authState = (state: AppState): IAuthState => state.auth
