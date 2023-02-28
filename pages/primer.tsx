import Header from "@/components/typography/Header";
import Paragraph from "@/components/typography/Paragraph";
import ViewLink from "@/components/typography/ViewLink";
import { motion } from "framer-motion";
import Image from "next/image";

const Primer = () => {
  return (
    <div className="max-w-2xl mx-auto py-16 flex flex-col gap-4">
      <Header text="Primer" />
      <Paragraph first>
        In today{"'"}s fast-paced world, the way we interface with technology is
        constantly changing. Phones and computers dominate our daily lives and
        drive productivity across the board. While we may take these things for
        granted now, the rate at which technology has evolved was never this
        fast.
      </Paragraph>
      <div className="flex flex-col items-stretch gap-1">
        <motion.div
          initial="rest"
          whileHover="hover"
          className="relative overflow-hidden"
        >
          <motion.div
            variants={{
              rest: {
                left: "0%",
                opacity: "0%",
              },
              hover: {
                left: "70%",
                opacity: "100%",
              },
            }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
            className="bg-lime h-full w-0.5 -translate-x-1/2 absolute"
          />
          <motion.div
            variants={{
              rest: {
                top: "0%",
                opacity: 0,
              },
              hover: {
                top: "84%",
                opacity: 1,
              },
            }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
            className="bg-lime w-full h-0.5 -translate-y-1/2 absolute"
          />
          <motion.div
            style={{
              top: "84%",
              left: "70%",
            }}
            variants={{
              rest: {
                scale: 0,
                x: "-50%",
                y: "-50%",
              },
              hover: {
                scale: 1,
                x: "-50%",
                y: "-50%",
              },
            }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
            className="w-3 h-3 absolute rounded-full bg-red border-2 border-white"
          />
          <p className="text-black p-2 absolute bg-lime font-bold">HOVER ME</p>
          <Image
            alt="Graph of average transistor count vs. time"
            src="/images/transistor-graph.png"
            className="mx-auto border w-full border-neutral-400 p-6"
            width={600}
            height={600}
          />
        </motion.div>
        <p className="text-neutral-400 w-full text-left">
          We have come a long way in terms of computing.
          <br />
          Source: The History and Impact of Computers.
        </p>
      </div>
      <Paragraph>
        Take a look at the graph above, which plots [average computer speeds]
        against a certain year. As seniors, we were born in the 2004-2006 range.
        Notice the shape of the curve during this point. It is mostly flat,
        resembling the rest of the technology that came before, during the
        latter half of the twentieth century. Now look a few years later,
        primarily 2007-2010. Progress was being made. When we were born,
        technology was on the cusp of an explosion that would cause an
        exponential spike in innovation that is felt even to this day.
      </Paragraph>
      <Paragraph>
        To me, there is significance to the late 2000{"'"}s. From video games to
        iPhones to computers, our first steps into the world of technology were
        also humanity{"'"}s first steps into the world of modern technological
        innovation. Looking back on this time period, it{"'"}s clear that it was
        a turning point both in terms of technology and childhood experiences.
        For many of us, it was a time when we first started to interact with
        technology in a meaningful way, whether that was through playing games
        on the Wii or exploring the internet on a computer. It was a time when
        technology started to become more accessible to the average person, and
        as a result, it had a profound impact on our daily lives.
      </Paragraph>
      <Paragraph>
        But beyond just the impact on technology, this time period was also
        significant for childhood experiences more broadly. It was a time when
        many of us were just starting to discover the world around us, and
        technology played a big role in that. Whether we were playing games or
        exploring the internet, technology provided us with a new way to
        interact with the world and learn about ourselves and others. Looking
        back on this time period, it{"'"}s clear that it was a time of great
        change and innovation. And while the technology may have evolved, the
        memories and experiences we had during this time will always be a part
        of who we are.
      </Paragraph>
      <Paragraph>
        With that in mind, our memories remain in our monolithic vaults that we
        call brains, with nearly 2.5 million gigabytes of storage space. The
        memories of your childhood aren{"'"}t forgotten, but rather committed to
        your mind with a lower priority. With this piece, try and bring your
        childhood to the forefront of your head. Remember a simpler time, where
        the only thing you had to worry about was grabbing a snack from the
        fridge or cleaning up your room. Try your best to sift through the
        archives of your memory as I guide you through this era. Drag yourself
        out of 2023 and put yourself in the shoes of your past self and open
        your mind to nostalgia.
      </Paragraph>
      <ViewLink href="/wii" />
    </div>
  );
};

export default Primer;
