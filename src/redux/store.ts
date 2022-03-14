/**Redux setup*/
 import {createStore,applyMiddleware} from 'redux';
import { addData } from '../FireBase/FireBase';
import { saveData } from './action';
import  rootReducer from './reducer';
import thunk from 'redux-thunk'


const thunkMiddleware =
({ dispatch, getState }:{dispatch:any,getState:any}) =>
(next:any) =>
(action:any) => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
   // return action(dispatch, getState)
  console.log("....typof action is function.....");
  }
   console.log("Normal  action");
  // Otherwise, it's a normal action - send it onwards
  return next(action);

}

 const store= createStore(rootReducer,applyMiddleware(thunk));
console.log("store ",store.getState());
  store.dispatch(thunkMiddleware);
   export default store;