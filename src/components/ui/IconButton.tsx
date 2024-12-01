import React from 'react';
import styles from '../../styles/global.module.css';

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const IconButton = ({ onClick, icon, label, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.iconButton} ${className}`}
      aria-label={label}
    >
      {icon}
    </button>
  );
};

export default IconButton;