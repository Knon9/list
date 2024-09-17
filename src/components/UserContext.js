import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    // Fetch users from API when component mounts
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setSelectedUser(response.data[0]); // Set the first user as default
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <UserContext.Provider value={{ users, selectedUser, setSelectedUser }}>
            {children}
        </UserContext.Provider>
    );
};