import "firebase/firestore";

import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Components/Table/Table';
/**Redux setup*/
import ReduxWrapper from './redux/ReduxWrapper';
import TableWrapper from './Components/TablerWrapper/TableWrapper';
import Form from './Components/Form/Form';
 
import { addData, filterData, sortData, } from './redux/action';
import firebase from 'firebase/app';
 // import { doc, setDoc } from 'firebase/firestore';
//const {doc,setDoc} =require('firebase/firestore');
//import {useSelector,useDispatch,useStore} from 'react-redux';
import { user } from './redux/types_redux';
import config from './config';
import Firebase from 'firebase';

const tableHeaders=["Name","Company","Status","LastUpdate","Notes"];

interface TableData{
  Name:string,
  Company:string,
  Status:"Active" | "Closed",
  LastUpdate:string,
  Notes:string
};

const tableData:TableData[]=[{
  Name:"Meghraj",
  Company:"Razarpay",
  Status:"Active",
  LastUpdate:"1/07/2022",
  Notes:"Hey hi, its working really good....."
},{
  Name:"Meghraj",
  Company:"Razarpay",
  Status:"Active",
  LastUpdate:"1/07/2022",
  Notes:"Hey hi, its working really good....."
}];
 
 
function App(){

const  writeUserData = () => {
  Firebase.database().ref('/collection/Data').set({
  Name:"Meghraj",
  Company:"Razarpay",
  Status:"Active",
  LastUpdate:"1/07/2022",
  Notes:"Hey hi, its working really good....."
});
  console.log('DATA SAVED');
}

async function AddUser(){
 
  // await setDoc(doc(db, "cities", "LA"), {
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  // });

  const data=await Firebase.firestore().collection('Data').doc().set({Name:"Meghraj",
  Company:"Razarpay",
  Status:"Active",
  LastUpdate:"1/07/2022",
  Notes:"Hey hi, its working really good....."
})
console.log("data saved");

}


async function getMarker() {
  const snapshot = await firebase.firestore().collection('Data').get()
  return snapshot.docs.map(doc => doc.data());
}

const getUserData = () => {
  
        Firebase.app();

  // const firebaseDb=   Firebase.firestore();
        
  //  const data=firebaseDb.collection('Data').doc()
  getMarker().then((data)=>{
    console.log('DATA RETRIEVED',data);

  });
     
 
}


  useEffect(()=>{
    if(!Firebase.apps.length){
     Firebase.initializeApp(config);
    }
     
  //  writeUserData();
    getUserData();
    AddUser();

  },[])
  
  return (
   <ReduxWrapper>
      <div className="App">
      <header className="Admin Panel">
       <TableWrapper></TableWrapper>
       
      </header>
    </div>
   </ReduxWrapper>
  );
}

export default App;
