import { getRandomInt } from "@src/utils/number";
import { FC, memo } from "react";
import Image from "./ImageWrapper";

type iconSize = "small" | "medium" | "large" | "xlarge";

type iconShape = {
	iconSize?: iconSize;
	storyBorder?: boolean;
	profileBorder?: boolean;
	image?: string;
};

const iconSizeSelector: {
	[keys in iconSize]: { width: number; height: number };
} = {
	small: {
		width: 25,
		height: 25,
	},
	medium: {
		width: 35,
		height: 35,
	},
	large: {
		width: 60,
		height: 60,
	},
	xlarge: {
		width: 145,
		height: 145,
	},
};

const ProfileIcon: FC<iconShape> = ({
	iconSize = "medium",
	storyBorder,
	profileBorder = false,
	image,
}) => {
	const randomId = getRandomInt(1, 70);
	const size = iconSizeSelector[iconSize];
	const profileImage = image
		? image
		: `https://i.pravatar.cc/150?img=${randomId}`;

	return (
		<span
			className={
				storyBorder
					? "rounded-full p-1 m-0 bg-gradient-to-r from-indigo-500 dark:from-indigo-700 via-purple-500 dark:via-purple-700 to-pink-500 dark:to-pink-700"
					: ""
			}
		>
			<div className="flex items-center border-solid border-white border-[1px] rounded-full hover:cursor-pointer">
				<Image
					className="rounded-full border-sm"
					width={size.width}
					height={size.height}
					layout="fixed"
					src={profileImage}
					alt="profile"
				/>
			</div>
		</span>
	);
};

export default memo(ProfileIcon);
