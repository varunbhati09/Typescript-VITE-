import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import './UserForm.css';


const UserForm: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = () => {
    if (name && phoneNumber && email) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phoneNumber, email }));

      navigate('/second-page');
    } else {
      alert('Please enter all details before submitting the form.');
    }
  };

  return (
    <div className="form-container">
      <form>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
