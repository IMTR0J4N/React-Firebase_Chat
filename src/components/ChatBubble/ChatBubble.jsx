import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './ChatBubble.css';

function Message({ message }) {
  
  const [user] = useAuthState(auth);

  return (
    <div
      className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className={`chat-bubble-avatar_${message.uid === user.uid ? "right" : "left"}`}
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
  };
  
  export default Message;