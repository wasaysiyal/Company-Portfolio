import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    alert('Logged out!');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {user && (
        <>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </>
      )}
      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={handleLogout} style={{ background: 'none', color: 'white', border: 'none', cursor: 'pointer' }}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
