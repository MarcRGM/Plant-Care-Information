import Container from './layout/Container';
import NavLink from './navigation/NavLink';
import styles from '../styles/global.module.css';

const Footer = () => {
  return (
    <footer className={`w-full ${styles.glassBackground}`}>
      <Container className="py-6 xs:py-8">
        <div className="flex flex-col text-center justify-center xs:text-left">
          <NavLink href="#" className="text-xs xs:text-sm sm:text-base">
            {'Privacy Policy'}
          </NavLink>
          <p className="text-xs xs:text-sm sm:text-base text-[#9DDE8B]/60">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;