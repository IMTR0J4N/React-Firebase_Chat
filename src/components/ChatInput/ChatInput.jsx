import { useState } from 'react';
import { auth, db } from '../../services/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import './ChatInput.css';

function SendMessage() {
  const [message, setMessage] = useState("");

  async function sendMessage(event) {
    event.preventDefault();
    setMessage("");
    
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
    
  }
  
    return (
      <form className="send-message" onSubmit={(event) => sendMessage(event)} autoComplete='off'>
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
          placeholder="Write a message ..."
        />
        <button type="submit">
          <img className='submit-img' src="/src/assets/send-btn.png"/>
        </button>
      </form>
    );  
  };
  
  export default SendMessage;