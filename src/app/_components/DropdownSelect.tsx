import React from "react";

// Define the props type for the DropdownSelect component
interface DropdownSelectProps {
  submenus: SubmenuItem[];
  dropdown: boolean;
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
    <>
      <ul className={`dropdown ${dropdown ? "block" : "hidden"}`}>
        {submenus.map((submenu: SubmenuItem, index: number) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownSelect;
