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
            sortBy:data,
            filterBy:data
        }
    }

 }

 export {
     sortData,
     filterData
 }