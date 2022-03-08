import React, { memo, useEffect, useReducer, useRef, useState } from 'react';
import './Table.css';
// import {useSelector,useDispatch } from 'react-redux';
 
interface Props {
    tableHeaders:string[],
    tableData:any[]
}
 
const Table:React.FC<Props>=memo(({tableData,tableHeaders})=>{ 

    const handleClick=()=>{
       
           
        // const sortType=ref.current==="Default"?"Closed":ref.current==="Active"?"Closed":"Active";
        // console.log("sortee",ref.current,"chanign to ",sortType)
        //  ref.current=sortType;

        //    //setSort(sortType);
        //  dispatch(sortData(sortType));

    }

 
    return (
        <div>
            
          <table className='table'>
             <tr>
             {tableHeaders.map((header:any)=>{
                 return <th>{header}</th>
             })}   
             </tr>
              
             {
             tableData.map((data:any)=>{
                const keys:any=tableHeaders//Object.keys(data);
                const rowData:any=[];
                for(let i=0;i<keys.length;i++){
                   rowData.push(<td>{data[keys[i]]}</td>);
                }
                return <tr>{rowData}</tr>
             })
            
             }
          </table> 
        </div>
    );
});

export default Table;


