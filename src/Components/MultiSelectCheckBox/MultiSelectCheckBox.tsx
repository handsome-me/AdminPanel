import React, { memo, useRef } from 'react';
import { isConstructorDeclaration } from 'typescript';
import './MultiSelect.css';
interface props{
    selected:{id:string,value:string}[] ,
    items:string[],
    handleChange:any
}
const MultiSelectCheckBox = memo(({selected,items,handleChange}:props) => {
   
     let selectedItems=useRef(selected).current;
     console.log("seleccted items", selectedItems);
   
     const onHandleChange=(event:any)=>{

         const {id,value}=event.target;
         let t;

          if(selectedItems && selectedItems.length){
           
           const isSelected= selectedItems.find((item)=>item.id===id);
          
              if(isSelected){
                  //if item already select remove it (filter)
                t=selectedItems.filter((item:any)=>item.id!==isSelected.id);
                handleChange(t);
                return;
                }

          }
          selectedItems.push({id,value});
          handleChange(selectedItems)
          return;

           


     }

   const checkBoxContainer=(data:string,selected?:boolean)=>{
      return (<div className='flex-row centerFlexItem margin-top-bottom'>
          <input id={Math.random().toString()} value={data} {...selected&&selected} onChange={onHandleChange} type='checkbox'/>
      <label>{data}</label></div>)
    }
    const onSelect=(event:any)=>{
     console.log("selected elect",event.target.value);
    }
    return (
        <div className="flex-column box-header">
           <div className="flex-row ">
           <div>Company</div>
           <div><button>ClickMe</button></div>
           </div>
             <div className="checkbox-container ">
             {
              items.map((item)=>{
                return checkBoxContainer(item)
              })
             }
              </div>
        </div>
    );
});

export default MultiSelectCheckBox;

