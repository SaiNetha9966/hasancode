import React from 'react';
import styles from './SubmissionSuccess.module.css';

interface SubmissionSuccessProps {
  onDashboard?: () => void;
}

export const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({ onDashboard }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>ETRM</h1>
          <p className={styles.subtitle}>by <span className={styles.company}>AlixPartners</span></p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <svg 
              className={styles.checkIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" fill="none"/>
              <path 
                d="M8 12.5L10.5 15L16 9.5" 
                stroke="#4CAF50" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          <h2 className={styles.message}>Request form submitted</h2>
          
          <div className={styles.description}>
            <p>Setting up your new request may take up to 48 hours</p>
            <p>ETRM support team will contact you shortly for next steps</p>
          </div>
        </div>
      </div>
    </div>
  );
};