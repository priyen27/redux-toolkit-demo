import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from './UserFormSlice';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });
  const userForm = useSelector((state) => state.userForm);
  const dispatch = useDispatch();
  console.log('>>>userForm', userForm);

  const handleChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
    console.log('>>>formData', formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserData(formData));
  };

  return (
    <div className="user-form">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange(e, 'firstName')}
          />
        </div>
        <div className="form-field">
        <label>Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange(e, 'lastName')}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
};

export default UserForm;