import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';

const Navbar = () => {
  // const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await Auth.logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center  justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-center md:text-center bg-black/75 text-green-600 text-6xl font-semibold cursor-pointer animate-fade'>
          Cinematrix
        </h1>
      </Link>
      {Auth.loggedIn() ? (
        <div>
          <Link to='/account'>
            <button className='text-green-600 pr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-green-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-green-600 pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-green-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

