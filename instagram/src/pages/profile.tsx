import { HorizontalLine } from "@src/components/common";
import Image from "@src/components/common/ImageWrapper";
import React from "react";
import ProfileIcon from "@src/components/common/ProfileIcon";

type Props = {};

const profile = (props: Props) => {
	return (
		<div>
			<div className="flex py-10 w-full">
				<div className="w-1/3 mr-3">
					<ProfileIcon iconSize="xlarge" />
				</div>
				<section className="w-2/3">
					<div className="flex w-full gap-x-3 mb-4">
						<h3 className="text-3xl">nickname</h3>
						<button className="bg-white text-gray-800 font-semibold py-0.5 px-1 border border-gray-300 rounded">
							프로필편집
						</button>
					</div>
					<ul className="flex w-full gap-x-7 mb-4">
						<li>
							게시물 <span className="font-semibold">1</span>
						</li>
						<li>
							팔로워 <span className="font-semibold">100</span>
						</li>
						<li>
							팔로우 <span className="font-semibold">150</span>
						</li>
					</ul>
					<div>
						<span className="font-semibold">이름</span>
						<div>자기소개</div>
					</div>
				</section>
			</div>
			<HorizontalLine />
			<div className="grid grid-cols-3 gap-6 py-10 w-full">
				<div className="relative h-[256px] hover:bg-gray-200 cursor-pointer">
					<Image src="/vercel.svg" layout="fill" alt="" />
				</div>
				<div className="relative h-[256px] hover:bg-gray-200 cursor-pointer">
					<Image src="/vercel.svg" layout="fill" alt="" />
				</div>
				<div className="relative h-[256px] hover:bg-gray-200 cursor-pointer">
					<Image src="/vercel.svg" layout="fill" alt="" />
				</div>
				<div className="relative h-[256px] hover:bg-gray-200 cursor-pointer">
					<Image src="/vercel.svg" layout="fill" alt="" />
				</div>
			</div>
		</div>
	);
};

export default profile;
