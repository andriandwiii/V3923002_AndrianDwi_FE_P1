import { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register dengan:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br/>
      <input
        type="tel"
        name="phone"
        placeholder="No Telp"
        value={formData.phone}
        onChange={handleChange}
      />
      <br/>
      <input
        type="text"
        name="fullName"
        placeholder="Nama Lengkap"
        value={formData.fullName}
        onChange={handleChange}
      />
      <br/>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br/>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
