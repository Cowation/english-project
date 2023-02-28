import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";

const LoadingEllipsis = () => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setDots((dots) => (dots === 3 ? 1 : dots + 1));
    }, 500);
  }, [dots]);

  return (
    <span>
      {/* String that contains dots number of periods */}
      {Array(dots).fill(".").join("")}
    </span>
  );
};

const OldParagraph = ({ children }: PropsWithChildren) => {
  return (
    <motion.p
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "linear",
      }}
    >
      {children}
    </motion.p>
  );
};

const FakeLoader = () => {
  const assetNames = [
    "images/coolmathgames/1.png",
    "images/coolmathgames/2.png",
    "sentry/browser.min.js",
    "sentry/tracing.min.js",
    "sentry/integrations.min.js",
    "sentry/angular.min.js",
    "assets/fonts/Inter-roman.var.woff2",
    "assets/fonts/Inter-roman.var.woff",
    "assets/fonts/Inter-roman.var.ttf",
    "assets/fonts/Inter-roman.var.svg",
    "assets/fonts/Inter-roman.var.eot",
    "assets/fonts/Inter-roman.var.woff2",
    "scripts/coolmathgames.js",
    "scripts/sw.js",
    "scripts/backend.js",
    "images/coolmathgames/1.png",
    "images/coolmathgames/2.png",
    "sentry/browser.min.js",
    "sentry/tracing.min.js",
    "sentry/integrations.min.js",
    "sentry/angular.min.js",
    "assets/fonts/Inter-roman.var.woff2",
    "assets/fonts/Inter-roman.var.woff",
    "assets/fonts/Inter-roman.var.ttf",
    "assets/fonts/Inter-roman.var.svg",
    "assets/fonts/Inter-roman.var.eot",
    "assets/fonts/Inter-roman.var.woff2",
    "scripts/coolmathgames.js",
    "scripts/sw.js",
    "scripts/backend.js",
    "initialize.js",
  ];

  const [assetIndex, setAssetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the asset index by 1 and stop at the last asset
      setAssetIndex((assetIndex) =>
        assetIndex === assetNames.length - 1 ? assetIndex : assetIndex + 1
      );
    }, 80);

    return () => clearInterval(interval);
  }, [assetNames.length]);

  return (
    <div className="h-full w-full bg-neutral-100 flex flex-col items-center justify-center">
      <Image src="/images/plugin.png" width={50} height={50} alt="Plugin" />
      <motion.p className="text-neutral-600 mt-2">
        Loading {assetNames[assetIndex]}
        <LoadingEllipsis />
      </motion.p>
    </div>
  );
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const FlashPaper = () => {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    (async () => {
      await sleep(1000);
      setScreen(1);
      await sleep(4000);
      setScreen(2);
      await sleep(4000);
      setScreen(3);
      await sleep(2000);
      setScreen(4);
    })();
  }, []);

  switch (screen) {
    case 0:
      return (
        <div className="h-full w-full bg-neutral-400 flex flex-col items-center justify-center"></div>
      );
    case 1:
      return (
        <div className="h-full w-full bg-neutral-100 flex flex-col items-center justify-center">
          <Image src="/images/plugin.png" width={50} height={50} alt="Plugin" />
          <motion.p className="text-neutral-600 mt-2">
            Loading Macromedia Flash
            <LoadingEllipsis />
          </motion.p>
        </div>
      );
    case 2:
      return <FakeLoader />;
    case 3:
      return (
        <div className="h-full w-full bg-neutral-100 flex flex-col items-center justify-center">
          <Image src="/images/plugin.png" width={50} height={50} alt="Plugin" />
          <motion.p className="text-neutral-600 mt-2">Applet Ready</motion.p>
        </div>
      );
    case 4:
      return (
        <div className="h-full w-full bg-neutral-800 flex text-left overflow-y-scroll flex-col gap-4 items-start p-6">
          <motion.h1
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "linear",
            }}
            className="font-bold text-2xl text-lime"
          >
            COOL MATH GAMES
          </motion.h1>
          <OldParagraph>I turned to my left. “Hey Gabe,” I said.</OldParagraph>
          <OldParagraph>He faced towards me. “What?” he asked.</OldParagraph>
          <OldParagraph>
            “Look at this,” I said, clicking with my mouse to cause a small
            explosion animation to pop up on my screen. I tapped my friend,
            Filippo, on my right.
          </OldParagraph>
          <OldParagraph>
            “Did you see that?” I yelled. “It looked so cool!”
          </OldParagraph>
          <OldParagraph>
            We all chuckled. We were in Mrs. Gutierrez{"'"}s noisy classroom,
            messing around with the seashell iMacs tucked into the corner of the
            room. The walls of the room were painted a bright teal, with letters
            of the alphabet strung across the edges. Some kids ran around,
            throwing wooden blocks at each other or finger-painting on gigantic
            sheets of construction paper. As Kindergarteners, they practically
            owned the room with our crazy hyperactive antics. On the other hand,
            us three naturally gravitated toward the machines. We sat on short
            stools with our fingers on the keyboards, usually for the hour of
            free time we were given.
          </OldParagraph>
          <OldParagraph>
            “Woah, that{"'"}s so cool. I found a game about pizza!” Filippo
            exclaimed.
          </OldParagraph>
          <OldParagraph>
            “That{"'"}s cool, dude, but I don{"'"}t think it{"'"}s as cool as my
            tank explosion,” I said, as I mashed my mouse, causing multiple
            explosions to boom out of the computer speakers at an alarmingly
            high volume, vibrating the table.
          </OldParagraph>
          <OldParagraph>
            Mrs. Gutierrez walked over to us in a rather inquisitive mood. “Is
            that appropriate?” she asked.
          </OldParagraph>
          <OldParagraph>
            Gabe shot out of his seat. “Yes! It{"'"}s “Cool Math Games”! Nathan
            was just playing games about… math… and tanks…” he explained as his
            voice faltered.
          </OldParagraph>
          <OldParagraph>
            Suddenly, someone started yelling in the other side of the room. It
            was Joshua complaining about someone stealing his cars again. Mrs.
            Gutierrez gave us the stink eye and walked away.
          </OldParagraph>
          <OldParagraph>
            “I looove Cool Math Games!” I said, as I clicked on my screen and
            made more explosions. “I love math!”
          </OldParagraph>
          <OldParagraph>
            The “math games” we played were nothing like the fractions or
            addition rules our teacher taught us. We thought the tanks and
            pizzas and endless-runner games were way cooler than those other
            boring things. I looked over to my right and saw a black-and-white
            poster of an Albert Einstein quote.
          </OldParagraph>
          <OldParagraph>
            “I bet Albert Einstein was so good at this game,” I said.
          </OldParagraph>
          <Link
            href="/forward"
            className="bg-lime mt-8 underline p-2 text-black hover:bg-black hover:text-lime"
          >
            Jump through time
          </Link>
        </div>
      );
    default:
      return <div>idk</div>;
  }
};

const CoolMath = () => {
  return (
    <>
      <Head>
        <title>
          Cool math games - free math games for kids of all ages - Kindergarten
          Games
        </title>
      </Head>
      <div className="w-full">
        <div className="max-w-4xl mx-auto">
          <div className="w-full relative h-60">
            <Image
              src="/images/coolmathheader.png"
              alt="Coolmath Header"
              fill
            />
          </div>
          <div className="flex flex-row">
            <div className="border-4 w-3/4 border-red">
              <div className="border-b-4 border-red p-2">
                <h1 className="font-bold text-3xl">Kindergarten Games</h1>
                <p className="font-bold text-md">
                  Coolmath Games - Math and thinking games, puzzles and fun for
                  kids of all ages
                </p>
              </div>
              <div className="p-8 text-center">
                <div className="bg-white w-full overflow-hidden aspect-[4/3]">
                  <FlashPaper />
                </div>
                <p className="text-yellow font-bold mx-auto text-sm">
                  If this Flash game doesn{"'"}t work on your computer, go{" "}
                  <span className="underline text-blue">here</span> for help.
                </p>
                <p className="text-yellow font-bold mx-auto text-sm">
                  Get a teacher or parent to help!
                </p>
                <p className="text-blue underline font-bold mt-4">
                  back to All Games
                </p>
                <p className="text-green text-left font-bold mt-2 text-lg">
                  Game Instructions:
                </p>
                <p className="white-green text-left font-bold mt-2 text-md">
                  Read the piece.
                </p>
              </div>
            </div>
            <div className="w-1/4 border-4 border-red"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoolMath;
