import React, { FC } from "react";
import { Navigtaion } from "../common";

type Props = {
  children: React.ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navigtaion className="h-20" />
      <main className="z-0 pt-24 flex flex-col w-full min-h-screen mx-auto max-w-3xl">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
