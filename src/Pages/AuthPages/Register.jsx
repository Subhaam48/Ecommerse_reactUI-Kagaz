import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'; // Import useToast
import "../Csspages/Register.css";

const Register = () => {
  const textRef = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  const text4Ref = useRef();
  const navigate = useNavigate();
  const toast = useToast(); // Initialize useToast
  const data = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [Form, setForm] = useState(data);

  function handleData(e) {
    setForm({ ...Form, [e.target.name]: e.target.value });
  }

  function SubmitHandler(e) {
    e.preventDefault();
    textRef.current.focus();
    text2Ref.current.focus();
    text3Ref.current.focus();
    text4Ref.current.focus();

    if (!(Form.name && Form.email && Form.password && Form.confirmpassword)) {
      // Use toast for displaying a notification
      toast({
        title: 'All fields are mandatory',
        status: 'warning',
        duration: 1000,
        isClosable: true,
        position: 'top'
      });
    } else if (Form.password === Form.confirmpassword) {
      toast({
        title: 'Successfully Registered',
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'top'
      });
      localStorage.setItem('registrationData', JSON.stringify(Form));
      navigate("/LogIn");
    } else {
      toast({
        title: 'Check your confirm password',
        status: 'error',
        duration: 1000,
        isClosable: true,
        position: 'top'
        
      });
    }
  }

  return (
    <div form-container>
      <form className="form" onSubmit={SubmitHandler}>
        <span className="signup">Register</span>
        <input
type="text"
name="name"
value={Form.name}
placeholder="User name"
className="form--input"
onChange={handleData}
ref={textRef}
/>
<input
type="email"
name="email"
value={Form.email}
placeholder="Email address"
className="form--input"
onChange={handleData}
ref={text2Ref}
/>
<input
type="password"
name="password"
value={Form.password}
placeholder="Password"
className="form--input"
onChange={handleData}
ref={text3Ref}
/>
<input
type="password"
name="confirmpassword"
value={Form.confirmpassword}
placeholder="Confirm password"
className="form--input"
onChange={handleData}
ref={text4Ref}
/> 
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
