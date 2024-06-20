import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import photo1 from "../assets/portfolio-img1.png";
import photo2 from "../assets/portfolio-img2.png";
import photo3 from "../assets/portfolio-img3.png";
import WorkCard from "./WorkCard";

const workCards = [
  {
    img: photo1,
    title: "Project Title 1",
    subtitle: "UI/UX Designer",
  },
  {
    img: photo2,
    title: "Project Title 2",
    subtitle: "Web Developer",
  },
  {
    img: photo3,
    title: "Project Title 3",
    subtitle: "Graphic Designer",
  },
];

const Work = () => (
  <section id="work" className="section">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-x-10">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-7 mb-10 lg:mb-0"
        >
          <div>
            <h2 className="h2 font-primary font-bold tracking-[2px]">
              工作經歷 <br />
              WORK EXPERIENCE
            </h2>
            <p className="max-w-sm mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, reprehenderit optio dolore alias veniam quae! Odit
              iusto eos exercitationem magni, ex autem, ullam soluta beatae
              sequi, nesciunt voluptatibus voluptates aperiam?
            </p>
            <button className="btn btn-sm">點我看全部</button>
          </div>

          {workCards.slice(0, 1).map((card, index) => (
            <WorkCard key={index} {...card} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col lg:gap-y-16 gap-y-7"
        >
          {workCards.slice(1).map((card, index) => (
            <WorkCard key={index} {...card} />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Work;
