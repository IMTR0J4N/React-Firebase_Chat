import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from "../../assets/btn_google_signin_dark_pressed_web.png";

function NavBar() {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;