"use client";
import React, { useState } from "react";
import { menuItemsData } from "./menuItemsData";
import Logo from "../Logo";
import MenuItems from "./MenuItems";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const MobileHeader: React.FC = () => {
    return (
      <header className="header__mobile--nav bg-zinc-400">
        <div className="flex justify-between p-7">
          <Logo />
          <button onClick={handleMobileMenu}>close</button>
        </div>
        <nav>
          <ul className="flex h-dvh flex-col items-center justify-center gap-10 text-lg text-white">
            {menuItemsData.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
          </ul>
        </nav>
      </header>
    );
  };

  const DesktopHeader = () => {
    return (
      <header className="header__desktop--nav flex justify-between bg-zinc-300 p-7">
        <Logo />
        <nav>
          <ul className="hidden gap-16 sm:flex">
            {menuItemsData.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
          </ul>
        </nav>
        <button className="sm:hidden" onClick={handleMobileMenu}>
          menu
        </button>
      </header>
    );
  };

  return <>{mobileMenuOpen ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
