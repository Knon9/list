import React, { useContext } from 'react';
import { UserContext } from './../components/UserContext';

const UserList = () => {
    const { users, setSelectedUser } = useContext(UserContext);

    return (
        <div
            style={{
                width: '30%',
                height: '100vh',
                overflowY: 'scroll',
                borderRight: '1px solid #ccc',
                padding: '10px',
                backgroundColor: '#f4f4f4',
                boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
            }}
        >
            {users.map(user => (
                <div
                    key={user.id}
                    onClick={() => setSelectedUser(user)} // Set the selected user
                    style={{
                        padding: '10px',
                        cursor: 'pointer',
                        borderBottom: '1px solid #ddd',
                        marginBottom: '10px',
                        backgroundColor: '#fff',
                        borderRadius: '5px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                >
                    <p><strong>{user.name}</strong></p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;
