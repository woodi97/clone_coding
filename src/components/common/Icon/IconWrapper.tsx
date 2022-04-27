import React, { FC } from "react";

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

const IconWrapper: FC<IconWrapperShape> = ({ name, className }) => {
  return <div className={className}>{iconSelector[name]}</div>;
};

export default IconWrapper;
