import { useState, useEffect } from 'react';
import { matchPath } from 'react-router-dom';
import './ChatList.css'
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../services/firebase';
import CreateGroup from '../CreateGroup/CreateGroup';

function ChatList() {

    const [list, setList] = useState([]);
    const userInGroupChat = matchPath(
        { path: "/chat/group" },
        "/chat/group"
    ) 

    useEffect(() => {
        const q = query(
            collection(db, userInGroupChat ? 'group' : 'dm')
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedList = [];
            QuerySnapshot.forEach((doc) => {
                fetchedList.push({ ...doc.data(), id: doc.id});
            });

            setList(fetchedList);
        });

        return () => unsubscribe;
    }, []);
    return(
        <>
            {userInGroupChat ? <CreateGroup /> : ''}
            <div className="chat-list">
                <nav className="chat-list--nav">
                    <ul className="chat-list--ul">
                        {list?.map((el) => {
                            <li className='chat-list--li'>
                                <a href={`/${userInGroupChat ? 'group' : 'dm'}/${el.id}`}>{el.name}</a>
                            </li>
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default ChatList