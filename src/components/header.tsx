import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './navigation/MobileMenu';
import NavLinks from './navigation/NavLinks';
import Container from './layout/Container';
import IconButton from './ui/IconButton';
import { Button } from './ui';
import styles from '../styles/global.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={`w-full fixed top-0 z-40 ${styles.glassBackground}`}>
        <Container>
          <div className="flex justify-between items-center h-12 xs:h-14 sm:h-16">
            <Link to="/" className="flex items-center">
              <span className="text-[#425F57] font-semibold text-base xs:text-lg sm:text-xl lg:text-2xl">
                Water-Down
              </span>
            </Link>
            <NavLinks className="hidden md:flex space-x-4 lg:space-x-8" />
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Register</Button>
              </Link>
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