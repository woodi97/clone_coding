import Link from "next/link";
import React, { useState } from "react";
import IconButtonWrapper from "../Icon/IconButtonWrapper";
import { IconName } from "../Icon/IconWrapper";
import PostCreateModal from "../modal/PostCreateModal";
import ThemeSwitch from "../ThemeSwitch";

const NavMenu = () => {
  const [modal, setModal] = useState(false);
  const items: IconName[] = ["home", "inbox", "explore", "notification"];
  const iconClassName = "flex items-center w-8 h-8";

  return (
    <span className="flex items-center">
      <ThemeSwitch />
      <IconButtonWrapper
        name="inbox"
        className={iconClassName}
        onClick={() => setModal((prev) => !prev)}
      />
      <PostCreateModal show={modal} onClose={() => setModal((prev) => !prev)} />
      {items.map((name, idx) => {
        return (
          <Link passHref key={`nav-menu-${idx}`} href={`/${name}`}>
            <IconButtonWrapper name={name} className={iconClassName} />
          </Link>
        );
      })}
    </span>
  );
};

export default NavMenu;
