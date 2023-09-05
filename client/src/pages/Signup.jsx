import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await addUser({
        variables: {
          username:username,
          email:email,
          password:password
        }
      })

      Auth.login(data.addUser.token)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='w-full h-screen log-bg'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://cdn.pixabay.com/photo/2020/07/02/04/31/matrix-5361690_1280.png'
          alt='/'
        />
        <div className='bg-black/30 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-green-600 text-3xl font-bold'>Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                onChange={(e) => setUsername(e.target.value)}
                className='p-3 my-2 bg-black text-green-600 rounded'
                type='username'
                placeholder='Username'
                autoComplete='username'
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-black text-green-600 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-black text-green-600 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-green-600 py-3 my-6 rounded font-bold'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-green-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-green-600'>
                    Already subscribed to Cinematrix?
                  </span>{' '}
                  <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;