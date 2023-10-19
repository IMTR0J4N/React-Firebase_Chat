import { auth, db } from "../../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { query, collection, addDoc, onSnapshot } from "firebase/firestore";
import GoogleSignin from "../../assets/google.jpg";
import { Navigate } from "react-router-dom";
import './Login.css'
import { useEffect } from "react";

function Login() {

    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        if(user) {
            const q = query(
                collection(db, 'user'),
            )
    
            onSnapshot(q, (QuerySnapshot) => {
                let createUser = true;
    
                QuerySnapshot.forEach((doc) => {
                    if(doc.data().id === user.uid) {
                        createUser = false;
                    }
                })
    
                if(createUser) {
                    addDoc(collection(db, 'user'), {
                        id: user.uid,
                        name: user.displayName,
                        avatar: user.photoURL        
                    })
                }
            })
        }
    }, [user])

    const SignIn = (provider) => {
        signInWithRedirect(auth, provider);
    };


    if(user) {
        return <Navigate replace to="/chat/group/1"/>
    } else if (loading) {
        return (
            <>
            <h2>Loading User, please wait...</h2>
            <div className="container">
                <div className="dash uno"></div>
                <div className="dash dos"></div>
                <div className="dash tres"></div>
                <div className="dash cuatro"></div>
            </div>
            </>
        )
    } else {
        return (
            <div className="login-wrapper">
                <div className="login-container">
                    <h1>Sign UP</h1>
                    <div className="sign-in-container">
                        <button className="google-sign-in" onClick={() => (SignIn(new GoogleAuthProvider()))}>
                            <img src={GoogleSignin} /> 
                        </button>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Login