import { useEffect } from 'react';
import './GroupLi.css';
import { useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../services/firebase';

function GroupLi() {
    const [groups, setGroups] = useState([]);

   
}

export default GroupLi;