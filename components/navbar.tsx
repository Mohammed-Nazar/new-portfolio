import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <ul className=" list-none flex justify-center p-2 px-5 m-2 my-4 w-fit bg-[#706b73] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <Link href="/">
          <li className="mx-3">Home</li>
        </Link>
        <Link href="/">
          <li className="mx-3">About</li>
        </Link>
        <Link href="/">
          <li className="mx-3">Projects</li>
        </Link>

        <li className="mx-3 flex justify-center items-center">
          <span className="mx-2"><a href="https://github.com/Mohammed-Nazar"><FaGithub /></a></span>
          <span className="mx-2"><a href="https://www.linkedin.com/in/mohammed-nazar/"><FaLinkedin/></a></span>
          <span className="mx-2"><a href="mailto:x3raqe@gmail.com"><IoMdMail/></a></span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
