import { auth } from "../../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from "../../assets/google.jpg";
import GithubSignin from "../../assets/github.png"
import { Navigate } from "react-router-dom";
import './Login.css'

function Login() {

    const [user, loading] = useAuthState(auth)

    const SignIn = (provider) => {
        signInWithRedirect(auth, provider);
    };

    if(user) {
        console.log(user, "user")
        return <Navigate replace to="/"/>
    } else if (loading) {
        console.log(user, "loading")
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
                        <button className="google-sign-in">
                            <img src={GoogleSignin} onClick={() => (SignIn(new GoogleAuthProvider()))} /> 
                        </button>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Login