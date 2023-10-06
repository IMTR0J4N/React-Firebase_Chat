import { useState } from 'react';
import { auth, db } from '../../services/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function SendMessage() {
  const [message, setMessage] = useState("");

  async function sendMessage(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();

    if(message.trim() === "") {
      alert('Enter a valid message');
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  }

  return (
    <form className="send-message" onSubmit={(event) => sendMessage(event)}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
      />
      <button type="submit">Send</button>
    </form>
  );
  };
  
  export default SendMessage;