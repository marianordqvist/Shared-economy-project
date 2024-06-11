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
      className="mb-3 min-w-16 rounded-xl bg-zinc-400 px-2 py-2 text-white hover:bg-zinc-300"
      type="submit"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
