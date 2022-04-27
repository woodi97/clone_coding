import React, { FC, useEffect, useRef } from "react";
import { Navigtaion } from "../common";

type Props = {
  children: React.ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childRef.current) {
      childRef.current.style.paddingTop = navRef.current?.clientHeight + "px";
    }
  }, []);

  return (
    <div>
      <Navigtaion ref={navRef} />
      <main
        ref={childRef}
        className="z-0 flex flex-col w-full min-h-screen mx-auto max-w-3xl"
      >
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
