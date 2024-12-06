import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './navigation/MobileMenu';
import NavLinks from './navigation/NavLinks';
import Container from './layout/Container';
import IconButton from './ui/IconButton';
import { Button } from './ui';
import styles from '../styles/global.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Function to check if user is logged in
  const checkLoginStatus = () => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  };

  // Check login status on component mount and whenever localStorage changes
  useEffect(() => {
    checkLoginStatus();

    // Listen for localStorage changes (e.g., from other tabs)
    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener('storage', handleStorageChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const loginButtons = !isLoggedIn ? (
    <>
      <Link to="/login">
        <Button variant="ghost" size="sm">Login</Button>
      </Link>
      <Link to="/register">
        <Button size="sm">Register</Button>
      </Link>
    </>
  ) : (
    <Button onClick={handleLogout} size="sm">Logout</Button>
  );

  return (
    <>
      <header className={`w-full fixed top-0 z-40 ${styles.glassBackground}`}>
        <Container>
          <div className="flex justify-between items-center h-12 xs:h-14 sm:h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="../../public/images/WATER-DOWN.png" 
                alt="Logo" 
                className="w-32 sm:w-48 md:w-64 lg:w-64 h-auto" 
              />
            </Link>
            <NavLinks className="hidden md:flex space-x-4 lg:space-x-8" />
            <div className="hidden md:flex items-center space-x-4">
              {loginButtons}
            </div>
            <IconButton
              onClick={() => setIsMobileMenuOpen(true)}
              icon={<Menu className="h-5 w-5 xs:h-6 xs:w-6" />}
              label="Open menu"
              className="md:hidden"
            />
          </div>
        </Container>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
