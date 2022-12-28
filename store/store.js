import {createStore,combineReducers, configureStore,compose} from '@reduxjs/toolkit';
import  { userSlice } from '../redux/reducer';
import globalReducer from '../redux/reducer'
import userReducer from '../redux/reducer'
import { Reducer } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core';
import saga from '../redux/saga'

const sagaMiddleware = createSagaMiddleware();
function createReducer(injectedReducers={})
{
    const rootReducer=combineReducers({
        global:globalReducer,
        ...injectedReducers,
    })
    return rootReducer;
}
const reducer = {
    user: globalReducer,
  }

let composeEnhancers = compose;
// const injectEnhancer = createInjectorsEnhancer({
//     createReducer,
//   });
export const store = configureStore({  
     reducer:{
        user:userReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
}
);
sagaMiddleware.run(saga)
