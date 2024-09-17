import React from 'react';
import { UserProvider } from './components/UserContext';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <UserProvider>
      <div style={{ display: 'flex' }}>
        <UserList />
        <UserDetails />
      </div>
    </UserProvider>
  );
}

export default App;
