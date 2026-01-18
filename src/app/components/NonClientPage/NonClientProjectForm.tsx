import React, { useState } from 'react';
import './NonClientProjectForm.css';
import svgPaths from '../../../imports/svg-m590sprq1z';

interface NonClientProjectFormProps {
  onContinue: () => void;
}

const NonClientProjectForm: React.FC<NonClientProjectFormProps> = ({ onContinue }) => {
  const [purpose, setPurpose] = useState<string>('');
  const [existingProject, setExistingProject] = useState<string>('');

  const AlertIcon: React.FC = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p341e8200} fill="#006176" />
    </svg>
  );

 // const isContinueDisabled = !purpose || (purpose === 'onboarding' && !existingProject);

  return (
    <div className="form-container">
      <header className="form-header">
        <h1>Non Client Project</h1>
        <p>
          Use this form to request tool access for a non-client project. Your selections determine
          the approval and fulfilment workflow.
        </p>
      </header>

      <section className="form-section">
        <h2>Request Classification</h2>
        <p className="section-description">
        Answer the questions below to route your request to the appropriate workflow.
        </p>

      
        {/* Existing Project */}
        { (
          <div className="question-block">
            <h3 className="question-label">
              1.Do you have an existing project?
            </h3>
            <p className="question-description">
               Select whether this request applies to an existing project or a new project.
            </p>

            <div className="radio-group">
              <label
                className={`radio-card ${existingProject === 'yes' ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="existingProject"
                  value="yes"
                  checked={existingProject === 'yes'}
                  onChange={(e) => setExistingProject(e.target.value)}
                />
                <div className="radio-content">
                  <div className="radio-title">Yes</div>
                  <div className="radio-description">
                    Link to existing project
                  </div>
                </div>
              </label>

              <label
                className={`radio-card ${existingProject === 'no' ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="existingProject"
                  value="no"
                  checked={existingProject === 'no'}
                  onChange={(e) => setExistingProject(e.target.value)}
                />
                <div className="radio-content">
                  <div className="radio-title">No</div>
                  <div className="radio-description">
                    Create a new one
                  </div>
                </div>
              </label>
            </div>

            {existingProject === 'no' && (
              <div className="info-alert">
                <AlertIcon />
                <span>
                  This request will create a new project and initiate onboarding.
                </span>
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="button-group">
          <button className="btn secondary" type="button">
            Back to Dashboard
          </button>

          <button
            className="btn primary"
            type="button"
            onClick={onContinue}
          >
            Continue to Form
          </button>
        </div>
      </section>
    </div>
  );
};

export default NonClientProjectForm;
