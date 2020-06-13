import { informationTypes } from '../types'

export const retrieveInformationActions = {
  request() {
    return {
      type: informationTypes.RETRIEVE_INFORMATION_REQUEST,
      payload: 'alo',
    }
  },

  success(data: string[]) {
    return {
      type: informationTypes.RETRIEVE_INFORMATION_SUCCESS,
      payload: data,
    }
  },

  failure() {
    return {
      type: informationTypes.RETRIEVE_INFORMATION_FAILURE,
      payload: 'alo',
    }
  },
}
