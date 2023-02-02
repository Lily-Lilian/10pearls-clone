import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import Logo from "../../public/assets/Logo.svg";
import { GrClose } from "react-icons/gr";
import React, { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const navLinks = [
    { text: "Services", page: "services" },
    { text: "work", page: "work" },
    { text: "insights", page: "insights" },
    { text: "Careers", page: "careers" },
  ];

  return (
    <div className="fixed top-0 w-full bg-white z-20">
      <nav className="flex max-w-[1240px] mx-auto justify-between items-center py-4 ">
        <div className="w-40">
          <Image src={Logo} />
        </div>
        <div className="flex gap-12 items-center">
          {navLinks.map((link, index) => (
            <Link href={`/${link.page}`}>
              <div
                className="text-base"
                key={index}
                onMouseOver={toggleVisibility}
                onMouseOut={toggleVisibility}
              >
                {link.text}
              </div>
            </Link>
          ))}
          <div className="flex gap-6 items-center">
            <button className="px-4 py-2 border border-black hover:bg-[#0045A6] hover:text-white rounded-sm">
              Contact
            </button>
            <BsSearch onClick={handleSearchClick} />
          </div>
        </div>
        <div
          className={`top-0 py-4 left-0 right-0 shadow-md shadow-[#212529];
          ] items-center px-20 flex bg-white w-full ${
            showSearch ? "fixed" : "hidden"
          }`}
        >
          <input
            type="search"
            className="bg-white outline-none rounded-full text-lg text-black py-4 px-20 w-full"
            placeholder="Search..."
          />
          <GrClose onClick={handleSearchClick} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
