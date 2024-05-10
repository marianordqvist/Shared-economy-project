"use client";
import React, { useState } from "react";
import Link from "next/link";
import DropdownSelect from "./DropdownSelect";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const months = [
    { label: "january", value: "january link" },
    { label: "february", value: "february link" },
    { label: "march", value: "march link" },
  ];

  const [chosenMonth, setChosenMonth] = useState("month");

  const handleChooseMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChosenMonth(event.target.value);
  };

  const MobileHeader: React.FC = () => {
    return (
      <div className=" bg-zinc-400">
        <div className="flex justify-between p-7">
          <h1>
            <Link href="/">Klirr</Link>
          </h1>
          <button onClick={handleMobileMenu}>close</button>
        </div>
        <nav>
          <ul className="flex h-dvh flex-col items-center justify-center gap-10 text-lg text-white">
            <li>
              <Link href="/insights">insights</Link>
            </li>
            <li>
              <button>monthly</button>
              <DropdownSelect
                label="Pick month"
                options={months}
                value={chosenMonth}
                onChange={handleChooseMonth}
              />
            </li>
            <li>
              <Link href="/account">account</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  const DesktopHeader = () => {
    return (
      <header className="flex justify-between bg-zinc-300 p-7">
        <h1>
          <Link href="/">Klirr</Link>
        </h1>
        <nav>
          <ul className="hidden gap-10 sm:flex">
            <li>
              <Link href="/insights">insights</Link>
            </li>
            <li>
              <DropdownSelect
                label="Pick month"
                options={months}
                value={chosenMonth}
                onChange={handleChooseMonth}
              />
            </li>
            <li>
              <Link href="/account">account</Link>
            </li>
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
