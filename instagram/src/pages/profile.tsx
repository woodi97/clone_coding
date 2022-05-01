import { HorizontalLine } from "@src/components/common";
import Image from "@src/components/common/ImageWrapper";
import React, { useState } from "react";
import ProfileIcon from "@src/components/common/ProfileIcon";
import EditProfileModal from "@src/components/common/modal/EditProfileModal";

type Props = {};

const Profile = (props: Props) => {
  const [modal, setModal] = useState(false);
  const [nickname, setName] = useState<string>("nickname");
  const [msg, setMsg] = useState<string>("자기소개 암거나");

  const handleNickname = () => {
    console.log(nickname);
    setName(nickname);
  };

  const handleMsg = () => {
    setMsg(msg);
  };

  return (
    <div>
      <div className="flex py-10 w-full">
        <div>
          <div>
            <ProfileIcon iconSize="xlarge" profileBorder />
          </div>
        </div>
        <section className="ml-20">
          <div className="flex w-full gap-x-3 mb-4">
            <h3 className="text-3xl dark:text-white">{nickname}</h3>
            <button
              onClick={() => setModal((prev) => !prev)}
              className="bg-white text-gray-800 font-semibold py-0.5 px-1 border border-gray-300 rounded"
            >
              프로필편집
            </button>
            <EditProfileModal
              show={modal}
              onClose={() => setModal((prev) => !prev)}
              nickname={nickname}
              msg={msg}
            />
          </div>
          <ul className="flex w-full gap-x-7 mb-4 items-center">
            <li>
              게시물 <span className="font-semibold">1</span>
            </li>
            <li className="mt-0">
              팔로워 <span className="font-semibold">100</span>
            </li>
            <li className="mt-0">
              팔로우 <span className="font-semibold">150</span>
            </li>
          </ul>
          <div>
            <span className="font-semibold">이름</span>
            <div>{msg}</div>
          </div>
        </section>
      </div>
      <HorizontalLine />
      <div className="grid grid-cols-3 gap-6 py-10 pt-10 w-full">
        <div className="relative h-[256px] cursor-pointer">
          <Image src="/vercel.svg" layout="fill" alt="" className="relative" />
          <div className="opacity-0 hover:opacity-20 bg-black absolute inset-0"></div>
        </div>
        <div className="relative h-[256px] cursor-pointer">
          <Image src="/vercel.svg" layout="fill" alt="" />
          <div className="opacity-0 hover:opacity-20 bg-black absolute inset-0"></div>
        </div>
        <div className="relative h-[256px] cursor-pointer">
          <Image src="/vercel.svg" layout="fill" alt="" />
          <div className="opacity-0 hover:opacity-20 bg-black absolute inset-0"></div>
        </div>
        <div className="relative h-[256px] cursor-pointer">
          <Image src="/vercel.svg" layout="fill" alt="" />
          <div className="opacity-0 hover:opacity-20 bg-black absolute inset-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
