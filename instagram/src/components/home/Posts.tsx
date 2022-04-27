import React, { ChangeEvent, useState } from "react";
import { HorizontalLine, IconButtonWrapper } from "../common";
import Image from "../common/ImageWrapper";
import ProfileIcon from "../common/ProfileIcon";

const PostNav = () => {
  return (
    <div className="flex items-center p-4 justify-between border-b-[1px] border-solid border-gray-300">
      <div className="flex items-center space-x-4">
        <ProfileIcon />
        <span>moveshop___</span>
      </div>
      <IconButtonWrapper name="cardButton" />
    </div>
  );
};

const PostIcons = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <IconButtonWrapper name="comments" />
        <IconButtonWrapper name="comments" />
        <IconButtonWrapper name="comments" />
      </div>
      <IconButtonWrapper name="bookmark" />
    </div>
  );
};

const PostContent = () => {
  return (
    <div className="flex flex-col space-y-1 py-4">
      <span>3 likes</span>
      <span>moveshop___LGAG...more</span>
      <span className="text-xs text-gray-500">2 DAYS AGO</span>
    </div>
  );
};

const PostComment = () => {
  const [comment, setComment] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="flex items-center p-4">
      <div className="flex space-x-2 items-center w-9/12">
        <ProfileIcon />
        <input
          className="w-[400px]"
          placeholder="Add a comment"
          name="comment"
          value={comment}
          onChange={handleChange}
        />
      </div>
      <button className="flex justify-end text-md text-sky-400 w-3/12">
        Post
      </button>
    </div>
  );
};

const Post = () => {
  return (
    <div className="relative border-[1px] border-solid border-gray-300">
      <div className="relative h-[500px] w-full">
        <PostNav />
        <Image src="/vercel.svg" layout="fill" alt="post-img" />
      </div>
      <div>
        <div className="p-4">
          <PostIcons />
          <PostContent />
        </div>
        <HorizontalLine />
        <div>
          <PostComment />
        </div>
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="space-y-4">
      {Array(20)
        .fill(0)
        .map((_, idx) => {
          return <Post key={`post-item-${idx}`} />;
        })}
    </div>
  );
};

export default Posts;
