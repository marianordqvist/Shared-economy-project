import React from "react";

interface DropdownSelectProps {
  label: string;
  options: Option[]; //array of option objects
  value: string;
  onChange: OnChangeFunction;
}
interface Option {
  label: string;
  value: string;
}

type OnChangeFunction = (event: React.ChangeEvent<HTMLSelectElement>) => void;

const DropdownSelect = (props: DropdownSelectProps) => {
  const { label, onChange, value, options } = props;
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default DropdownSelect;
