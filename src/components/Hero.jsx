import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import SwingText from "../util components/SwingText";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className=" w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm Sameer
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            {/* a passionate Full Stack Web Developer with a knack for creating
            {"  "}
            <span className="font-semibold inline font-cursive text-5xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
              dynamic
            </span>
            {"  "}
            and web applications that are */}
            <span className="inline">
              <SwingText />
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center">
        <a
          href="#about"
          className="w-[30px] h-[50px] rounded-3xl border-4 border-black p-[5.4px]"
        >
          {/* not added flex justify-center items-start by myself, but the author did */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-black mb-1"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
