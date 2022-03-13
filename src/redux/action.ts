import {sortingType,userData,filterByT,actionTypeUser,actionTypeFilter,user,filter,filterBy,root} from './types_redux';



const sortData=(data:typeof sortingType):actionTypeFilter=>{
    return{
        type:'SORT_BY',
        payload:{
            sortBy:data,
            filterBy:[]
        }
    }
 };

 const filterData=(data:filterByT):any=>{
    
    return{
        type:'FILTER',
        payload:{
            sortBy:"",
            filterBy:data
        }
    }

 }

 const addData=(data:any):any=>{


     return {
         type:"ADD_DATA",
        payload:data
     }


 }

 export {
     sortData,
     filterData,
     addData
 }