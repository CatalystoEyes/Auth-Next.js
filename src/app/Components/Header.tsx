import React from "react";
import { ModeToggle } from "./ModeToggle";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link
        target="_blank"
        href="https://github.com/CatalystoEyes/Auth-Next.js"
      >
        <IoLogoGithub className="m-2 size-8" />
      </Link>
      <ModeToggle />
    </div>
  );
};

export default Header;
