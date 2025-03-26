import React, { useState } from 'react';
import './index.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: null,
    contactNumber: '',
    parentContactNumber: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: formDataToSend,
      });
      const result = await response.json();
      if (response.ok) {
        alert('Account created successfully!');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the account.');
    }
  };

  return (
    <div className="container">
      <h2 className="form-title">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Name', name: 'name', type: 'text' },
          { label: 'Parent Name', name: 'parentName', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
          { label: 'Contact Number', name: 'contactNumber', type: 'tel' },
          { label: 'Parent Contact Number', name: 'parentContactNumber', type: 'tel' },
        ].map(({ label, name, type }) => (
          <div key={name} className="form-group">
            <label className="form-label">{label}:</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        ))}

        {[
          { label: 'Photo', name: 'photo', accept: 'image/*' },
          { label: 'Resume', name: 'resume', accept: '.pdf,.doc,.docx' },
        ].map(({ label, name, accept }) => (
          <div key={name} className="form-group">
            <label className="form-label">{label}:</label>
            <input
              type="file"
              name={name}
              accept={accept}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        ))}

        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
