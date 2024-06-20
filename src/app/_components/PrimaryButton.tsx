import React from "react";

/**
 * The PrimaryButton accepts the button's text as a string.
 *
 * @param {string} [options.buttonText] - The name of the button.
 * @param {function} [onClick] - The function to call when the button is clicked.
 * @returns {JSX.Element} The button component.
 *
 */

interface PrimaryButtonProps {
  buttonText: string;
  onClick?: () => void; // Optional onClick prop
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  onClick,
}) => {
  return (
    <button
      className="bg-pink hover:bg-hotpink min-w-16 rounded-xl px-3 py-2 text-sm text-black hover:text-white"
      type="submit"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
