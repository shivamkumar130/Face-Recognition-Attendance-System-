import React, { useState } from 'react';
import axios from 'axios';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async () => {
    try {
      const res = await axios.post('/api/signin', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Signed in successfully');
    } catch (err) {
      alert('Signin failed');
    }
  };

  return (
    <div>
      <h2>Signin</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signin}>Login</button>
    </div>
  );
}
export default Signin;