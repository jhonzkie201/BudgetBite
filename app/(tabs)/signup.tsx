import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [signedUp, setSignedUp] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!signedUp) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setLoginData({
        ...loginData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
    } else {
      alert('Form submitted successfully! Proceeding to login...');
      setSignedUp(true);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with email: ${loginData.email}`);
  };

  if (signedUp) {
    return (
      <>
        <style jsx>{`
          .form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 450px;
            margin: 60px auto;
            padding: 40px;
            border-radius: 15px;
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
            box-shadow: 0 15px 25px rgba(168, 237, 234, 0.6);
            font-family: 'Poppins', sans-serif;
          }
          h2 {
            font-size: 28px;
            color: #5a4d53;
            margin-bottom: 30px;
            font-weight: 700;
            text-align: center;
            letter-spacing: 1px;
          }
          .form-group {
            width: 100%;
            margin-bottom: 20px;
          }
          .form-group label {
            font-size: 16px;
            color: #6b586d;
            margin-bottom: 8px;
            display: block;
            font-weight: 600;
          }
          input[type='email'],
          input[type='password'] {
            width: 100%;
            padding: 14px;
            font-size: 16px;
            border-radius: 10px;
            border: 1px solid #d9c6d6;
            background-color: #fdf6fb;
            transition: all 0.3s ease;
            box-sizing: border-box;
            color: #5a4d53;
          }
          input[type='email']:focus,
          input[type='password']:focus {
            border: 2px solid #fa709a;
            outline: none;
            box-shadow: 0 0 10px rgba(250, 112, 154, 0.4);
            background-color: #fff0f6;
          }
          input::placeholder {
            color: #c7b4c7;
          }
          .submit-btn {
            width: 100%;
            padding: 14px;
            font-size: 18px;
            background: linear-gradient(90deg, #fa709a 0%, #fee140 100%);
            color: #5a4d53;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 700;
            transition: background 0.4s ease;
            box-shadow: 0 8px 15px rgba(250, 112, 154, 0.3);
          }
          .submit-btn:hover {
            background: linear-gradient(90deg, #f75d8f 0%, #fbe870 100%);
            box-shadow: 0 10px 20px rgba(247, 93, 143, 0.5);
            color: #3e2c40;
          }
        `}</style>

        <div className="form-container">
          <h2>Login to Your Account</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="submit-btn">Log In</button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx>{`
        .signup-form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 450px;
          margin: 60px auto;
          padding: 40px;
          border-radius: 15px;
          background: linear-gradient(135deg, #fceabb 0%, #f8b500 100%);
          box-shadow: 0 15px 25px rgba(248, 181, 0, 0.4);
          font-family: 'Poppins', sans-serif;
        }
        .signup-form-container:hover {
          box-shadow: 0 20px 35px rgba(248, 181, 0, 0.6);
        }
        h2 {
          font-size: 28px;
          color: #4b3f35;
          margin-bottom: 30px;
          font-weight: 700;
          text-align: center;
          letter-spacing: 1px;
        }
        .form-group {
          width: 100%;
          margin-bottom: 20px;
        }
        .form-group label {
          font-size: 16px;
          color: #5a4b3a;
          margin-bottom: 8px;
          display: block;
          font-weight: 600;
        }
        input[type='text'],
        input[type='email'],
        input[type='password'] {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          border-radius: 10px;
          border: 1px solid #aa995d;
          background-color: #fff9e6;
          transition: all 0.3s ease;
          box-sizing: border-box;
          color: #5a4b3a;
        }
        input[type='text']:focus,
        input[type='email']:focus,
        input[type='password']:focus {
          border: 2px solid #b57c00;
          outline: none;
          box-shadow: 0 0 10px rgba(181, 124, 0, 0.5);
          background-color: #fff7cc;
        }
        input::placeholder {
          color: #cbbf9f;
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
          font-size: 18px;
          background: linear-gradient(90deg, #f8b500 0%, #fceabb 100%);
          color: #4b3f35;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 700;
          transition: background 0.4s ease;
          box-shadow: 0 8px 15px rgba(248, 181, 0, 0.3);
        }
        .submit-btn:hover {
          background: linear-gradient(90deg, #d99400 0%, #f8b500 100%);
          box-shadow: 0 10px 20px rgba(217, 148, 0, 0.5);
          color: #3e2e16;
        }
      `}</style>

      <div className="signup-form-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
