import Link from "next/link";
import React from "react";
import IconWrapper, { IconName } from "../Icon/IconWrapper";

const NavMenu = () => {
  const items: IconName[] = ["home", "inbox", "explore", "notification"];
  const iconClassName = "w-8 h-8";

  return (
    <span className="flex">
      {items.map((name, idx) => {
        return (
          <Link passHref key={`nav-menu-${idx}`} href={`/${name}`}>
            <IconWrapper name={name} className={iconClassName} />
          </Link>
        );
      })}
    </span>
  );
};

export default NavMenu;
