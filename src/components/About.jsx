import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/constant";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>
          <span className="text-white font-semibold font-mono text-center">
            Introduction
          </span>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-white text-[20px] leading-[40px] text-justify"
      >
        <p>
          {"<"}I am a master’s student at{" "}
          <span className="bg-gradient-to-r from-violet-200 to-pink-200 text-black rounded-sm">
            Indian Institute of Technology, Guwahati
          </span>
          , bridging my academic background in geotechnical engineering with my
          passion for technology to solve complex problems and drive innovation.
          {"/>"}
        </p>
        <br />
        <p>
          {"<"}I am deeply passionate about development, constantly exploring
          new technologies and frameworks to build efficient and user-friendly
          applications. Through personal projects, I have built a strong
          foundation in{" "}
          <span className="bg-gradient-to-r from-violet-200 to-pink-200 text-black rounded-sm">
            Front-End
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-violet-200 to-pink-200 text-black rounded-sm">
            Back-End
          </span>{" "}
          development, gaining proficiency in JavaScript frameworks, now
          expanding my expertise in Java-based technologies. My curiosity drives
          me to continuously learn and experiment.
          {"/>"}
        </p>
        <br />
        <p>
          {"<"}
          Beyond development, I am also engaged in{" "}
          <span className="bg-gradient-to-r from-violet-200 to-pink-200 text-black">
            Research
          </span>
          , where my master's thesis research integrates the blasting and impact
          related aspect of rock mechanics and machine learning, focusing on
          predicting experimental outcomes which can't be performed in the
          laboratories. Leading a team of five, we have designed and set up
          advanced impact-dynamic instruments in our institute's lab, and are
          currently in the process of publishing our research in a reputed
          journal.{"/>"}
        </p>
      </motion.p>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        //added options prop on my own
        max: 45,
        scale: 1,
        speed: 450,
        reset: true, // Ensures the tilt resets when the cursor leaves
        transition: true, // Enables smooth transition back to original position
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // options={{ max: 45, scale: 1, speed: 450 }} author had these here
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(About, "about");
