import ImageWrapper from "../ImageWrapper";

import searchIcon from "@src/assets/searchIcon.png";
import Logo from "@src/assets/instagramLogo.png";
import Link from "next/link";
import NavMenu from "./NavMenu";

import {
  ChangeEvent,
  FC,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from "react";
import { debounce } from "lodash-es";

type navShape = {};

const Navigtaion: ForwardRefRenderFunction<HTMLDivElement, navShape> = (
  props,
  ref
) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    debounce(() => {
      // do api call
    })();
  };

  return (
    <nav
      ref={ref}
      className="fixed flex justify-center w-screen top-0 left-1/2 -translate-x-1/2 bg-white border-b-2 border-solid border-gray-300"
    >
      <div className="inline-flex py-5 justify-between w-full max-w-5xl h-30 items-center">
        <Link passHref href="/">
          <div>
            <ImageWrapper src={Logo} alt="searchIcon" />
          </div>
        </Link>
        <div className="flex px-2 py-1 items-center border border-solid border-black space-x-2 rounded-lg ">
          <ImageWrapper
            src={searchIcon}
            width={20}
            height={20}
            alt="searchIcon"
          />
          <input
            placeholder="search"
            name="search"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <NavMenu />
      </div>
    </nav>
  );
};

export default forwardRef(Navigtaion);
