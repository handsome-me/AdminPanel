import React, { memo, useEffect, useReducer, useRef, useState } from 'react';
import './Table.css';
import {useSelector,useDispatch } from 'react-redux';
import {sortData} from '../../redux/action'

interface TableData{
    Name:string,
    Company:string,
    Status:"Active" | "Close",
    LastUpdate:string,
    Notes:string
};

interface Props {
    tableHeaders:string[],
    tableData:TableData[]
}

 let  sortType:"Active" | "Closed" | "Default";

const Table = memo(()=>{ 

    const {tableData,tableHeaders}= useSelector((state:any)=>state);
   const dispatch=useDispatch();
    const ref=useRef<typeof sortType>("Default");
    const tableHeaders_=tableHeaders//Object.keys(tableData[0]);

    console.log("into table data",tableData);
   const [sort,setSort]=useState<typeof sortType>("Default");

    // const [data,setData]=useState()
   
     

    /**
     * Sorting alorithm for status
     * sortBy="Closed";//closed should be on top
     *data.map((a,b)=>{

        const status:a.status==sortBy?true:false;

        if(status){
            return -1;
        }
        return 1;
     })
     */ 

     useEffect(()=>{

        //  if(sort!=="Default"){
        //      console.log("sorting data ","#121",sort);
        //      dispatch(sortData(sort));
        //  }

     },[sort])
 
    const handleClick=()=>{
       
           
        const sortType=ref.current==="Default"?"Closed":ref.current==="Active"?"Closed":"Active";
        console.log("sortee",ref.current,"chanign to ",sortType)
         ref.current=sortType;

           //setSort(sortType);
         dispatch(sortData(sortType));

    }

 
    return (
        <div>
            <div className='flex-row'>
             <div className='table-filter-box'>Company 
             <button></button>
             </div>
             <div className='table-filter-box'>
                 Status
                 <button onClick={handleClick}>up</button>
             </div>
            </div>
          <table className='table'>
             <tr>
             {tableHeaders_.map((header:any)=>{
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