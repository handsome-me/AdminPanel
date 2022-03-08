


// const tableData:TableData[]=[{
//     Name:"Meghraj",
//     Company:"Razarpay",
//     Status:"Active",
//     LastUpdate:"1/07/2022",
//     Notes:"Hey hi, its working really good....."
//   },{
//     Name:"Meghraj",
//     Company:"Razarpay",
//     Status:"Active",
//     LastUpdate:"1/07/2022",
//     Notes:"Hey hi, its working really good....."
//   }];

import { isConstructorDeclaration } from "typescript";


interface TableData{
    Name:string,
    Company:string,
    Status:"Active" | "Closed",
    LastUpdate:string,
    Notes:string,
    id:number
};
  
const initialState:any={
    tableData:[{
        Name:"Meghraj",
        id:1,
        Company:"Razarpay",
        Status:"Active",
        LastUpdate:"1/07/2022",
        Notes:"Hey hi, its working really good....."
      },
      {
        Name:"Akshay",
        Company:"google",
        id:2,
        Status:"Closed",
        LastUpdate:"1/07/2022",
        Notes:"Hey hi, its working really good....."
      },
      {
        Name:"AMu",
        Company:"GOejk",
        id:3,
        Status:"Closed",
        LastUpdate:"1/07/2022",
        Notes:"Hey hi, its working really good....."
      },
      {
        Name:"Adiit",
        Company:"zomato",
        id:4,
        Status:"Active",
        LastUpdate:"1/07/2022",
        Notes:"Hey hi, its working really good....."
      }
    ],
   tableHeaders:["Name","Company","id","Status","LastUpdate","Notes"]
}

interface ActionType{
    type:string,
    payLoad:TableData[]
}
 
function UserReducer(state = initialState, action:any) {
    console.log("reducer",action.type);
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    switch (action.type) {
      case 'table':
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

 

 


const initialStateFilter={
   sort_by:"Default",
   filterBy:{
       type:"Default",
       filterItem:"Default"
   }
};



interface actionFilter{
    type:string,
    payload:typeof initialStateFilter
}
const filterReducer=(state=initialStateFilter,action:actionFilter):typeof initialStateFilter=>{

         
       switch( action.type){
       
        case "table/sortData":{
            
             return{
                 ...initialStateFilter,
                 sort_by:action.payload.sort_by,


             }
        }

        case "filter":{


            return{
                ...initialStateFilter,
                filterBy:action.payload.filterBy

            }
        }

         
       }
       return initialStateFilter

}

const rootInitialState={
    UserReducer:initialState,
    FilterReducer:initialStateFilter
}

const rootReducer=(state=rootInitialState ,action:any):typeof rootInitialState=>{
  
    return{
        UserReducer:UserReducer(state.UserReducer,action),
        FilterReducer:filterReducer(state.FilterReducer,action)
    }

}

export default rootReducer;