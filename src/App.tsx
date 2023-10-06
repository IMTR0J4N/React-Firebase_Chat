import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar/navbar";
import ChatBox from "./components/ChatBox/chatbox";
import Welcome from "./components/Welcome/welcome";
import './App.css';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App
