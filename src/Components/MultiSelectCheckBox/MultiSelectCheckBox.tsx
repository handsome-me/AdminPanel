import React, { memo, useRef } from 'react';
import { isConstructorDeclaration } from 'typescript';
import './MultiSelect.css';
interface props{
    selected:{id:string,value:string}[] ,
    items:string[],
    handleChange:any
}
const MultiSelectCheckBox = memo(({selected,items,handleChange}:props) => {
   
     let selectedItems=useRef<{id:string,value:string}[]>([]).current;
       
        
      selectedItems=[...selected];
     //selectedItems=selected;
     
     console.log("seleccted items", "#131",selected);
   
     const onHandleChange=(event:any)=>{
         console.log("onChnage in multiselectbox",selectedItems);
         console.log("onChnage in multiselectbox",selected);
         const {id,value}=event.target;
         let t;
 
         if(selectedItems && selectedItems.length){
           
           const isSelected= selectedItems.find((item)=>item.id==id);
           console.log("#121","isSelected---",isSelected);
              if(isSelected){
                  //if item already select remove it (filter)
                t=selectedItems.filter((item:any)=>item.id!==isSelected.id);
               
                // selectedItems=[...t];
                console.log("#121","filter result---",...t);

                handleChange([...t]);
                return;
                }

          }
          console.log("#121","result---",selectedItems);
          selectedItems.push({id,value});
          
          handleChange([...selectedItems])
          return;


     }

     
const isItemSelect=(item:string):boolean=>{
    /**it will tell whether item is selected or not by fuiding the item in selected array */
   // console.log("#131","-isIrem",selected,"---",item);
    if(selected && selected.length){
      const itemFound=  selected.find((value)=>value.value.toLowerCase()==item.toLowerCase())
      if(itemFound)return true;
    }
    return false;
}

   const checkBoxContainer=(data:string,selected?:boolean,key?:string)=>{
        
      return (<div className='flex-row centerFlexItem margin-top-bottom'>
          <input id={key||""} value={data} defaultChecked={selected}  onChange={onHandleChange} type='checkbox'/>
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
              items.map((item:any,index:number)=>{
                let isSelected=isItemSelect(item)
                console.log("#131",isSelected,"- ",item);
                return checkBoxContainer(item,isSelected,index.toString())
              })
             }
              </div>
        </div>
    );
});

export default MultiSelectCheckBox;

 