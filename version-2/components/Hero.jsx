import React from "react";
import profilePhoto from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiAngularSimple,
  DiGit,
  DiReact,
  DiSass,
} from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiWebpack } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["Frontend Developer", 1000, "Web Designer", 1000]}
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-5xl font-bold text-gray-400 mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY! I AM <br />
            <span className="text-purple-500">KEN GJ</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate frontend developer with 2 years of experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex gap-6 flex-row items-center my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a href="." whileHover={{ scale: 1.2 }}>
                <AiOutlineGithub />
              </motion.a>
              <motion.a href="." whileHover={{ scale: 1.2 }}>
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a href="." whileHover={{ scale: 1.2 }}>
                <AiOutlineLink />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilePhoto}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-[300px] md:w-[450px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay:2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-300 mx-2">MY TECH STACK</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiAngularSimple className="text-red-600 mx-2" />
        <DiReact className="text-sky-500 mx-2" />
        <BiLogoTypescript className="text-blue-600 mx-2" />
        <DiSass className="text-pink-500 mx-2" />
        <RiTailwindCssFill className="text-sky-400 mx-2" />
        <DiGit className="text-red-600 mx-2" />
        <FaFigma className="text-purple-600 mx-2" />
        <SiWebpack className="text-blue-600 mx-2" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
