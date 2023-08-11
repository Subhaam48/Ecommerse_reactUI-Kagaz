import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [Form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  useEffect(() => {
    // Retrieve stored data from localStorage
    const storedData = JSON.parse(localStorage.getItem('registrationData')) || {};
    setForm(storedData);
  }, []);

  function handleData(e) {
    setForm({ ...Form, [e.target.name]: e.target.value });
  }

  function SubmitHandler(e) {
    e.preventDefault();

    if (!(Form.email && Form.password && Form.confirmpassword)) {
      toast({
        title: 'All fields are mandatory',
        status: 'warning',
        duration: 1000,
        isClosable: true,
        position: 'top',
      });
    } else if (Form.password === Form.confirmpassword) {
      toast({
        title: 'Successfully Logged In',
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'top',
      });
      navigate('/Home');
    } else {
      toast({
        title: 'Check your password',
        status: 'error',
        duration: 1000,
        isClosable: true,
        position: 'top',
      });
    }
  }

  return (
    <div>
      <form className="form" onSubmit={SubmitHandler}>
        <span className="signup">Login</span>
        <input
          type="email"
          name="email"
          value={Form.email}
          placeholder="Email address"
          className="form--input"
          onChange={handleData}
        />
        <input
          type="password"
          name="password"
          value={Form.password}
          placeholder="Password"
          className="form--input"
          onChange={handleData}
        />
        <input
          type="password"
          name="confirmpassword"
          value={Form.confirmpassword}
          placeholder="Confirm password"
          className="form--input"
          onChange={handleData}
        />
        <button className="form--submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
