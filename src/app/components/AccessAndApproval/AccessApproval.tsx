import React, { useState } from 'react';

import { Buttons } from './Buttons';
import { Dropdown } from './DropDown';
import { SearchInput } from './SearchInput';

interface AccessApprovalProps {
}

const approverRoles = [
  'Partner - Managing Director',
  'Secondary Partner Managing Director',
  'Information Owner',
  'Delegate Information Owner',
  'Project Manager',
  'Approvers',
];

export const AccessApproval: React.FC<AccessApprovalProps> = () => {
  const [userEmail, setUserEmail] = useState('');
  const [toolsAccess, setToolsAccess] = useState('');
  const [addedUsers, setAddedUsers] = useState<Array<{ name: string; email: string; tools: string[] }>>([]);
  const [expandedUsers, setExpandedUsers] = useState<Set<number>>(new Set());
  const [approvers, setApprovers] = useState<Record<string, string>>(
    approverRoles.reduce((acc, r) => ((acc[r] = ''), acc), {} as Record<string, string>)
  );

  const handleAddUser = () => {
    if (!userEmail.trim() || !toolsAccess) return;
    // Extract name from email (before @)
    const name = userEmail.split('@')[0].split('.').map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(' ');
    // Convert toolsAccess string to array (assuming comma-separated or single tool)
    const toolsArray = toolsAccess.split(',').map(t => t.trim());
    setAddedUsers((s) => [...s, { name, email: userEmail.trim(), tools: toolsArray }]);
    // Auto-expand the newly added user
    setExpandedUsers(prev => {
      const newSet = new Set(prev);
      newSet.add(addedUsers.length);
      return newSet;
    });
    setUserEmail('');
    setToolsAccess('');
  };

  const handleRemoveUser = (index: number) => {
    setAddedUsers((s) => s.filter((_, i) => i !== index));
    setExpandedUsers(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleToolToggle = (userIndex: number, tool: string) => {
    setAddedUsers((users) => 
      users.map((user, idx) => {
        if (idx === userIndex) {
          const hasTools = user.tools.includes(tool);
          return {
            ...user,
            tools: hasTools 
              ? user.tools.filter(t => t !== tool)
              : [...user.tools, tool]
          };
        }
        return user;
      })
    );
  };

  const toggleUserExpanded = (index: number) => {
    setExpandedUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleApproverChange = (role: string, value: string) => {
    setApprovers((prev) => ({ ...prev, [role]: value }));
  };

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const emailList = ["john.doe@example.com", "jane.smith@example.com", "admin@company.com", "support@company.com", "javier.ramirez@email.com"];

  const handleEmailChange = (value: string) => {
    setUserEmail(value);
    if (value.length > 0) {
      const filteredSuggestions = emailList.filter(email =>
        email.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }

  return (
    <>
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-['Roboto',sans-serif] font-bold text-[#28292c] text-lg md:text-[19px]">
              Approvers
            </h2>
            <p className="font-['Roboto',sans-serif] font-medium text-[#727272] text-sm md:text-[15px]">
              Select the required approvers from the active directory. These users will review and approve this request.
            </p>
          </div>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            <SearchInput
              label="Primary PMD/Partner"
              required
              value={approvers.partnerMD}
              onChange={(val) => setApprovers({ ...approvers, partnerMD: val })}
              tooltip="Primary approver for this request."
            />
            <SearchInput
              label="Secondary PMD/Partner"
              required
              value={approvers.secondaryPartnerMD}
              onChange={(val) => setApprovers({ ...approvers, secondaryPartnerMD: val })}
              tooltip="Acts as an alternate approver if applicable."
            />
            <SearchInput
              label="Information Owner"
              required
              value={approvers.informationOwner}
              onChange={(val) => setApprovers({ ...approvers, informationOwner: val })}
              tooltip="Acts on behalf of the information owner."
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            <SearchInput
              label="Delegate Information Owner"
              required
              value={approvers.delegateIO}
              onChange={(val) => setApprovers({ ...approvers, delegateIO: val })}
              tooltip='Acts on behalf of the Information Owner'
            />
            <SearchInput
              label="Project Manager"
              required
              value={approvers.projectManager}
              onChange={(val) => setApprovers({ ...approvers, projectManager: val })}
              tooltip="Primary operational contact for the project."
            />
            <SearchInput
              label="Approvers"
              required
              value={approvers.approvers}
              onChange={(val) => setApprovers({ ...approvers, approvers: val })}
              tooltip="Additional approvers may be required based on selected tools or data sensitivity."
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 md:p-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-['Roboto',sans-serif] font-bold text-[#4a4a4a] text-base md:text-[17px]">
              User Selection & Tool Access
            </h2>
            <p className="font-['Roboto',sans-serif] font-medium text-[#727272] text-sm md:text-[15px]">
              Assign users and specify the tools they require access to.
            </p>

            <div className="border border-[#8dca7e] rounded-lg p-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                {/* User Email Input */}
                <div className="lg:col-span-1 relative">
                  <SearchInput
                    label="User Email ID"
                    value={userEmail}
                    required
                    onChange={handleEmailChange}
                  />
                  {/* Suggestions Dropdown */}
                  {suggestions.length > 0 && (
                    <ul className="absolute bg-white border rounded mt-1 z-10 w-full shadow-lg">
                      {suggestions.map((email, idx) => (
                        <li key={idx} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => {
                          setUserEmail(email);
                          setSuggestions([]);
                        }}
                        >
                          {email}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tools Access Dropdown */}
                <div className="lg:col-span-1">
                  <Dropdown
                    label="Tools Access"
                    value={toolsAccess}
                    required
                    hasInfo
                    onChange={setToolsAccess}
                  />
                </div>

                {/* Buttons */}
                <div className="lg:col-span-1 flex items-end justify-start lg:justify-end gap-4">
                  <Buttons variant="secondary">Clear</Buttons>
                  <Buttons variant="primary" onClick={handleAddUser}>Add</Buttons>
                </div>
              </div>
            </div>


            {/* Added Users Section */}
            {addedUsers.length > 0 && (
              <div className="space-y-4">
                {addedUsers.map((user, index) => (
                  <div key={index} className="border border-[#e0e0e0] rounded-lg">
                    {/* User Header */}
                    <div className="flex items-center justify-between p-4">
                      <div className="flex justify-between gap-4 mr-8 flex-1 flex-wrap">
                        <h4 className="font-['Roboto',sans-serif] font-bold text-[#4a4a4a] text-base">
                          {user.name}
                        </h4>
                        <p className="font-['Roboto',sans-serif] text-[#727272] text-sm">
                          {user.email}
                        </p>
                        <span className="px-3 py-1 bg-[#F1F1F1] text-[#727272] rounded-full text-xs font-medium whitespace-nowrap">
                          Limited Access ({user.tools.length} Tool{user.tools.length !== 1 ? 's' : ''})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleRemoveUser(index)}
                          className="text-[#d32f2f] hover:bg-[#ffebee] px-3 py-1 rounded font-['Roboto',sans-serif] text-sm font-medium flex items-center gap-1 whitespace-nowrap"
                        >
                          <span className="text-lg leading-none">✕</span> Remove
                        </button>
                        <button
                          onClick={() => toggleUserExpanded(index)}
                          className="text-[#727272] hover:bg-gray-100 p-2 rounded"
                        >
                          <svg 
                            className={`w-5 h-5 transition-transform ${expandedUsers.has(index) ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Expandable Tools Section - Always visible by default */}
                    {expandedUsers.has(index) && (
                      <div className="px-4 pb-4 border-t border-[#e0e0e0]">
                        <div className="pt-4">
                          <h5 className="font-['Roboto',sans-serif] font-bold text-[#4a4a4a] text-sm mb-3">
                            Tools
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {['Teams Site', 'Tool Builder', 'Company Health Check'].map((tool) => (
                              <label key={tool} className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={user.tools.includes(tool)}
                                  onChange={() => handleToolToggle(index, tool)}
                                  className="w-5 h-5 text-[#4caf50] border-gray-300 rounded focus:ring-[#4caf50] accent-[#4caf50] cursor-pointer"
                                />
                                <span className="font-['Roboto',sans-serif] text-[#4a4a4a] text-sm">
                                  {tool}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </>

  );
};