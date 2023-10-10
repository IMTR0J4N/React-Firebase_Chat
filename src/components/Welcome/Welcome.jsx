import { auth } from "../../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from "react-router-dom";
import './Welcome.css';

function Welcome() {

  const [user] = useAuthState(auth);

  if(user) {
    return <Navigate redirect to="/chat"/>
  } else {
    return (
      <main className="welcome">
        <h2>Welcome to React Chat.</h2>
        <p>Sign in with Google to chat with with your fellow React Developers.</p>
        <a className="sign-in" href="/login">
            Go to Login page  
        </a>
      </main>
    );
  }
};

export default Welcome;