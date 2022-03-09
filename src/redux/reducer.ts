import {userData,actionTypeUser,actionTypeFilter,user,filter,filterBy,root, filterByT} from './types_redux';
 

const initialState:user={
    
    userName:"",
    isLoggedIn:false,
    data:[{
        name:"Meghraj",
        id:1,
        company:"gojek",
        status:"Active",
        lastUpdate:"1/02/2021",
        notes:"Hey hi how are you people doing,,,"
    },
    {
        name:"Dheeraj",
        id:1,
        company:"gojek",
        status:"Active",
        lastUpdate:"1/02/2021",
        notes:"Hey hi how are you people doing,,,"
    },
    {
        name:"Sristi",
        id:1,
        company:"Razorpay",
        status:"Closed",
        lastUpdate:"1/02/2021",
        notes:"Hey hi how are you people doing,,,"
    },
    {
        name:"Amu",
        id:2,
        company:"google",
        status:"Closed",
        lastUpdate:"1/02/2021",
        notes:"Hey hi how are you people doing,,,"
    },
    {
        name:"Amu",
        id:2,
        company:"coinbase",
        status:"Closed",
        lastUpdate:"1/02/2021",
        notes:"Hey hi how are you people doing,,,"
    },
    {
        name:"Amu",
        id:2,
        company:"meesho",
        status:"Closed",
        lastUpdate:"1/02/2021",
        notes:"Hey hi how are you people doing,,,"
    }
   ]

   //tableHeaders:["Name","Company","id","Status","LastUpdate","Notes"]
}
 
 
function User(state = initialState, action:actionTypeUser) {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    switch (action.type) {
      case "ADD_DATA":
        {
            console.log("action",action.payload)
          // const sortedData= _sortData(state.tableData,action.payload); 
            
           return  {
               ...state,
             //  tableData:[...sortedData],
               
           }
              

        } 

     
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }


const initialStateFilter:filter={
   sortBy:"DEFAULT",
   filterBy:[]

};


 
const filterReducer=(state=initialStateFilter,action:actionTypeFilter):typeof initialStateFilter=>{

    console.log('filter by',action.payload);
         
       switch( action.type){
       
        case "SORT_BY":{
            
             return{
                 ...state,
                 sortBy:action.payload.sortBy,    
             }
        }

        case "FILTER":{
            return{
                ...state,
                filterBy:action.payload.filterBy

            }
        }
        default:
            // If the reducer doesn't care about this action type,
            // return the existing state unchanged
            return state

       }
}

const rootInitialState:root={
    UserReducer:initialState,
    FilterReducer:initialStateFilter
};

const rootReducer=(state=rootInitialState ,action:any):typeof rootInitialState=>{
  console.log("rootstore is called",);
    return{
        UserReducer:User(state.UserReducer,action),
        FilterReducer:filterReducer(state.FilterReducer,action)
    }

}

export default rootReducer;