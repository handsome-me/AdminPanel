import "firebase/firestore";
import firebase from 'firebase/app';
import config from '../config';
import Firebase from 'firebase';
import { user } from "../redux/types_redux";

const addData=async function(userData:user){
    
  const data=await Firebase.firestore().collection('Data').doc().set(userData)
  return data;

};

const getUserData=async()=>{
    const snapshot = await firebase.firestore().collection('Data').get()
    return snapshot.docs.map(doc => doc.data());
}
export {
    addData,
    getUserData,

}