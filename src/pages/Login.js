import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
      navigate('/about'); // Redirect to a protected page
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
<form onSubmit={handleLogin} autoComplete="off">
  <input
    type="email"
    placeholder="Email"
    name="login-email" // prevent autofill
    autoComplete="off"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <input
    type="password"
    placeholder="Password"
    name="login-password" // prevent autofill
    autoComplete="new-password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  <button type="submit">Login</button>
</form>

    </div>
  );
};

export default Login;
