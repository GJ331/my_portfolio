import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

const NavLink = () => {
  const divClass =
    "w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50";

  const linkClass =
    "cursor-pointer w-[60px] h-[60px] flex items-center justify-center";

  const links = [
    { to: "home", icon: <BiHomeAlt />, offset: -200 },
    { to: "about", icon: <BiUser /> },
    { to: "services", icon: <BsClipboardData /> },
    { to: "work", icon: <BsBriefcase /> },
    { to: "contact", icon: <BsChatSquareText />, offset: 50 },
  ];

  return (
    <div className={divClass}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          activeClass="active"
          smooth={true}
          spy={true}
          className={linkClass}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
