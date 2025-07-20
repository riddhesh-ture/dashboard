import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppTheme from './shared-theme/AppTheme';
import Blog from './Blog';
import SignIn from './SignIn';
import SignUp from './SignUp'; // Import the SignUp component
import AppAppBar from './components/AppAppBar';

function App() {
  return (
    <Router>
      <AppTheme>
      <AppAppBar />
      
      <Routes>
        <Route path="/" element={<Navigate replace to="/blog" />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add other routes here */}
        </Routes>
      </AppTheme>
    </Router>
  );
}

export default App;