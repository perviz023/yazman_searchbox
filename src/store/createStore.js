import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'


import rootReducer from './rootReducer'
import rootSaga from './rootSaga'



// reducer wrapper for reconciliation store
const reducer = (state, action) => {
  
    return rootReducer(state, action)
  }


const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [],
        },
        thunk: false,
      }),
      sagaMiddleware,
    ],
  })

  ;store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default makeStore