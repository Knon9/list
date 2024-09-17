import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const UserDetailPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        // Fetch users from the API
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setSelectedUser(response.data[0]); // Set the first user by default
            })
            .catch(error => {
                console.error('Error fetching the users', error);
            });
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div style={{ display: 'flex' }}>
            <UserList users={users} onUserClick={handleUserClick} />
            {selectedUser && <UserDetails user={selectedUser} />}
        </div>
    );
};

export default UserDetailPage;