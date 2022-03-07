import React, { memo } from 'react';


interface Props{
    tableHeaders:string[],

}

const Table = memo(({tableHeaders}:Props) => {
    return (
        <div>
          <table>
             <tr>
             {tableHeaders.map((header)=>{
                 return <td>{header}</td>
             })}   
             </tr>
          </table> 
        </div>
    );
});

export default Table;