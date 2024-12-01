import React from 'react';
import styles from '../../styles/global.module.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className = '', onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`${styles.link} ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavLink;