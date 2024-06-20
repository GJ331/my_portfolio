import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 font-primary font-bold tracking-[2px]">關於我 ABOUT ME</h2>
            <h3 className="h3 mb-4 tracking-[2px]">
              我是一名前端工程師，目前已有2年的網頁前端開發經驗。
            </h3>
            <p className="my-6 font-tertiary tracking-[2px]">
              畢業後，先在產品行銷領域參與股市 APP 的功能規劃與畫面設計，
              <br />
              過程中接觸網頁設計，對前端產生興趣。經過自我學習、公司培訓，
              <br />
              成功轉職成為一名前端程式設計師。
              <br />
            </p>
            <hr />
            <p className="my-6 font-tertiary tracking-[2px]">
              透過參與專案，迅速累積前端開發經驗，主要運用 Angular 、 TypeScript
              和 Scss 進行開發，我也樂於探索新技術和工具來提升自己的技能水平。
              <br />
              我期待能為您的團隊帶來價值，並共同打造令人驚艷的使用者體驗。
            </p>
            <div className="flex">
              <div className="flex items-end">
                <div className="text-[40px] font-primary text-gradient mr-2">
                  {inView ? <CountUp start={0} end={2} duration={2} /> : null}
                </div>
                <div className="text-md tracking-[2px]">年前端開發經驗</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
