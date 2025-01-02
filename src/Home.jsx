import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>

      <Button 
        variant="contained" 
        color="primary" 
        style={{ margin: '10px' }} 
        onClick={() => navigate("/signup")}
      >
        Signup
      </Button>

      <Button 
        variant="contained" 
        color="secondary" 
        style={{ margin: '10px' }} 
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
    </div>
  );
};

export default Home;
