import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <h1>
        <Link href="/" className="logo">
          Klirr
        </Link>
      </h1>
    </>
  );
};

export default Logo;
