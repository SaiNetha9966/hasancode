import { Search, Info, ChevronDown } from "lucide-react";

interface DropdownProps {
    label: string;
    value: string;
    required?: boolean;
    hasInfo?: boolean;
    onChange?: (value: string) => void;
}


export const Dropdown: React.FC<DropdownProps> = ({ label, value, required = false, hasInfo = false, onChange }) => {

    return (
        <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center gap-1">
                <label className="font-['Roboto',sans-serif] font-medium text-[#4a4a4a] text-sm">
                    {label}
                </label>
                {required && <span className="text-[#cb282e]">*</span>}
                {hasInfo && <Info className="w-4 h-4 text-[#4a4a4a]" />}
            </div>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="w-full h-8 px-2 pr-8 border border-[#ccc] rounded bg-white font-['Roboto',sans-serif] text-sm text-[#878787] appearance-none focus:outline-none focus:ring-2 focus:ring-[#498e2b] focus:border-transparent"
                >
                    <option value="">Select tools</option>
                    <option value="tool1">Tool 1</option>
                    <option value="tool2">Tool 2</option>
                    <option value="tool3">Tool 3</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4a4a4a] pointer-events-none" />
            </div>
        </div>
    );
}