import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../header';
import Footer from '../footer';
import { colors } from '../constants/colors';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route location

  useEffect(() => {
    // Check login status from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // If not logged in and trying to access /results, redirect to login page
    if (!isLoggedIn && location.pathname === '/results') {
      navigate('/login'); // Redirect to login page if not logged in
    }
  }, [navigate, location]);

  return (
    <div 
      className="min-h-screen relative" 
      style={{
        background: `linear-gradient(to top, 
          ${colors.gradient.bottom} 0%,
          ${colors.gradient.lowerMiddle} 33%,
          ${colors.gradient.upperMiddle} 66%,
          ${colors.gradient.top} 100%)`
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
