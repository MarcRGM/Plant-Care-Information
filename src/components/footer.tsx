import Container from './layout/Container';
import NavLink from './navigation/NavLink';
import styles from '../styles/global.module.css';

const QUICK_LINKS = ['Privacy Policy', 'Terms of Service', 'Contact'] as const;

const Footer = () => {
  return (
    <footer className={`w-full ${styles.glassBackground}`}>
      <Container className="py-6 xs:py-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
          <div className="text-center xs:text-left">
            <h3 className={styles.heading}>About Us</h3>
            <p className="text-xs xs:text-sm sm:text-base text-[#9DDE8B]/80">
              DESCRIPTION
            </p>
          </div>
          <div className="text-center xs:text-left">
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className="space-y-1.5 xs:space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item}>
                  <NavLink href="#" className="text-xs xs:text-sm sm:text-base">
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 xs:mt-8 pt-6 xs:pt-8 border-t border-[#9DDE8B]/20 text-center">
          <p className="text-xs xs:text-sm sm:text-base text-[#9DDE8B]/60">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;