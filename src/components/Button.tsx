import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    secondary?: boolean;
}

/**
 * A reusable, styled Button component using Tailwind CSS.
 * @param {ButtonProps} props
 */
const Button: React.FC<ButtonProps> = ({ children, onClick, secondary = false }) => {
    const baseClasses = "px-6 py-3 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-opacity-50 min-w-[120px]";
    
    const primaryClasses = "bg-primary-blue text-white hover:bg-indigo-700 focus:ring-indigo-500";
    const secondaryClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";

    return (
        <button
            onClick={onClick}
            // Use template literals with backticks for className for safer string concatenation
            className={`${baseClasses} ${secondary ? secondaryClasses : primaryClasses}`}
        >
            {children}
        </button>
    );
};

export default Button;
