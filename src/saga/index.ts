import { all, takeLatest } from 'redux-saga/effects'

export function* rootSaga() {
  return yield all([
    // takeLatest(MovieTypes.MOVIE_RETRIEVE_ALL_BY_NAME_REQUEST, MovieRetrieveAllByNameSaga),
  ])
}
