/**Redux setup*/
import {createStore,applyMiddleware} from 'redux';
import  rootReducer from './reducer';
import thunk from 'redux-thunk';
import { act } from 'react-dom/test-utils';
import { addData } from '../FireBase/FireBase';


const middleware=()=>{
  console.log("into middleware");
}
function logger(state:any) {
  return (next:any) => (action:any) => {
      // If the "action" is actually a function instead...
    //  console.log("--------",action());
     // console.log("loggger function", action());
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
   // return action(dispatch, getState)
    const data= action();

    addData(data.payload).then((res:any)=>{

      console.log("Data saved",res);
      next(data)

    });

  console.log("....typof action is function.....");
      
  }else{
    console.log("Normal  action");
    // Otherwise, it's a normal action - send it onwards
    return next(action);
  }
 

  
}
}
    function fetchTodos(dispatch:any, getState:any) {
  console.log("fetc toofofo");
  // const response = await client.get('/fakeApi/todos')
  // dispatch({ type: 'todos/todosLoaded', payload: response.todos })
}
const thunkMiddleware =({ dispatch, getState }:{dispatch:any,getState:any}) =>(next:any) =>(action:any) => {


  console.log('into thunk middleware');
  

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


const store= createStore(rootReducer,applyMiddleware(logger));
 

 console.log("store",store);

//store.dispatch(thunkMiddleware);
  
 
export default store;