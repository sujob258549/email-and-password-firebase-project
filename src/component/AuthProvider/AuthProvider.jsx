import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../assets/Firebase/firebase.config";

export const CreatContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user , setUser] = useState()
    const [loding ,setloding]= useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
// logine code
    const logInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    // loge out code 

    const logOut = ()=>{
        return signOut(auth)
    }

    // manage user code
useEffect(()=>{
 const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
    console.log(currentUser)
    setUser(currentUser)
    setloding(false)
  });
  return()=>{
        unSubscribe();
  }
},[])
    const provider =
    {
        user,
        createUser, 
        logInUser,
        logOut,
        loding
    };
    return (
        <CreatContext.Provider value={provider}>
            {children}
        </CreatContext.Provider>
    );
};

export default AuthProvider;