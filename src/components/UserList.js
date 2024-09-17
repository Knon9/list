import React from 'react';

const UserList = ({ users, onUserClick }) => {
    return (
        <div
            style={{
                width: '30%',
                height: '100vh',
                overflowY: 'scroll',
                borderRight: '1px solid #ccc',
                padding: '10px',
                backgroundColor: '#f4f4f4', // Light background for better clarity
                boxShadow: '2px 0 5px rgba(0,0,0,0.1)', // Add shadow for separation
            }}
        >
            {users.map(user => (
                <div
                    key={user.id}
                    onClick={() => onUserClick(user)}
                    style={{
                        padding: '10px',
                        cursor: 'pointer',
                        borderBottom: '1px solid #ddd',
                        marginBottom: '10px', // Add spacing between items
                        backgroundColor: '#fff', // White background for each item
                        borderRadius: '5px', // Rounded corners for each item
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Subtle shadow for each item
                        transition: 'background-color 0.3s', // Smooth transition for hover effect
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'} // Change background on hover
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'} // Reset background on hover out
                >
                    <p><strong>{user.name}</strong></p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;