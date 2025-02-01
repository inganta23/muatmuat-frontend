import Link from "next/link";
import React from "react";

const Navbar = () => {
  const NAV_LINKS = ["home", "pokemon"];
  return (
    <nav className="bg-white shadow-md py-2 px-4">
      <div className="flex gap-4 justify-between">
        <Link href={`/`} className="text-black cursor-pointer">
          All Store
        </Link>
        <div className="flex gap-4">
          {NAV_LINKS.map((navLink, idx) => (
            <Link
              key={idx}
              href={`/${navLink === "home" ? "" : navLink}`}
              className="capitalize text-black"
            >
              {navLink}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
