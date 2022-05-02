import ImageWrapper from "../ImageWrapper";

import searchIcon from "@src/assets/searchIcon.png";
import Logo from "@src/assets/instagramLogo.png";
import LogoWhite from "@src/assets/instagramWhite.png";
import Link from "next/link";
import NavMenu from "./NavMenu";

import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState,
} from "react";
import { debounce } from "lodash-es";
import { useTheme } from "next-themes";
import classNames from "classnames";

type navShape = {
  className: string;
};

const Navigtaion: ForwardRefRenderFunction<HTMLDivElement, navShape> = (
  { className },
  ref
) => {
  const [init, setInit] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    debounce(() => {
      // do api call
    })();
  };

  useEffect(() => {
    console.log(1);
    setInit(true);
  }, []);

  return init ? (
    <nav
      ref={ref}
      className={classNames(
        "z-10 fixed flex justify-center w-screen top-0 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 border-b-2 border-solid border-gray-300",
        className
      )}
    >
      <div className="inline-flex py-5 justify-between w-full max-w-5xl h-30 items-center">
        <Link passHref href="/">
          <div className="cursor-pointer">
            {theme === "dark" ? (
              <ImageWrapper
                src={LogoWhite}
                loading="eager"
                width={120}
                height={28}
                alt="searchIconWhite"
              />
            ) : (
              <ImageWrapper
                src={Logo}
                loading="eager"
                width={120}
                height={28}
                alt="searchIcon"
              />
            )}
          </div>
        </Link>
        <div className="hidden md:flex px-2 py-1 items-center border border-solid border-black space-x-2 rounded-lg dark:bg-gray-700">
          <ImageWrapper
            src={searchIcon}
            width={20}
            height={20}
            alt="searchIcon"
          />
          <input
            className="bg-transparent"
            placeholder="search"
            name="search"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <NavMenu />
      </div>
    </nav>
  ) : null;
};

export default forwardRef(Navigtaion);
