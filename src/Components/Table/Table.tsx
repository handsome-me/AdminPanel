import React, { memo, useEffect, useReducer, useRef, useState } from 'react';
import './Table.css';
import {useSelector,useDispatch } from 'react-redux';
import {sortData} from '../../redux/action'
import { reduceEachLeadingCommentRange } from 'typescript';

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

    const {FilterReducer,UserReducer}= useSelector((state:any)=>state);
    const data= useSelector((state:any)=>state);

     console.log("data",data);


   const dispatch=useDispatch();
    const ref=useRef<typeof sortType>("Default");
    ref.current=FilterReducer.sort_by;

    const tableHeaders_=UserReducer.tableHeaders//Object.keys(tableData[0]);
    let tableData=UserReducer.tableData;
    console.log("into table data",tableData);
   const [sort,setSort]=useState<typeof sortType>("Default");
    
   console.log("sorting----",ref.current);
       
     if(ref.current!=="Default"){
         
        tableData= _sortData(tableData,ref.current);
     }

       
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
                const keys:any=tableHeaders_//Object.keys(data);
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
 