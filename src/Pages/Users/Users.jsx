import { Link } from "react-router-dom"
import data from '../../data/users.json';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useState } from "react";

export const Users = () => {
    const [users, setUsers] = useState(data);
    const [isOpen, setIsOpen] = useState(false);
    const [currentId, setCurrentId] = useState('');
    const removeUser = (id) => {
        setIsOpen(true);
        setCurrentId(id);
    }

    return(
        <div className="Main">
            <ModalWindow 
            call={isOpen}
            onDestroy={() => setIsOpen(false)}
            currentUserId={currentId}
            users={users}
            onDeleteUserFromData={setUsers}
             />
            <h1>Users</h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                        <i onClick={() => removeUser(user.id)} style={{paddingLeft: '30px', cursor: 'pointer'}}>X</i>
                        </li>
                })}
            </ul>
        </div>
    )
}

export default Users;