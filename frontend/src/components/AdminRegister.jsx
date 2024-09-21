import React, { useState } from 'react';
import { AdminRegisterContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminRegisterStyles';
import axios from 'axios'; // Import axios

const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    // e.preventDefault();
    console.log('Admin Registration', email,password)
  
 
  }
  return (
    <AdminRegisterContainer>
      <h2>Admin Register</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type='button' onClick={(e) => handleRegister(e)}>Register</SubmitButton>

      </FormContainer>
    </AdminRegisterContainer>
  );
};

export default AdminRegister