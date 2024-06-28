import React from "react";

interface PrimaryButtonProps {
  buttonText: string;
  onClick?: () => void; // Optional onClick prop
  className?: string; // Ooptional styling props
}

/**
 * The PrimaryButton accepts the button's text as a string.
 *
 * @param {string} [options.buttonText] - The name of the button.
 * @param {function} [onClick] - The function to call when the button is clicked.
 * @param {string} [options.className] - Option to pass more styling to the button
 * @returns {JSX.Element} The button component.
 *
 */

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  onClick,
  className,
}) => {
  return (
    <button
      className={`min-w-16 rounded-xl bg-pink px-3 py-2 text-sm text-black hover:bg-hotpink hover:text-white ${className}`}
      type="submit"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
