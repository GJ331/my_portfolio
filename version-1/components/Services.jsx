import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
  {
    name: "UI/UX Designer",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, minus quia eius quisquam praesentium commodi eos laudantium impedit? Magni!",
    link: "more...",
  },
  {
    name: "Front-end Developer",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, minus quia eius quisquam praesentium commodi eos laudantium impedit? Magni!",
    link: "more...",
  },
  {
    name: "Digital Marketing",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, minus quia eius quisquam praesentium commodi eos laudantium impedit? Magni!",
    link: "more...",
  },
];

const Services = () => (
  <div id="services" className="section">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
        >
          <h2 className="h2 font-primary font-bold tracking-[2px] mb-6">
            提供的服務 SERVICES
          </h2>
          <h3 className="h3 max-w-[455px] mb-16">
            我是一名前端工程師，目前已有2年的網頁前端開發經驗。
          </h3>
          <button className="btn btn-sm">點我看共多</button>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <div className="">
            {services.map((service, index) => {
              const { name, desc, link } = service;
              return (
                <div
                  key={index}
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-tertiary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight pb-3">{desc}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="."
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight size={25} />
                    </a>
                    <a href="." className="text-gradient text-sm">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Services;
