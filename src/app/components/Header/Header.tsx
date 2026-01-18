import React, { useState } from 'react';
import styles from './Header.module.css';
import svgPaths from '../../../imports/svg-m590sprq1z';

const AlixLogo: React.FC = () => (
  <svg width="18.897" height="21" viewBox="0 0 18.8967 21" fill="none">
    <path 
      clipRule="evenodd" 
      fillRule="evenodd" 
      d={svgPaths.pa93f100} 
      fill="white" 
    />
  </svg>
);

const ExpandMoreIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d={svgPaths.p15d61c00} fill="white" />
  </svg>
);

const NotificationIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d={svgPaths.p342e1200} fill="white" />
  </svg>
);

const HelpIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d={svgPaths.p11e5c600} fill="white" />
  </svg>
);

interface HeaderProps {
  onMenuToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHamburgerClick = () => {
    if (onMenuToggle) {
      onMenuToggle();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <AlixLogo />
        <div className={styles.separator} />
        <div className={styles.projectName}>ETRM</div>
      </div>
      <div className={styles.rightSection}>
        <nav className={`${styles.navigation} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.navItem}>Dashboard</div>
        <div className={`${styles.navItem} ${styles.active}`}>
          New Request
          <ExpandMoreIcon />
        </div>
      </nav>
       <div className={styles.iconButton}>
          <svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="2" height="26" fill="#727272"/>
          </svg>
      </div>
        <div className={styles.iconButton}>
          <NotificationIcon />
          <div className={styles.badge}>4</div>
        </div>  
        <div className={styles.iconButton}>
          <HelpIcon />
        </div>
        <div className={styles.userAvatar}>JB</div>
      </div>
    </header>
  );
};