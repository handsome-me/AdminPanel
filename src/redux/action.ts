 


const sortData=(data:"Active"|"Closed")=>{
    return {type: 'table/sortData',payload:{
        sort_by:data
    }}
 };


 export {
     sortData
 }