import React, { useContext } from 'react';
import { UserContext } from './../components/UserContext';

const UserDetails = () => {
    const { selectedUser } = useContext(UserContext);

    // If no user is selected yet, show a message
    if (!selectedUser) {
        return <p>Please select a user to see the details.</p>;
    }

    return (
        <div
            style={{
                padding: '20px',
                width: '70%',
                border: '1px solid #ccc',
                marginLeft: '20px',
                backgroundColor: '#f9f9f9',
                borderRadius: '5px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
        >
            <h2>User Details</h2>
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <h3>Address</h3>
            <p><strong>Street:</strong> {selectedUser.address.street}</p>
            <p><strong>Suite:</strong> {selectedUser.address.suite}</p>
            <p><strong>City:</strong> {selectedUser.address.city}</p>
            <p><strong>Zipcode:</strong> {selectedUser.address.zipcode}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
            <h3>Company</h3>
            <p><strong>Name:</strong> {selectedUser.company.name}</p>
            <p><strong>CatchPhrase:</strong> {selectedUser.company.catchPhrase}</p>
            <p><strong>Business:</strong> {selectedUser.company.bs}</p>
        </div>
    );
};

export default UserDetails;
