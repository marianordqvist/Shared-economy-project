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

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ buttonText }) => {
  return (
    <button
      className="mb-3 rounded-xl bg-zinc-400 px-3 py-4 text-white hover:bg-zinc-300"
      type="submit"
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
