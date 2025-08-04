import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppAppBar from './components/AppAppBar';
import AppTheme from './shared-theme/AppTheme';

function App() {
  return (
    <Router>
      <AppTheme>
        <AppAppBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/portfolio" />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AppTheme>
    </Router>
  );
}

export default App;