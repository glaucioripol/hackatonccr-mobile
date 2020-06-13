import { IBaseInitialState } from '../baseInitialState'

export const informationTypes = {
  RETRIEVE_INFORMATION_REQUEST: '[movies]RETRIEVE_INFORMATION_REQUEST',
  RETRIEVE_INFORMATION_SUCCESS: '[movies]RETRIEVE_INFORMATION_SUCCESS',
  RETRIEVE_INFORMATION_FAILURE: '[movies]RETRIEVE_INFORMATION_FAILURE',
}

export interface IInformationData {
  data: string
}
export interface IInformationState extends IBaseInitialState {
  readonly data: IInformationData[]
}

export interface IInformationActions {
  type:
    | '[movies]RETRIEVE_INFORMATION_REQUEST'
    | '[movies]RETRIEVE_INFORMATION_SUCCESS'
    | '[movies]RETRIEVE_INFORMATION_FAILURE'
  payload?: any
}
