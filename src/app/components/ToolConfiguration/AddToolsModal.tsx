import React, { useState } from "react";

interface Tool {
  name: string;
  platform: string;
  recommended: boolean;
}

interface AddToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTools: string[];
  onToggleTool: (toolName: string) => void;
  allTools: Tool[];
}

export default function AddToolsModal({
  isOpen,
  onClose,
  selectedTools,
  onToggleTool,
  allTools,
}: AddToolsModalProps) {
  const [activeCategory, setActiveCategory] = useState("ALL TOOLS");
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const categories = [
    "ALL TOOLS",
    "MOST REQUESTED",
    "ALIXPARTNER PLATFORM",
    "PARTNERSHIP TOOLS",
    "LITIGATION",
    "DATA",
    "REPORTING",
    "CLOUD",
    "COLLABORATION",
  ];

  const filteredTools = allTools.filter((tool) =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white">
          <div>
            <h2 className="text-[20px] font-bold text-[#28292C]">Add Tools</h2>
            <p className="text-[14px] text-[#727272] mt-1">Select one or more tools to add to this project.</p>
          </div>
          <button onClick={onClose} className="text-[#999] hover:text-[#333] flex-shrink-0">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Selected Count */}
        <div className="px-6 py-4 bg-[#f1f6f0] border-b">
          <div className="flex items-center gap-2">
            <svg className="size-5 text-[#498E2B]" fill="#498E2B" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[14px] font-medium text-[#498E2B]">{selectedTools.length} Tools selected</span>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="px-6 py-4 border-b">
          <div className="flex gap-6 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[12px] font-bold whitespace-nowrap pb-2 transition-colors ${
                  activeCategory === category
                    ? "text-[#498E2B] border-b-2 border-[#498E2B]"
                    : "text-[#666] hover:text-[#333]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="px-6 py-4 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tools by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-[#ccc] rounded-lg text-[14px] outline-none focus:border-[#498E2B]"
            />
            <svg className="absolute right-4 top-3.5 size-5 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredTools.map((tool) => (
              <div
                key={tool.name}
                onClick={() => onToggleTool(tool.name)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedTools.includes(tool.name)
                    ? "border-[#498E2B] bg-[#f1f6f0]"
                    : "border-[#e0e0e0] bg-white hover:border-[#ccc]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[14px] font-bold text-[#333]">{tool.name}</h4>
                    <p className="text-[12px] text-[#666] mt-1">{tool.platform}</p>
                    {tool.recommended && <p className="text-[12px] text-[#7c3aed] font-medium mt-2">Recommended</p>}
                  </div>
                  {selectedTools.includes(tool.name) && (
                    <svg className="size-5 text-[#498E2B] flex-shrink-0" fill="#498E2B" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex gap-3 justify-end p-6 border-t bg-[#f9f9f9] sticky bottom-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#999] text-white rounded hover:bg-[#777] transition-colors text-[14px] font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#498E2B] text-white rounded hover:bg-[#3a7222] transition-colors text-[14px] font-medium"
          >
            Add Selected Tools
          </button>
        </div>
      </div>
    </div>
  );
}
