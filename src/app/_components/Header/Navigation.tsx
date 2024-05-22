import React from "react";
import Link from "next/link";
import DropdownSelect from "../DropdownSelect";
import { useState, useRef } from "react";

// props type for a single submenu item
interface SubmenuItem {
  title: string;
  url: string;
}

// props type for an array of submenu items
type Submenu = SubmenuItem[];

// props type for the Navigation component
interface NavigationProps {
  items: {
    title: string;
    url: string;
    submenu?: Submenu;
  };
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // delay submenu dropdown
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current as NodeJS.Timeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 350); // Adjust the delay as needed
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef.current as NodeJS.Timeout);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Adjust the delay as needed
  };

  return (
    <>
      <li className="duration-400 font-medium hover:underline">
        {items.submenu ? (
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdownOpen ? "true" : "false"}
            >
              {items.title}
            </button>
            <DropdownSelect
              submenus={items.submenu}
              dropdown={dropdownOpen}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            />
          </div>
        ) : (
          <Link href={items.url}>{items.title}</Link>
        )}
      </li>
    </>
  );
};

export default Navigation;
