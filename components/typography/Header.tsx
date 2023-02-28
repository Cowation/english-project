import { motion } from "framer-motion";

export default function Header({ text }: { text: string }) {
  const firstChar = text.charAt(0);
  const restOfText = text.slice(1);

  return (
    <>
      <motion.h1
        initial={{
          x: -20,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
        className="text-5xl font-black font-mono text-lime uppercase mb-2"
      >
        <span className="bg-lime text-black">{firstChar}</span>
        {restOfText}
      </motion.h1>
      <hr className="border-2 border-lime self-stretch" />
    </>
  );
}
