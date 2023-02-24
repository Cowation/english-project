import { useInView } from "framer-motion";
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
  return (
    <div className="h-screen w-full flex flex-col justify-between text-center">
      <p className="text-neutral-500 font-bold">
        Keep scrolling to continue...
      </p>
      <IntersectionLink href={href} />
    </div>
  );
}
