import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
    } else {
      console.log('Form Data:', formData);
      alert('Registration Successful!');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>
      <div className="flex">
        <label>
          <input
            className="input"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <span>Firstname</span>
        </label>
        <label>
          <input
            className="input"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input
          className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span>Email</span>
      </label>

      <label>
        <input
          className="input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span>Password</span>
      </label>

      <label>
        <input
          className="input"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <span>Confirm password</span>
      </label>

      <button className="submit" type="submit">Submit</button>
      <p className="signin">Already have an account? <a href="#">Signin</a></p>
    </form>
  );
};

export default SignUp;
