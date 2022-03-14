/**Redux setup*/
 import {createStore,applyMiddleware} from 'redux';
import { addData } from '../FireBase/FireBase';
import { saveData } from './action';
import  rootReducer from './reducer';



function logger(state:any) {
    return (next:any) => (action:any) => {
       console.log('action', next);
       const returnVal = next(action);
       console.log("action",action);
       console.log('state when action is dispatched',state.getState()); 
       addData(action.payload).then((data)=>{
           console.log("saved data",data);
       });
       next(action);
      // return returnVal;
        
        
    }
 }

 const store= createStore(rootReducer,applyMiddleware(logger));
console.log("store ",store.getState());
  store.dispatch(logger);
   export default store;