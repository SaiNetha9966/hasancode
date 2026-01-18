import { useState } from "react";
import svgPaths from "../../../imports/svg-7usnlwj5e7";
interface ToolConfigFormProps {
  toolName: string;
  platform: string;
}

export default function ToolConfigForm({ toolName, platform }: ToolConfigFormProps) {
  const [trustDomain, setTrustDomain] = useState("");
  const [domainName, setDomainName] = useState("");

  return (
    <div className="border border-[#CCCCCC] rounded-lg p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#4a4a4a]">
              {toolName}
            </h4>
            <svg className="size-3 sm:size-4" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p1ecaa900} fill="#4A4A4A" />
            </svg>
          </div>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#4a4a4a]">{platform}</p>
        </div>

        {/* Form Fields - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Dropdown */}
          <div className="flex flex-col gap-[6px]">
            <label className="flex items-center gap-1 text-[12px] sm:text-[13px] md:text-[14px] font-medium">
              <span className="text-[#4a4a4a]">Trust external Domain?</span>
              <span className="text-[#cb282e]">*</span>
            </label>
            <div className="relative">
              <select
                value={trustDomain}
                onChange={(e) => setTrustDomain(e.target.value)}
                className="w-full bg-white border border-[#ccc] rounded px-2 py-[6px] text-[12px] sm:text-[13px] md:text-[14px] text-[#878787] appearance-none pr-8 outline-none focus:border-[#498e2b] transition-colors"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <svg
                className="absolute right-2 top-1/2 -translate-y-1/2 size-3 sm:size-4 pointer-events-none"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path d={svgPaths.p15d61c00} fill="#4A4A4A" />
              </svg>
            </div>
          </div>

          {/* Text Input */}
          <div className="flex flex-col gap-[6px]">
            <label className="flex items-center gap-1 text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#b2b2b2]">
              <span>What is the Domain Name?</span>
              <span>*</span>
            </label>
            <input
              type="text"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              placeholder="Enter domain name"
              className="bg-white border border-[#ccc] rounded px-2 py-[6px] text-[12px] sm:text-[13px] md:text-[14px] text-[#4a4a4a] placeholder:text-[#878787] outline-none focus:border-[#498e2b] transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
