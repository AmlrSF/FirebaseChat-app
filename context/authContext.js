'use client'

import { useContext ,createContext,useEffect,useState } from 'react';
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
const AuthContext = createContext();

import { auth } from '@/firebaseAuth/firebase';

export const AuthContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const facebookSignIn = ()=>{
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider);
    }

    const Logout = () =>{
        signOut(auth)
    }

    useEffect(()=>{
        const Logged = onAuthStateChanged(auth, (CurrUser)=>{
            setUser(CurrUser);

            console.log(user);
        });

        return ()=>Logged();
    },[])

    return (
        <AuthContext.Provider value={{googleSignIn,user,facebookSignIn,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth  =  () =>{
    return useContext(AuthContext);

}