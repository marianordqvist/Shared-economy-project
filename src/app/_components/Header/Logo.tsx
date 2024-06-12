import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <h1>
        <Link href="/" className="logo text-2xl italic">
          Klirr
        </Link>
      </h1>
    </>
  );
};

export default Logo;
