import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/photo.png";

const Banner = () => (
  <section
    id="home"
    className="min-h-[100vh] lg:min-h-[100vh] flex items-center"
  >
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
        <div className="flex-1 text-center font-secondary lg:text-left">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[55px] font-primary font-bold leading-[0.8] lg:text-[110px] mb-3"
          >
            林之蓁 KEN
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]"
          >
            <span className="text-white mr-4">我是一名</span>
            <span>前端工程師</span>
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg mx-auto lg-mx-0"
          >
            您好！我是位致力於透過程式碼打造良好網頁體驗的前端工程師！ <br />
            目前已經在前端領域累積了2年的開發經驗
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max mt-6 mx-auto lg:mx-0"
          >
            <button className="btn btn-lg">我的履歷</button>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex mt-6 text-[50px] gap-x-6 max-w-max mx-auto lg:mx-0"
          >
            <a href=".">
              <FaGithub />
            </a>
            <a href=".">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px]"
        >
          <img className="rounded-3xl" src={Image} alt="img" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Banner;
