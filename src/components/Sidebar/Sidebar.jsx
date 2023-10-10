import './Sidebar.css';
import { auth } from '../../services/firebase';
import { Navigate } from 'react-router-dom';

function Sidebar() {
    function signOut() {
        auth.signOut();
    }

    return (
        <aside className='aside'>   
            <ul>
                <li>Direct Messages</li>
                <li onClick={<Navigate redirect to="/chatroom"/>}>Chat Room</li>
            </ul>

            <div className="dropdown">
                <input type="checkbox" name="dropdown" id="dropdown-check" />
                <img src={auth.currentUser.photoURL} className="account-img" />
                <label htmlFor="dropdown">{auth.currentUser.displayName}</label>
                <div className="dropdown-content">
                    <ul>
                        <li>Settings</li>
                        <li>Sign Out</li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;