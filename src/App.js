import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <Router>
    <div>
      <UserDetailPage />
    </div> 
    </Router>
  );
}

export default App;