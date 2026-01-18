import { useState } from "react";
import ToolCard from "./ToolCard";
import ToolConfigForm from "./ToolConfigForm";
import AddToolsModal from "./AddToolsModal";
import svgPaths from "../../../imports/svg-7usnlwj5e7";
import './ToolConfiguration.css';

export default function ToolConfiguration() {
  const [selectedTools, setSelectedTools] = useState<string[]>([
    "Teams Site 1",
    "Tool Builder 1",
    "Teams Site 2",
    "Tool Builder 2",
  ]);
  const [newToolRequest, setNewToolRequest] = useState("");
  const [showAddToolsModal, setShowAddToolsModal] = useState(false);

  const toggleTool = (toolName: string) => {
    setSelectedTools((prev) =>
      prev.includes(toolName)
        ? prev.filter((t) => t !== toolName)
        : [...prev, toolName]
    );
  };

  const handleAddToolRequest = () => {
    if (newToolRequest.trim()) {
      alert(`Tool request: ${newToolRequest}`);
      setNewToolRequest("");
    }
  };

  const allTools = [
    { name: "Teams Site", platform: "AlixPartner Platform", recommended: true },
    { name: "Tool Builder", platform: "AlixPartner Platform", recommended: true },
    { name: "Container Utilization Optimizer", platform: "AlixPartner Platform", recommended: true },
    { name: "Company Health Check", platform: "AlixPartner Platform", recommended: false },
    { name: "Radial Tool (ROA)", platform: "AlixPartner Platform", recommended: false },
    { name: "Spend X-Ray", platform: "AlixPartner Platform", recommended: false },
    { name: "Project Management Tool", platform: "AlixPartner Platform", recommended: false },
    { name: "Analytics Dashboard", platform: "AlixPartner Platform", recommended: false },
    { name: "Risk Assessment Tool", platform: "AlixPartner Platform", recommended: false },
  ];

  return (
    <div className="bg-[#f5f5f5] flex min-h-screen items-start justify-center p-3 sm:p-4 md:p-6">
      <div className="flex w-full max-w-[960px] flex-col gap-3 sm:gap-4 md:gap-5">
        {/* Main Content Card */}
        <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6">
          {/* Tools Selection */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-[#28292c]">
                Tools Selection
              </h2>
              <p className="text-[16px] font-normal leading-[22px] tracking-[0%] text-[#727272]">
                Based on your project details, the below tools are commonly used for similar projects. You may deselect tools you do not require or add more tools from the catalog.
              </p>

              <div className="info-alert">
                <svg className="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>Changes here may impact approvals and fulfillment timelines.
                  .</span>
              </div>
            </div>

            {/* Recommended Tools */}
            <div className=" rounded-lg p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#4a4a4a]">
                      Tools Selected ({selectedTools.length})
                    </h3>
                    <button onClick={() => setShowAddToolsModal(true)} className="flex items-center gap-1 px-4 py-2 border border-[#498E2B] text-[#498E2B] rounded-lg hover:bg-[#f1f6f0] transition-colors text-[12px] sm:text-[13px] md:text-[14px] font-medium">
                      <svg className="size-4" fill="none" viewBox="0 0 20 20">
                        <path d="M10 3V17M3 10H17" stroke="#498E2B" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Add More Tools
                    </button>
                  </div>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#4a4a4a]">
                    Playbook Engine: Recommended tools based on your project
                  </p>
                </div>

                {/* Tool Cards Grid - Responsive */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <ToolCard
                    name="Teams Site 1"
                    platform="AlixPartner Platform"
                    isSelected={selectedTools.includes("Teams Site 1")}
                    onToggle={() => toggleTool("Teams Site 1")}
                  />
                  <ToolCard
                    name="Tool Builder 1"
                    platform="AlixPartner Platform"
                    isSelected={selectedTools.includes("Tool Builder 1")}
                    onToggle={() => toggleTool("Tool Builder 1")}
                  />
                  <ToolCard
                    name="Teams Site 2"
                    platform="AlixPartner Platform"
                    isSelected={selectedTools.includes("Teams Site 2")}
                    onToggle={() => toggleTool("Teams Site 2")}
                  />
                  <ToolCard
                    name="Tool Builder 2"
                    platform="AlixPartner Platform"
                    isSelected={selectedTools.includes("Tool Builder 2")}
                    onToggle={() => toggleTool("Tool Builder 2")}
                  />
                </div>
              </div>
            </div>

            {/* Request New Tool */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div>
                <h3 className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#4a4a4a] mb-2">
                  Custom Tool Request
                </h3>
                <p className="text-[12px] sm:text-[13px] md:text-[16px] text-[#4a4a4a]">
                  Use this section to request a tool which is not present in list of available tools below, if no custom tool is required you may skip
                  the section.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch sm:items-center">
                <div className="flex-1 bg-white border border-[#ccc] rounded flex flex-col">
                  <textarea
                    value={newToolRequest}
                    onChange={(e) => setNewToolRequest(e.target.value)}
                    placeholder="Describe the tool name and intended use"
                    className="px-3 py-[6px] text-[12px] sm:text-[13px] md:text-[14px] text-[#4a4a4a] placeholder:text-[#878787] resize-none outline-none min-h-[60px]"
                    maxLength={80}
                  />
                  <div className="px-2 py-1 text-right">
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] text-[#878787]">
                      {newToolRequest.length}/80
                    </span>
                  </div>
                </div>
                {/* <button
                  onClick={handleAddToolRequest}
                  className="bg-[#498e2b] text-white text-[11px] sm:text-[12px] md:text-[13px] font-medium px-2 py-[6px] min-w-[78px] rounded hover:bg-[#3a7222] transition-colors"
                >
                  Add
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Specification Card */}
        <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6">
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-[#28292c]">
                Tools Specification
              </h2>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#727272]">
                Configure platform-specific settings for selected tools
              </p>

              {/* Info Banner */}
              <div className="bg-[#f6fdff] border border-[#b0deeb] rounded-lg p-3 flex items-start gap-[6px]">
                <svg className="size-4 sm:size-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p29ef6f00} fill="#006176" />
                </svg>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#3b4648]">
                  AlixPartners Platform Questions - Configure tool-specific
                  settings
                </p>
              </div>
            </div>

            {/* Tool Configuration Forms */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <ToolConfigForm
                toolName="Teams Site"
                platform="AlixPartner Platform"
              />
              <ToolConfigForm
                toolName="Tool Builder"
                platform="AlixPartner Platform"
              />
              <ToolConfigForm
                toolName="Tool Builder"
                platform="AlixPartner Platform"
              />
              <ToolConfigForm
                toolName="Container Utilization Optimizer"
                platform="AlixPartner Platform"
              />
            </div>
          </div>
        </div>

        {/* Add Tools Modal */}
        <AddToolsModal
          isOpen={showAddToolsModal}
          onClose={() => setShowAddToolsModal(false)}
          selectedTools={selectedTools}
          onToggleTool={toggleTool}
          allTools={allTools}
        />
      </div>
    </div>
  );
}
