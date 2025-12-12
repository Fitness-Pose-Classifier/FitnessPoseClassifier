import React from 'react';
import './Navbar.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
    window.location.href = '/';  // refresh after logout
  };

  return (
    <nav className="navbar">
      <h1>🧘 Yoga Tracker</h1>

      <div>
        <a href="/">Home</a>
        {user && (
          <>
            <a href="/yoga">Pose Classification</a>
            <a href="/warrior_regressor">Pose Regression</a>
            <a className="logout-btn" onClick={handleLogout}>Logout</a>
          </>
        )}
        {!user && (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
