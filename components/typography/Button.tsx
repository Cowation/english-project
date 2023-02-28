import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const Button = ({
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
