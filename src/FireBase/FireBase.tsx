import "firebase/firestore";
import firebase from 'firebase/app';
import config from '../config';
import Firebase from 'firebase';

const addData=async function(){
    
  const data=await Firebase.firestore().collection('Data').doc().set({Name:"Meghraj",
  Company:"Razarpay",
  Status:"Active",
  LastUpdate:"1/07/2022",
  Notes:"Hey hi, its working really good....."
})
console.log("data saved");
};

const getUserData=async()=>{
    const snapshot = await firebase.firestore().collection('Data').get()
    return snapshot.docs.map(doc => doc.data());
}
export {
    addData,
    getUserData,
    
}