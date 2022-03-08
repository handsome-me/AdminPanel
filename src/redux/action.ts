import {sortingType,userData,actionTypeUser,actionTypeFilter,user,filter,filterBy,root} from './types_redux';



const sortData=(data:typeof sortingType):actionTypeFilter=>{
    return{
        type:'SORT_BY',
        payload:{
            sortBy:data,
            filterBy:"COMPANY"
        }
    }
 };


 export {
     sortData
 }