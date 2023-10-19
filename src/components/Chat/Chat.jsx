import ChatBubble from "../ChatBubble/ChatBubble";
import ChatInput from "../ChatInput/ChatInput";
import { useEffect, useRef, useState } from 'react';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { auth, db } from "../../services/firebase";
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Chat.css';
import Sidebar from "../Sidebar/Sidebar";
import ChatList from "../ChatList/ChatList";

function ChatBox() {

    const [messages, setMessages] = useState([]);
    const [user] = useAuthState(auth);
    const scroll = useRef();

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50),
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({...doc.data(), id: doc.id });
            });

            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );

            setMessages(sortedMessages)
            scroll.current.scrollIntoView({ behavior: "smooth" });
        });
        
        return () => unsubscribe;
    }, [])
    if(!user) {
       return <Navigate redirect to="/login"/>
      } else {
            return (
                <>
                    <Sidebar />
                    <ChatList />
                    <div className="chat-box">
                        <div className="messages-wrapper">
                        {messages?.map((message) => (
                            <ChatBubble scroll={scroll} key={message.id} message={message} />
                        ))} 
                        <span ref={scroll}></span>
                        </div>
                        <ChatInput />
                    </div>
                </>
            );
        }
};

export default ChatBox;