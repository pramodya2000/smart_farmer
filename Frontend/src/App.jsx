import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './App.css';

// Simple Home Placeholder
const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Inter' }}>
    <h1 style={{ color: '#1a4d2e' }}>Welcome to Smart Farmer! 🌱</h1>
    <p>You have successfully logged in.</p>
    <button 
      onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}
      style={{ padding: '10px 20px', marginTop: '20px', background: '#1a4d2e', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
    >
      Logout
    </button>
  </div>
);

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
