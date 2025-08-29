import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async () => {
    try {
      const res = await axios.post('/api/signup', { email, password });
      alert(res.data.msg);
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signup}>Create Account</button>
    </div>
  );
}
export default Signup;