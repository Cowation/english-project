import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

function IntersectionLink({ href }: { href: string }) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) router.push(href);
  }, [isInView, href, router]);

  return <div ref={ref}></div>;
}

export default function ViewLink({ href }: { href: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const reciprocal = useTransform(scrollYProgress, (value) => 1 / value);

  return (
    <div className="h-screen w-full relative flex flex-col justify-between text-center">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-lime absolute inset-0 p-2"
      >
        <motion.div style={{ scaleX: reciprocal }}>
          <motion.p className="text-black text-2xl font-bold">
            Keep scrolling to continue...
          </motion.p>
        </motion.div>
      </motion.div>
      <div ref={ref}></div>
      <IntersectionLink href={href} />
    </div>
  );
}
