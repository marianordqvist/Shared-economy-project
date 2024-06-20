import React from "react";

// Define the props type for the DropdownSelect component
interface DropdownSelectProps {
  submenus: SubmenuItem[];
  dropdown: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

// Define the type for submenu items
interface SubmenuItem {
  title: string;
  url: string;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  submenus,
  dropdown,
}: DropdownSelectProps) => {
  return (
    <div className="base Nav-dropdown bg-pink absolute mt-3 rounded">
      <ul className={`dropdown ${dropdown ? "block" : "hidden"}  p-3`}>
        {submenus.map((submenu: SubmenuItem, index: number) => (
          <li key={index} className="menu-items mb-3">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelect;
