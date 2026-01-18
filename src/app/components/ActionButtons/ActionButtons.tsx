import React from 'react';
import styles from './ActionButtons.module.css';

interface ActionButtonsProps {
  onDiscard?: () => void;
  onContinue?: () => void;
  isBackButtinShoewn?: boolean;
  isContinueDisabled?: boolean;
  isSubmitDisabled?: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onDiscard, onContinue, isBackButtinShoewn, isContinueDisabled, isSubmitDisabled }) => {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles.discardButton}`} onClick={onDiscard}>
        Discard
      </button>
      <div style={{ display: 'flex', gap: '12px' }}>
        {
          isBackButtinShoewn && (
            <button className={`${styles.button} ${styles.discardButton}`} onClick={onDiscard}>
              Back
            </button>
          )
        }
        {
          isContinueDisabled && (
            <button className={`${styles.button} ${styles.continueButton}`} onClick={onContinue}>
              Continue
            </button>
          )
        }
        {
          isSubmitDisabled && (
            <button className={`${styles.button} ${styles.continueButton}`} onClick={onContinue}>
              Submit
            </button>
          )
        }

      </div>

    </div>
  );
};
