import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Signup = () => {
  const [signupError, setSignupError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const response = await fetch('https://dummyjson.com/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Signup successful', data);
    } else {
      setSignupError('Signup failed');
    }
  };

  return (
    <div>
      {signupError && <div>{signupError}</div>}
      <form onSubmit={handleSubmit}>
        <TextField label="Username" name="username" fullWidth required />
        <TextField label="Password" name="password" type="password" fullWidth required />
        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
};

export default Signup;
