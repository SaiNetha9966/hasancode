import React, { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/SideBar/Sidebar';
import { ProjectSetup } from './components/ProjectSetup/ProjectSetup';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';
import { ActionButtons } from './components/ActionButtons/ActionButtons';
import ToolConfiguration from './components/ToolConfiguration/ToolConfiguration';
import { AccessApproval } from './components/AccessAndApproval/AccessApproval';
import { ReviewSubmit } from './components/ReviewAndSubmit/ReviewSubmit';
import NonClientProjectForm from './components/NonClientPage/NonClientProjectForm';
import { SubmissionSuccess } from './components/SubmissionSuccess/SubmissionSuccess';

type StepType = 'newclient-intro' | 'project-details' | 'tool-configuration' | 'access-approval' | 'review-submit' | 'submission-success';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<StepType>('newclient-intro');
  console.log('Current Step:', currentStep);
  const [pageTittle, setPageTittle] = useState('Project Details');
  const [pageDesc, setPageDesc] = useState('Provide project details to initiate setup. This process may take a few minutes.');
  const [purpose, setPurpose] = useState<string>("");
  const [existingProject, setExistingProject] = useState<string>("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleDiscard = () => {
    console.log('Discard clicked');
    // Reset to first step
    setCurrentStep('project-details');
    setPageTittle('Project Details');
  };

  const handleContinue = () => {
    console.log('Continue clicked from step:', currentStep);
    switch (currentStep) {
      case 'project-details':
        setCurrentStep('tool-configuration');
        setPageTittle('Tool Configuration');
        setPageDesc("Select and configure the tools required for this project. You can request custom tools or choose from approved, recommended tools.");
        break;
      case 'tool-configuration':
        setCurrentStep('access-approval');
        setPageTittle('Approval & Access');
        setPageDesc("Define approvers and assign user access for the selected tools. This step may take a few minutes.");
        break;
      case 'access-approval':
        setCurrentStep('review-submit');
        setPageTittle('Review & Submit');
        setPageDesc("Review all details below before submitting this request for approval.");
        break;
      case 'review-submit':
        // On submit, go to success page
        setCurrentStep('submission-success');
        break;
      case 'newclient-intro':
        setCurrentStep('project-details');
        setPageTittle('Project Details');
        setPageDesc('Provide project details to initiate setup. This process may take a few minutes.');
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    console.log('Back clicked from step:', currentStep);

    switch (currentStep) {
      case 'tool-configuration':
        setCurrentStep('project-details');
        setPageTittle('Project Details');
        setPageDesc('Provide project details to initiate setup. This process may take a few minutes.');
        break;
      case 'access-approval':
        setCurrentStep('tool-configuration');
        setPageTittle('Tool Configuration');
        setPageDesc("Select and configure the tools required for this project. You can request custom tools or choose from approved, recommended tools.");
        break;
      case 'review-submit':
        setCurrentStep('access-approval');
        setPageTittle('Approval & Access');
        setPageDesc("Define approvers and assign user access for the selected tools. This step may take a few minutes.");
        break;
      case 'project-details':
        setCurrentStep('newclient-intro');
        break;
      default:
        break;
    }
  };

  const handleDashboardReturn = () => {
    // Reset to initial state or navigate to dashboard
    setCurrentStep('newclient-intro');
    setPageTittle('Project Details');
    setPageDesc('Provide project details to initiate setup. This process may take a few minutes.');
  };

  // If we're on the submission success page, show only that
  if (currentStep === 'submission-success') {
    return (
      <div className={styles.app}>
        <SubmissionSuccess onDashboard={handleDashboardReturn} />
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <Header onMenuToggle={toggleSidebar} />
      {
        currentStep !== 'newclient-intro' && (
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} currentStep={currentStep} />
        )
      }
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {
            currentStep !== 'newclient-intro' && (
              <ProjectSetup pageTittle={pageTittle} pageDesc={pageDesc} />
            )
          }

          {/* step 0: new client intro */}
          {currentStep === 'newclient-intro' && (
            <>
              <NonClientProjectForm onContinue={handleContinue} />
            </>
          )}

          {/* Step 1: Project Details */}
          {currentStep === 'project-details' && (
            <>
              <ProjectDetails />
              <ActionButtons onDiscard={handleBack} onContinue={handleContinue} isContinueDisabled={true} />
            </>
          )}

          {/* Step 2: Tool Configuration */}
          {currentStep === 'tool-configuration' && (
            <>
              <ToolConfiguration />
              <ActionButtons onDiscard={handleDiscard} onBackButton={handleBack} onContinue={handleContinue} isBackButtinShoewn={true} isContinueDisabled={true} />
            </>
          )}

          {/* Step 3: Access & Approval */}
          {currentStep === 'access-approval' && (
            <>
              <AccessApproval />
              <ActionButtons onDiscard={handleDiscard} onBackButton={handleBack} onContinue={handleContinue} isBackButtinShoewn={true} isContinueDisabled={true} />
            </>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 'review-submit' && (
            <>
              <ReviewSubmit
                onSubmit={handleContinue}
                onDiscard={handleDiscard}
                onBack={handleBack}
              />
              <ActionButtons onDiscard={handleDiscard} onBackButton={handleBack} onContinue={handleContinue} isBackButtinShoewn={true} isSubmitDisabled={true} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}