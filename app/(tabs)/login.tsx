import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      alert('Logged in successfully!');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <>
      <style jsx>{`
        .login-form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 400px;
          margin: 60px auto;
          padding: 30px 25px;
          border-radius: 15px;
          background: linear-gradient(135deg, #a858ddff, #61e6daff);
          box-shadow: 0 15px 25px rgba(100, 100, 111, 0.2);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 28px;
          color: #334e68;
          margin-bottom: 25px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .form-group {
          width: 100%;
          margin-bottom: 20px;
        }

        .form-group label {
          font-size: 15px;
          color: #486581;
          margin-bottom: 8px;
          display: block;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        input[type='email'],
        input[type='password'] {
          width: 100%;
          padding: 14px 16px;
          font-size: 16px;
          border-radius: 12px;
          border: 2px solid #2881daff;
          background-color: #fff;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: inset 0 1px 3px rgba(50, 50, 93, 0.1);
        }

        input[type='email']:focus,
        input[type='password']:focus {
          border-color: #7f9cf5;
          outline: none;
          box-shadow: 0 0 8px #7f9cf5aa;
        }

        button {
          width: 100%;
          padding: 14px 0;
          font-size: 18px;
          background: #009600ff;
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 700;
          letter-spacing: 0.05em;
          transition: background 0.4s ease;
          box-shadow: 0 8px 15px rgba(127, 156, 245, 0.4);
        }

        button:hover {
          background: #f01010ff;
          box-shadow: 0 10px 20px rgba(90, 123, 216, 0.6);
        }

        .alert {
          background-color: #ef476f;
          color: white;
          padding: 12px 15px;
          text-align: center;
          border-radius: 10px;
          margin-top: 15px;
          font-weight: 600;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 10px rgba(239, 71, 111, 0.4);
        }

        .alert-success {
          background-color: #06d6a0;
          box-shadow: 0 4px 10px rgba(6, 214, 160, 0.4);
        }

        .alert-warning {
          background-color: #f4a261;
          box-shadow: 0 4px 10px rgba(244, 162, 97, 0.4);
        }
      `}</style>

      <div className="login-form-container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Your secure password"
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
