import React from 'react';
import { useAuth } from '../Token/AuthContext';
import Button from '@mui/material/Button';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Call useNavigate as a function to get the navigation function

  const handleLogout = () => {
    logout();
    navigate('/Login'); // Use the navigation function to redirect to the login page
    toast.success("Logged out successfully");
  };

  return (
    <Button variant="contained" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
