import Container from './layout/Container';
import styles from '../styles/global.module.css';

const Footer = () => {
  return (
    <footer className={`w-full ${styles.glassBackground}`}>
      <Container className="py-6 xs:py-8">
        <div className="flex flex-col text-center justify-center xs:text-left">
          <p className="text-xs xs:text-sm sm:text-base text-[#9DDE8B]/60">
            © 2024 Water-Down. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;