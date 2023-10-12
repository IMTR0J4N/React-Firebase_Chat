import { auth } from "../../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from "../../assets/btn_google_signin_dark_pressed_web.png";
import { Navigate } from "react-router-dom";

function Login() {

    const [user] = useAuthState(auth)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    };

    if(user) {
        return <Navigate replace to="/"/>
    } else {
        return (
            <div className="login-container">
            <h1>Sign UP</h1>
            <button className="sign-in">
                <img src={GoogleSignin} onClick={googleSignIn} /> 
            </button>
       </div> 
        )
    }
}

export default Login