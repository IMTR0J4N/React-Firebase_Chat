import './CreateGroup.css';
import { collection, onSnapshot, query, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import uuid from 'react-uuid';

function CreateGroup() {

    function createGroupAndRedirect(event, name = document.getElementById("#group-name")) {
        event.preventDefault();
        const q = query(
            collection(db, 'group')
        );

        onSnapshot(q, (QuerySnapshot) => {
            const fetchedGroups = [];

            QuerySnapshot.forEach((doc) => {
                fetchedGroups.push({ ...doc.data(), id: doc.id });
            })

            if(fetchedGroups.filter(el => name === el.name)) {
                return alert('This group name is already taken');
            } else {
                addDoc(collection(db, "group"), {
                    id: uuid(),
                    name: name,
                })
            }
        })
    }

    return (
        <div className="create-room--container">
            <form className="create-room--form" onSubmit={(e) => createGroupAndRedirect(e)} autoComplete='off'>
                <h3>Create a Group</h3>
                <input type="text" id='group-name'/>
                <button type='submit'>+ Create</button>
            </form>
        </div>
    )
}

export default CreateGroup;