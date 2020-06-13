import { informationTypes } from '../types'

export function request() {
  return {
    type: informationTypes.RETRIEVE_INFORMATION_REQUEST,
    payload: 'alo',
  }
}

export function success(data: string[]) {
  return {
    type: informationTypes.RETRIEVE_INFORMATION_SUCCESS,
    payload: data,
  }
}

export function failure() {
  return {
    type: informationTypes.RETRIEVE_INFORMATION_FAILURE,
    payload: 'alo',
  }
}
