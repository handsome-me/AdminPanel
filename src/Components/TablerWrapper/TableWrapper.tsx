import React, { memo ,useRef, useState} from 'react';
import {useSelector,useDispatch,useStore} from 'react-redux';
import { filterData, sortData, } from '../../redux/action';
import { root, user, userData } from '../../redux/types_redux';
import MultiSelectCheckBox from '../MultiSelectCheckBox/MultiSelectCheckBox';
import Table from '../Table/Table';
 
const TableWrapper = memo(() => {
    
const {UserReducer,FilterReducer}= useSelector((state:root)=>state);
const [selected,setSelected]=useState<[{id:string,value:string}]|[]>([]);

const dispatch=useDispatch();
 console.log(FilterReducer);

  let tableData=UserReducer.data; 
  const tablerHeaders=Object.keys(tableData[0]);     
  
  if(FilterReducer.sortBy!=="DEFAULT"){
    tableData= _sortData(tableData,FilterReducer.sortBy)
  };
  
  if(FilterReducer.filterBy&& FilterReducer.filterBy.length){
   const filteredData= filter(UserReducer,FilterReducer.filterBy);
   console.log("filtered data","#121",filteredData);
   tableData=filteredData;
  }




   console.log(tableData);

   const handleClick=(event:any)=>{
     const value= event.target.value;
     console.log("value of clicked",value);
     const sortBy=value==="DEFAULT"?"CLOSED":value==="CLOSED"?"ACTIVE":"CLOSED"
      dispatch(sortData(sortBy));
   }

   const handleCheckbox=(selectedItem:[{id:string,value:string}] | [])=>{

     console.log("selectedItems",selectedItem);
     //setSelected(selectedItem)
     dispatch((filterData(selectedItem)))
   }
   const companyArr=["Select All","coinbase","razaorpay","gojek","google","meesho","facebook"];
     
    return (
        <div>
             <div className='flex-row'>
             <div className='table-filter-box'>
             <MultiSelectCheckBox
               selected={FilterReducer.filterBy}
               handleChange={handleCheckbox}
               items={companyArr}

             />
             </div>
             <div className='table-filter-box'>
                 Status
                 <button value={FilterReducer.sortBy} onClick={handleClick}>up</button>
             </div>
            </div>
          <Table
       tableHeaders={tablerHeaders}
       tableData={tableData}
       ></Table>
        </div>
    );
});

export default TableWrapper;



const _sortData=(data:any,sortingType:"ACTIVE"|"CLOSED")=>{
   

    console.log("sortData is called for sorting...",data);
 
    const sortedArr= data.sort((a:userData,b:userData)=>{
     
         const status=a.status.toLowerCase()==sortingType.toLowerCase()?true:false;
       //  console.log(" STATUS------- ",sortingType);
      if(status){
       return -1;
      }
 
       return 1;
 
     })
     console.log('sorted array',sortedArr);
     return sortedArr;
 }
 
 const filter=(data1:user,data2:any)=>{
     const _result:any=[];
      data2.map((item:any)=>{
        console.log("#131",data2);
        const avl=data1.data.filter((d)=>{
          return d.company.toLowerCase()==item.value.toLowerCase();
        });
        
        _result.push(...avl);

     });
     return _result

 }
 