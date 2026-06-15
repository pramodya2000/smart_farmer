import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Placeholder for Signup */}
        <Route path="/signup" element={<div style={{textAlign: 'center', marginTop: '50px'}}><h2>Sign Up Page Coming Soon</h2><a href="/login">Back to Login</a></div>} />
      </Routes>
    </Router>
  );
}

export default App;
