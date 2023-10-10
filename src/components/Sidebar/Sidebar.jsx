import './Sidebar.css';
import { auth } from '../../services/firebase';
import { redirect } from 'react-router-dom';

function Sidebar() {
    function signOut() {
        return redirect("/")
    }

    return (
        <aside className='aside'>   
            <ul>
                <li>
                <img src="/src/assets/chat-bubble.png"/>Direct Messages
                </li>
                <li>
                <img src="/src/assets/multichat-bubble.png"/>Chat Room
                </li>
            </ul>

            <div className="dropdown">  
                <div className="dropdown-content" id='dropdown'>
                    <ul>
                        <li>Settings</li>
                        <li onClick={signOut}>Sign Out</li>
                    </ul>
                </div>
                <button className='dropbtn'>
                    <img src={auth.currentUser.photoURL} className="account-img" />
                    <span htmlFor="dropdown">{auth.currentUser.displayName}</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar;