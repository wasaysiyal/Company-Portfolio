import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../App.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
<form onSubmit={handleRegister} autoComplete="off">
  <input
    type="email"
    placeholder="Email"
    name="register-email"
    autoComplete="off"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <input
    type="password"
    placeholder="Password"
    name="register-password"
    autoComplete="new-password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  <button type="submit">Register</button>
</form>
    </div>
  );
};

export default Register;