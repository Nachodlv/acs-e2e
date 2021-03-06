import React, {useState} from 'react';
import './Form.css';

const LoginForm = ({onSubmit, error}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='app-form' onSubmit={(e) => {
      e.preventDefault();
      onSubmit({email, password});
    }}>
      <div className='input-div'>
        <label htmlFor='email'>Email</label>
        <input
          data-cy='email-input'
          id='email'
          type='email'
          placeholder='email'
          required
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className='input-div'>
        <label htmlFor='password'>Password</label>
        <input
          data-cy='password-input'
          id='password'
          placeholder='password'
          type='password'
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div data-cy='login-error-message' className='input-div error-message'>
        <div style={{opacity: error ? 1 : 0}}>
          Wrong email or password
        </div>
      </div>
      <button data-cy='login-submit' className='form-button'>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
