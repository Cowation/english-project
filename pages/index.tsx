import Head from "next/head";
import { IoHandLeftOutline, IoNewspaperOutline } from "react-icons/io5";
import { Button } from "../components/typography/Button";

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
            <Button href="/primer" primary>
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
