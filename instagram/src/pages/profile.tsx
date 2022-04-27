import { HorizontalLine } from "@src/components/common";
import Image from "@src/components/common/ImageWrapper";
import React from "react";

type Props = {};

const profile = (props: Props) => {
  return (
    <div className="flex w-full">
      <div className="relative w-1/2 h-[400px]">
        <Image src="/vercel.svg" layout="fill" alt="" />
      </div>
      <div className="relative w-1/2 h-[400px]">
        <Image src="/vercel.svg" layout="fill" alt="" />
      </div>
    </div>
  );
};

export default profile;
