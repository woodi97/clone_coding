import React from "react";
import ProfileIcon from "../common/ProfileIcon";

type Props = {};

const Story = () => {
  return (
    <div className="flex flex-col items-center mx-2 my-4 first:ml-4 last:mr-4">
      <ProfileIcon iconSize="large" storyBorder />
    </div>
  );
};

const Stories = (props: Props) => {
  return (
    <div className="flex items-center relative left-1/2 -translate-x-1/2 h-24 max-w-5xl rounded-sm border border-solid border-gray-300 bg-white overflow-x-scroll overflow-y-hidden scrollbar-hide">
      {Array(30)
        .fill(0)
        .map((_, idx) => {
          return <Story key={`story-item-${idx}`} />;
        })}
    </div>
  );
};

export default Stories;
