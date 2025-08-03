import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppTheme from './shared-theme/AppTheme';
import Portfolio from './components/Portfolio';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './components/About'
import AppAppBar from './components/AppAppBar';

function App() {
  return (
    <Router>
      <AppTheme>
        <AppAppBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Portfolio />} />
          <Route path="/about" element={<About/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add other routes here */}
        </Routes>
      </AppTheme>
    </Router>
  );
}

export default App;