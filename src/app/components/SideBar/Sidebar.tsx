import React from 'react';
import styles from './Sidebar.module.css';
import ProjectSetupSvg from '../../assets/ProjectSetup.svg';
import ToolConfigIconSvg from '../../assets/ToolConfiguration.svg';
import AccessApprovalSvg from '../../assets/Access&Approval.svg';
import ReviewSubmitSvg from '../../assets/ReviewSubmit.svg';
import svgPaths from '../../../imports/svg-m590sprq1z';

const ProjectSetupIcon: React.FC<{ active?: boolean }> = ({ active }) => (
  <img
    src={ProjectSetupSvg}
    alt="Project Setup"
    width="16"
    height="16"
    style={{ filter: active ? 'brightness(0) invert(1)' : 'none' }}
  />
);

const ToolConfigIcon: React.FC = () => (
  <img
    src={ToolConfigIconSvg}
    alt=""
    width="16"
    height="16"
  />
);

const AccessApprovalIcon: React.FC = () => (
  <img
    src={AccessApprovalSvg}
    alt=""
    width="16"
    height="16"
  />
);

const ReviewSubmitIcon: React.FC = () => (
  <img
    src={ReviewSubmitSvg}
    alt=""
    width="16"
    height="16"
  />
);

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentStep }) => {
  const menuItems: MenuItem[] = [
    {
      id: 'project-setup',
      label: 'Project Setup',
      icon: <ProjectSetupIcon />,
      active: currentStep === 'project-details',
      disabled: currentStep !== 'project-details',
    },
    {
      id: 'tool-configuration',
      label: 'Tool Configuration',
      icon: <ToolConfigIcon />,
      disabled: currentStep !== 'tool-configuration',
      active: currentStep === 'tool-configuration',
    },
    {
      id: 'access-approval',
      label: 'Approval & Access',
      icon: <AccessApprovalIcon />,
      disabled: currentStep !== 'access-approval',
      active: currentStep === 'access-approval',
    },
    {
      id: 'review-submit',
      label: 'Review & Submit',
      icon: <ReviewSubmitIcon />,
      disabled: currentStep !== 'review-submit',
      active: currentStep === 'review-submit',
    },
  ];

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`} onClick={onClose} />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <h2 className={styles.title}>Non Client New Project</h2>
        <nav>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.menuItem} ${item.active ? styles.active : ''} ${item.disabled ? styles.disabled : ''}`}
            >
              <div className={styles.menuIcon}>{item.icon}</div>
              <div className={styles.menuLabel}>{item.label}</div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};