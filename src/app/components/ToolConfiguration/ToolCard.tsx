import React from "react";
import svgPaths from "../../../imports/svg-7usnlwj5e7";

interface ToolCardProps {
  name: string;
  platform: string;
  isSelected: boolean;
  onToggle: () => void;
}

export default function ToolCard({ name, platform, isSelected, onToggle }: ToolCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-3 sm:p-4 rounded-lg border-2 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-left transition-all ${isSelected
          ? "bg-[#dff0db] border-[#498e2b]"
          : "bg-white border-gray-300 hover:border-[#498e2b]"
        }`}
    >
      <div className="flex-1 min-w-0 w-full sm:w-auto">
        <div className="flex items-center gap-2 mb-[6px]">
          <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#4a4a4a] truncate">
            {name}
          </h4>
          <svg className="size-3 sm:size-4 shrink-0" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p1ecaa900} fill="#4A4A4A" />
          </svg>
        </div>
        <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#4a4a4a]">{platform}</p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex items-center gap-[6px] px-0 py-1">
          <svg className="size-4 sm:size-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p151a3d00} fill="#632494" />
          </svg>
          <span className="text-[11px] sm:text-[12px] md:text-[14px] font-medium text-[#632494] whitespace-nowrap">
            Recommended
          </span>
        </div>

        {isSelected && (
          <svg className="size-5 sm:size-6 shrink-0" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p191cd700} fill="#498E2B" />
          </svg>
        )}
      </div>
    </button>
  );
}
