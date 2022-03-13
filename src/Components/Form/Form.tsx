import React from 'react';
import PropTypes from 'prop-types';
 

interface Props{

}

const inputTypes=[{
    placeHolder:"Name",
    inputType:"text"
},{
 placeHolder:"Company",
 inputType:"text"
},{
 placeHolder:"Status",
 inputType:"text"
},{
 placeHolder:"Notes",
 inputType:"text"
}];



function Form(Prop:Props) {
   
    const  onChange=()=>{

    }

    return (
        <div>
         {
         inputTypes.map((inputItem:any)=>{
             return (
                <>
                <InputField
                inputType={inputItem.placeHolder}
                onChange={onChange}
                />
                </>
             )
         })
         }
    
        </div>
    );
}

export default Form;



const InputField=({inputType,onChange}:{inputType:string,onChange:any})=>{
    const [state,setState]=React.useState();

    return(
        <input type="text"></input>
    )

}