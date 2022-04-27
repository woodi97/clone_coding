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
      <div ref={childRef}>{children}</div>
    </div>
  );
};

export default PageLayout;
