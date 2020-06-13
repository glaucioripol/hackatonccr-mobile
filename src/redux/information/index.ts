import { combineReducers } from 'redux'
import { informationRetrieveReducer, IInformationState } from './Retrieve'
export interface IInformationCrud {
  retrieve: IInformationState
}

export const crudInformationReducer = combineReducers<IInformationCrud>({
  retrieve: informationRetrieveReducer,
})
