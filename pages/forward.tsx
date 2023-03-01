import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Intro = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div className="h-[300vh] relative overflow-x-clip" ref={ref}>
      <motion.div
        className="w-full h-[100vh] sticky flex flex-col gap-4 top-0 p-16"
        style={{
          perspective: 1000,
          // opacity: scrollYProgress,
        }}
        // ref={ref}
      >
        <motion.h1
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
            translateX: useTransform(scrollYProgress, [0, 0.1], [-100, 0]),
          }}
          className="text-white text-5xl font-bold"
        >
          The way we interact with technology has changed.
        </motion.h1>
        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0.12, 0.2], [0, 1]),
            translateX: useTransform(scrollYProgress, [0.12, 0.2], [-50, 0]),
          }}
          className="text-3xl"
        >
          I remember a time where not everything on the internet was for profit,
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0.25, 0.35], [0, 1]),
            translateX: useTransform(scrollYProgress, [0.25, 0.35], [-50, 0]),
          }}
          className="text-3xl"
        >
          where the web was just a fun place to share ideas and learn.
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0.4, 0.7], [0, 1]),
            translateX: useTransform(scrollYProgress, [0.4, 0.7], [-50, 0]),
          }}
          className="text-3xl"
        >
          Nowadays,
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]),
            translateX: useTransform(scrollYProgress, [0.5, 0.8], [-50, 0]),
          }}
          className="text-3xl"
        >
          the internet is a different place,
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0.6, 0.9], [0, 1]),
            translateX: useTransform(scrollYProgress, [0.6, 0.9], [-50, 0]),
          }}
          className="text-3xl"
        >
          riddled with ads and algorithms engineered to keep you
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 0.95], [0, 1]),
            translateX: useTransform(scrollYProgress, [0.7, 0.95], [-50, 0]),
          }}
          className="text-3xl"
        >
          attached to your screen.
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0.95, 1], [0, 1]),
            translateX: useTransform(scrollYProgress, [0.95, 1], [-50, 0]),
          }}
          className="font-mono"
        >
          The internet changed <br />
          From simple to complex web <br />
          What have we gained, lost?
        </motion.p>
      </motion.div>
    </div>
  );
};

const Reflection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div className="h-[1000vh] relative overflow-x-clip" ref={ref}>
      <motion.div
        className="w-full h-[100vh] sticky flex flex-col gap-4 top-0 p-16"
        style={{
          perspective: 1000,
          // opacity: scrollYProgress,
        }}
        // ref={ref}
      >
        <h1 className="text-2xl font-bold">
          Corporations bank on the fact that technology is no longer a niche
          toy, but an integral part of our lives.
        </h1>
        <p>
          Long-gone are the days where every button you pushed, every site you
          viewed, hell, even how long you looked at something wasn{"'"}t logged
          and sold to third parties.
        </p>
        <p>
          Everything you saw on the internet was the product of a consortium of
          random people making content for the hell of it.
        </p>
        <p>
          Physical products were still the main way to make money, and the
          internet was just a sandbox.
        </p>
        <p>
          Even then, physical devices were easy to repair and modify with more
          open software ecosystems that fostered true innovation.
        </p>
        <p>
          Now, we live in a world where the internet is a place where you{"'"}re
          constantly being sold something or tracked.
        </p>
        <p>
          We{"'"}re living in a time where we have to fight for the right to fix
          our own devices.
        </p>
        <p>
          Back then, adults and kids alike didn{"'"}t have to worry about these
          modern problems.
        </p>
        <p>
          The infancy of technology paralleled our childhoods lives. It was much
          simpler.
        </p>

        <h1>I am glad to have grown up in a simpler era.</h1>
      </motion.div>
    </div>
  );
};

const Forward = () => {
  return (
    <div className="">
      <div className="w-full h-screen flex flex-col items-center gap-2 justify-center">
        <motion.h1 className="font-bold text-5xl">Hi.</motion.h1>
        <motion.p className="text-2xl">
          Welcome back. Scroll to continue.
        </motion.p>
      </div>
      <Intro />
      <div className="h-[200vh]">
        <div className="w-full h-screen flex flex-row items-center sticky top-0 justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0,
            }}
          >
            <BsFillExclamationCircleFill className="text-white text-[20rem] opacity-20 absolute inset-0 my-auto mx-auto" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 2,
              duration: 0,
            }}
            className="font-mono max-w-2xl"
          >
            /dev/knd1: clean, 3390/131072 files, 131072/524288 blocks
            <br /> [ 0.0000] Error: Execution was interrupted. Stack trace:{" "}
            <br />
            {"[   4.0673]"} My laptop became a toy; something to play with on my
            own terms. <br />
            {"[   4.0923]"} Just like my Lego sets or miniature cars, I left it
            alone, and it left me alone. <br />
            {"[   6.1048]"} It then became a tool; something to help me with my
            schoolwork. <br />
            {"[   7.0234]"} My parents made me do IXL Math and Khan Academy,
            benefitting me as a person. <br />
            [ 12.0673] I got a phone, and I used it to play games and watch
            YouTube. <br />
            [ 14.8064] But I started to notice something strange. <br />
            [ 14.8263] It seemed like it was always calling out to me, begging
            for my attention. <br />[ 14.2753] I would feel phantom vibrations
            in my pocket and instinctively grab my device only to be met with a
            blank lock screen. <br />
            [ 16.0673] I left it alone, and it did not leave me alone. <br />
            [ 17.0000] Is it more than a tool? <br />[ 17.0001] Kernel panic -
            keep scrolling to flush panic.
          </motion.p>
        </div>
      </div>
      <Reflection />
    </div>
  );
};

export default Forward;
