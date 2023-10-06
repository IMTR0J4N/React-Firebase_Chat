import Message from "../Message/message";
import SendMessage from "../SendMessage/sendmessage";

function ChatBox() {
    return (
        <main className="chat-box">
            <div className="messages-wrapper">
               <Message /> 
            </div>
            <SendMessage />
        </main>
    );
};

export default ChatBox;