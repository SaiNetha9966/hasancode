
// Button Component
interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}

export const Buttons: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
    const bgColor = variant === 'primary' ? 'bg-[#498e2b]' : 'bg-[#878787]';

    return (
        <button
            onClick={onClick}
            className={`${bgColor} text-white px-4 h-6 rounded font-['Roboto',sans-serif] font-medium text-[13px] whitespace-nowrap hover:opacity-90 transition-opacity`}
        >
            {children}
        </button>
    );
}