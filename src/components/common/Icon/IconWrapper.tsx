import React, { forwardRef, ForwardRefRenderFunction } from "react";

import Home from "@src/assets/home.svg";
import Inbox from "@src/assets/inbox.svg";
import Explore from "@src/assets/explore.svg";
import Notification from "@src/assets/notifications.svg";

export type IconName = "home" | "inbox" | "explore" | "notification";

type IconWrapperShape = {
  name: IconName;
  className?: string;
};

const iconSelector: { [keys in IconName]: JSX.Element } = {
  home: <Home />,
  inbox: <Inbox />,
  explore: <Explore />,
  notification: <Notification />,
};

const IconWrapper: ForwardRefRenderFunction<
  HTMLDivElement,
  IconWrapperShape
> = ({ name, className }, ref) => {
  return (
    <div ref={ref} className={className}>
      {iconSelector[name]}
    </div>
  );
};

export default forwardRef(IconWrapper);
