import React, { memo } from 'react';
import './MultiSelect.css';
const MultiSelectCheckBox = memo(() => {
   
   const companyArr=["Select All","Facebook","Google","Coinbase","Linkedin"];
   
   const checkBoxContainer=(data:string)=>{
      return (<div className='flex-row centerFlexItem margin-top-bottom'><input value={data}  type='checkbox'/>
      <label>{data}</label></div>)
    }
    return (
        <div className="flex-column box-header">
           <div className="flex-row ">
           <div>Company</div>
           <div><button>ClickMe</button></div>
           </div>
             <div className="checkbox-container ">
             {
              companyArr.map((item)=>{
                return checkBoxContainer(item)
              })
             }
              </div>
        </div>
    );
});

export default MultiSelectCheckBox;

