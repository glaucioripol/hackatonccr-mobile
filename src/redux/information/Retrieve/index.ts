import { informationTypes, IInformationState, IInformationActions } from '../types'

export { IInformationState }

const initialState: IInformationState = {
  data: [],
  isLoading: false,
  hasDone: false,
  hasError: false,
  errorMsg: '',
}

const actionMap = {
  [informationTypes.RETRIEVE_INFORMATION_REQUEST]: (state: IInformationState, action: IInformationActions) => ({
    ...state,
    isLoading: true,
  }),
  [informationTypes.RETRIEVE_INFORMATION_SUCCESS]: (state: IInformationState, action: IInformationActions) => ({
    ...state,
    isLoading: false,
    errorMsg: '',
    hasDone: true,
    hasError: false,
    data: action.payload,
  }),
  [informationTypes.RETRIEVE_INFORMATION_FAILURE]: (state: IInformationState, action: IInformationActions) => ({
    ...state,
    isLoading: false,
    hasDone: false,
    hasError: true,
    errorMsg: action.payload,
  }),
}

export const informationRetrieveReducer = (state = initialState, action: IInformationActions): IInformationState =>
  actionMap[action.type] ? actionMap[action.type](state, action) : state
