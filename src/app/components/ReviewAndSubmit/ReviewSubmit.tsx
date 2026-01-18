import React, { useState } from 'react';
import styles from './ReviewSubmit.module.css';
import EditButton from './EditButton';

interface ReviewSubmitProps {
  onSubmit?: () => void;
  onDiscard?: () => void;
  onBack?: () => void;
}

const sampleProject = {
  ertmId: 'PRJ-8YV03FK',
  sapId: 'SAP-PRJ001',
  codeName: 'PCN-0001',
  type: 'Development',
  start: 'January 7th, 2026',
  end: 'January 30th, 2026',
  personalData: 'Yes',
  goals: 'NA',
  projectDescription: 'Not Provide'
};

const sampleTools = {
  teamsSite: 'AP Platform',
  toolBuilder: 'AP Platform',
  domain: 'AP Platform',
};

const sampleAccess = [
  {
    id: 1,
    name: 'Brown, James',
    email: 'jbrown@alixpartners.com',
    role: 'Full Access (6 Tools)',
    tools: [
      { name: 'Teams Site', checked: true },
      { name: 'Tool Builder', checked: true },
      { name: 'Company Health Check', checked: true }
    ]
  },
  {
    id: 2,
    name: 'Smith, Emily',
    email: 'esmith@alixpartners.com',
    role: 'Access (3 Tools)',
    tools: [
      { name: 'Teams Site', checked: true },
      { name: 'Tool Builder', checked: true },
      { name: 'Company Health Check', checked: false }
    ]
  },
  {
    id: 3,
    name: 'Doe, John',
    email: 'jdoe@alixpartners.com',
    role: 'Access (4 Tools)',
    tools: [
      { name: 'Teams Site', checked: true },
      { name: 'Tool Builder', checked: false },
      { name: 'Company Health Check', checked: true }
    ]
  },
];

const sampleApprovers = [
  { id: 1, title: 'Primary PMD/Partner', name: 'James Anderson' },
  { id: 2, title: 'Secondary PMD/Partner', name: 'Robert Wilson' },
  { id: 3, title: 'Information Owner', name: 'Kevin Brown' },
  { id: 4, title: 'Delegate Information Owner', name: 'Alex Johnson' },
  { id: 5, title: 'Project Manager', name: 'Richard Harris' },
  { id: 6, title: 'Approvers', name: 'Nathan Scott, Natalie Brooks' },
];

export const ReviewSubmit: React.FC<ReviewSubmitProps> = ({ onSubmit, onDiscard, onBack }) => {
  const [agreed, setAgreed] = useState(false);
  const [openAccess, setOpenAccess] = useState<Record<number, boolean>>({});
  const [memoText, setMemoText] = useState('');
  const [memoChecked, setMemoChecked] = useState(false);
  const MEMO_MAX = 80;

  const handleMemoChange = (e) => {
    const val = e.target.value.slice(0, MEMO_MAX);
    setMemoText(val);
  };

  const toggleAccess = (id: number) => {
    setOpenAccess((s) => ({ ...s, [id]: !s[id] }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainGrid}>
        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Request Type</div>
              <div className={styles.cardSubtitle}>Non Client New Project</div>
            </div>
            <EditButton />
          </div>
        </div>

        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Project Details</div>
            <EditButton />
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <div className={styles.label}>ERTM Project ID</div>
              <div className={styles.value}>{sampleProject.ertmId}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.label}>SAP Project ID</div>
              <div className={styles.value}>{sampleProject.sapId}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.label}>Project Code Name</div>
              <div className={styles.value}>{sampleProject.codeName}</div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.label}>Project Type</div>
              <div className={styles.value}>{sampleProject.type}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.label}>Estimated Start Date</div>
              <div className={styles.value}>{sampleProject.start}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.label}>Estimated End Date</div>
              <div className={styles.value}>{sampleProject.end}</div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.label}>Is Personal or Protected Data Involved?</div>
              <div className={styles.value}>{sampleProject.personalData}</div>
            </div>
            <div className={styles.detailItem}>
              <div className={styles.label}>Project Description</div>
              <div className={styles.value}>{sampleProject.projectDescription}</div>
            </div>
            <div className={styles.detailItem} style={{ gridColumn: '1 / -1' }}>
              <div className={styles.label}>Describe your project and its goals.</div>
              <div className={styles.value}>{sampleProject.goals}</div>
            </div>
          </div>
        </div>

        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Tools Selection</div>
            <EditButton />
          </div>
          <div className={styles.toolsGrid}>
            <div>
              <div className={styles.label}>Teams Site</div>
              <div className={styles.value}>{sampleTools.teamsSite}</div>
            </div>
            <div>
              <div className={styles.label}>Tool Builder</div>
              <div className={styles.value}>{sampleTools.toolBuilder}</div>
            </div>
            <div>
              <div className={styles.label}>Company Health Check

              </div>
              <div className={styles.value}>{sampleTools.toolBuilder}</div>
            </div>
          </div>
        </div>

        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
          {/* Header */}
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Tool Specification</div>
            <EditButton />
          </div>

          {/* Tools Grid */}
          <div className={styles.toolsGrid}>

            {/* Card 1 */}
            <div className={styles.toolCard}>
              <div className={styles.toolTitle}>Teams Site</div>

              <div className={styles.value}>AP Platform</div>

              <div className={styles.label}>Trust External Domain?:</div>
              <div className={styles.value}>Yes</div>

              <div className={styles.label}>External Domain Name?:</div>
              <div className={styles.value}>www.externaldomain.com</div>
            </div>

            {/* Card 2 */}
            <div className={styles.toolCard}>
              <div className={styles.toolTitle}>Tool Builder</div>

              <div className={styles.value}>AP Platform</div>

              <div className={styles.label}>Trust External Domain?:</div>
              <div className={styles.value}>Yes</div>
            </div>

            {/* Card 3 */}
            <div className={styles.toolCard}>
              <div className={styles.toolTitle}>Company Health Check</div>

              <div className={styles.value}>AP Platform</div>

              <div className={styles.label}>Trust External Domain?:</div>
              <div className={styles.value}>Yes</div>
            </div>

          </div>
        </div>

        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Approvers</div>
            <EditButton />
          </div>
          <div className={styles.approverGrid}>
            {sampleApprovers.map((p) => (
              <div key={p.id} className={styles.approverItem}>
                <div className={styles.approverTitle}>{p.title}</div>
                <div className={styles.approverName}>{p.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>User Selection & Tool Access</div>
            <EditButton />
          </div>

          <div className={styles.accessList}>
            {sampleAccess.map((a) => (
              <div key={a.id} className={styles.accessRow}>
                <div className={styles.accessMain} onClick={() => toggleAccess(a.id)}>
                  <div className={styles.accessInfo}>
                    <div className={styles.accessName}>{a.name}</div>
                    <div className={styles.accessEmail}>{a.email}</div>
                  </div>
                  <div className={styles.accessRight}>
                    <div className={styles.rolePill}>{a.role}</div>
                    <button className={styles.expandBtn} onClick={(e) => { e.stopPropagation(); toggleAccess(a.id); }}>
                      {openAccess[a.id] ? '∧' : '∨'}
                    </button>
                  </div>
                </div>

                {openAccess[a.id] && (
                  <div className={styles.accessExpand}>
                    <div className={styles.toolsLabel}>Tools</div>
                    <div className={styles.toolsCheckboxes}>
                      {a.tools.map((tool, idx) => (
                        <label key={idx} className={styles.toolCheckbox}>
                          <input
                            type="checkbox"
                            checked={tool.checked}
                            readOnly
                          />
                          <span>{tool.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Memo to approving MD</div>
          </div>

          <div className={styles.memoBody}>
            <div className={styles.textareaWrapper}>
              <textarea
                className={styles.textarea}

                value={memoText}
                onChange={handleMemoChange}

                maxLength={80}
              />
              <div className={styles.wordCounter}>{memoText.length}/80</div>
            </div>

            <p className={styles.attestation}>
              By requesting the creation of this project, you are attesting to the understanding of any client contractual obligations including but not limited to data security, privacy, and SLAs related to this data and engagement. You understand that there may be costs incurred to the Firm and/or the project's budget. The information above has been filled out to the best of your knowledge.
            </p>

            <label className={styles.attestationCheckbox}>
              <input
                type="checkbox"
                checked={memoChecked}
                onChange={(e) => setMemoChecked(e.target.checked)}
              />
              <span> <span style={{color:"red"}}>* </span>Yes, I understand the above statement</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmit;