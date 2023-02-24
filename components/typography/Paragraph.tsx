import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Paragraph({
  children,
  first,
}: PropsWithChildren<{ first?: boolean }>) {
  return (
    <motion.p
      initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
      whileInView={{
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: { ease: "easeOut", duration: 0.5, delay: first ? 0.6 : 0 },
      }}
      className="text-lg text-white origin-top"
    >
      {children}
    </motion.p>
  );
}
