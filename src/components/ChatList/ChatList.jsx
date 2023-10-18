import { useState } from 'react';
import { matchPath } from 'react-router-dom';
import './ChatList.css'

function ChatList() {

    const [list, setList] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, matchPath('/group/:id') ? 'group' : 'dm')
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
}

export default ChatList