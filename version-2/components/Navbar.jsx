import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const toggleNav = () => setNav(!nav);

  const closeNav = () => setNav(false);

  const menuVariants = {
    open: {
      x: 0,
      transition: { stiffness: 20, damping: 15 },
    },
    closed: {
      x: "-100%",
      transition: { stiffness: 20, damping: 15 },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-12 text-gray-200 text-xl h-20">
        <a href=".">KEN.GJ</a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li>
              <Link
                to="skills"
                smooth={true}
                onClick={closeNav}
                offset={50}
                duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                onClick={closeNav}
                offset={50}
                duration={500}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                onClick={closeNav}
                offset={50}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
