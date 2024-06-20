import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => (
  <div id="contact" className="py-16 lg:section">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* 文字 */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex justify-start items-center"
        >
          <div>
            <h4 className="text-xl uppercase font-primary font-medium mb-2 tracking-wide">
              Get in touch
            </h4>
            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Let's work <br />
              together
            </h2>
          </div>
        </motion.div>

        {/* 表格 */}
        <motion.form
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          action="submit"
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
        >
          <input
            id="name"
            type="text"
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-primary transition-all"
            placeholder="Name"
          />
          <input
            id="email"
            type="text"
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-primary transition-all"
            placeholder="Email"
          />
          <textarea
            id="message"
            className="bg-transparent py-12 outline-none w-full placeholder:text-white focus:border-primary transition-all resize-none mb-12"
            placeholder="Message"
          ></textarea>
          <button className="btn btn-lg">Send</button>
        </motion.form>
      </div>
    </div>
  </div>
);

export default Contact;
