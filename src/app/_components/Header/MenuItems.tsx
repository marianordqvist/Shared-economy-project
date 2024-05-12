import React from "react";
import Link from "next/link";
import DropdownSelect from "../DropdownSelect";
import { useState } from "react";

// Define the type for a single submenu item
interface SubmenuItem {
  title: string;
  url: string;
}

// Define the type for an array of submenu items
type Submenu = SubmenuItem[];

// Define the props type for the MenuItems component
interface MenuItemsProps {
  items: {
    title: string;
    url: string;
    submenu?: Submenu;
  };
}

const MenuItems: React.FC<MenuItemsProps> = ({ items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <li>
        {items.submenu ? (
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdownOpen ? "true" : "false"}
            >
              {items.title}
            </button>
            <DropdownSelect submenus={items.submenu} dropdown={dropdownOpen} />
          </div>
        ) : (
          <Link href={items.url}>{items.title}</Link>
        )}
      </li>
    </>
  );
};

export default MenuItems;
