import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { IoHandLeftOutline, IoNewspaperOutline } from "react-icons/io5";

const Button = ({
  onClick,
  href,
  children,
  primary,
}: PropsWithChildren<{
  onClick?: () => void;
  href?: string;
  primary?: boolean;
}>) => {
  const className = clsx(
    "inline-block px-4 py-2 rounded-md flex flex-row gap-2 items-center justify-center font-semibold transition-all ease-out duration-300",
    {
      "bg-lime hover:bg-lime-900 text-black": primary,
      "bg-neutral-800 hover:bg-neutral-700 text-white": !primary,
    }
  );

  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>English Project</title>
        <meta name="description" content="My English project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex flex-col justify-center items-center bg-black">
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-lime text-5xl font-bold">
            ENGLISH
            <br />
            PROJECT
          </h1>
          <div className="w-full h-1 bg-lime"></div>
          <p className="text-white text-lg">
            You can view this project in interactive or static mode.
            <br />
            Interactive mode is recommended for desktop devices.
          </p>
          <div className="flex flex-row gap-2">
            <Button href="/interactive" primary>
              <IoHandLeftOutline />
              Interactive
            </Button>
            <Button href="/static">
              <IoNewspaperOutline />
              Static
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
