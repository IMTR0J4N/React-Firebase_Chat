import GoogleSignin from "../../assets/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../services/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

function Welcome() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
        />
      </button>
    </main>
  );
};

export default Welcome;