 


const sortData=(data:"Active"|"Closed")=>{
    return {type: 'table/sortData',payload:data}
 };


 export {
     sortData
 }