import React from 'react';

const UserDetails = ({ user }) => {
    return (
        <div
            style={{
                padding: '20px',
                width: '70%',
                border: '1px solid #ccc', // Border around UserDetails
                marginLeft: '20px', // Spacing from the left list
                backgroundColor: '#f9f9f9', // Light background for readability
                borderRadius: '5px', // Rounded corners for the detail box
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Shadow for depth
            }}
        >
            <h2>User Details</h2>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <h3>Address</h3>
            <p><strong>Street:</strong> {user.address.street}</p>
            <p><strong>Suite:</strong> {user.address.suite}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <h3>Company</h3>
            <p><strong>Name:</strong> {user.company.name}</p>
            <p><strong>CatchPhrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>Business:</strong> {user.company.bs}</p>
        </div>
    );
};

export default UserDetails;