


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
 
function reducer(state = initialState, action:any) {
    console.log("reducer",action.type);
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    switch (action.type) {
      case 'table/sortData':
        {
            console.log("action",action.payload)
           const sortedData= _sortData(state.tableData,action.payload); 
            
           return  {
               ...state,
               tableData:[...sortedData],
               
           }
              

        } 

     
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state
    }
  }

export default reducer;


const _sortData=(data:any,sortingType:"Active"|"Closed")=>{
   

   console.log("sortData is called for sorting...",data);

   const sortedArr= data.sort((a:TableData,b:TableData)=>{
    
        const status=a.Status==sortingType?true:false;
      //  console.log(" STATUS------- ",sortingType);
     if(status){
      return -1;
     }

      return 1;

    })
    console.log('sorted array',sortedArr);
    return sortedArr;
}