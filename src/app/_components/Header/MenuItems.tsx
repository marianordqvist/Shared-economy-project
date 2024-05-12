import React from "react";
import Link from "next/link";
import DropdownSelect from "../DropdownSelect";
import { useState } from "react";

const MenuItems = ({ items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <li>
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdownOpen ? "true" : "false"}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {items.title}
            </button>
            <DropdownSelect submenus={items.submenu} />
          </>
        ) : (
          <Link href={items.url}>{items.title}</Link>
        )}
      </li>
    </>
  );
};

export default MenuItems;
