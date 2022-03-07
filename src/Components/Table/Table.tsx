import React, { memo } from 'react';
import './Table.css';


interface TableData{
    Name:string,
    Company:string,
    Status:"Active" | "Closed",
    LastUpdate:string,
    Notes:string
};

interface Props {
    tableHeaders:string[],
    tableData:TableData[]
}

 

const Table = memo(({tableHeaders,tableData}:Props)=>{ 


    return (
        <div>
            <div className='flex-row'>
             <div className='table-filter-box'>Company 
             <button></button>
             </div>
             <div className='table-filter-box'>
                 Status
                 <button>up</button>
             </div>
            </div>
          <table className='table'>
             <tr>
             {tableHeaders.map((header)=>{
                 return <th>{header}</th>
             })}   
             </tr>
              
             {
             tableData.map((data:any)=>{
                const keys:any=Object.keys(data);
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