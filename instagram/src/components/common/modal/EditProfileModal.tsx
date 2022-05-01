/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import classNames from "classnames";
import { ViewportEventHandler } from "framer-motion/types/motion/features/viewport/types";
import { ChangeEvent, FC, memo, MouseEvent, useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";

const EditProfileModal: FC<{
	show: boolean;
	onClose: () => void;
	nickname: string;
	msg: string;
}> = ({ ...props }) => {
	const [inputs, setInputs] = useState({
		nickname: props.nickname,
		msg: props.msg,
	});
	const { nickname, msg } = inputs;
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("nickname", nickname);
		formData.append("msg", msg);

		const config = {
			Header: {
				"content-type": "multipart/form-data",
			},
		};

		// axios.post('url', formData, config);
	};

	return (
		<ModalContainer title="Edit profile" {...props}>
			<div className="relative flex flex-col justify-around min-h-[20vh] space-y-2">
				<form className="flex h-full flex-col items-start space-y-4">
					<label className="w-full" htmlFor="nickname">
						닉네임
					</label>
					<input
						className="w-full px-6 py-3 bg-gray-300 rounded-l"
						id="nickname"
						value={nickname}
						onChange={onChange}
					/>
					<label className="w-full" htmlFor="msg">
						상태 메시지
					</label>
					<input
						className="w-full ml-0 px-6 py-3 bg-gray-300 rounded-l"
						id="msg"
						value={msg}
						onChange={onChange}
					/>
					<button
						className="px-10 text-lg h-12 rounded-lg bg-slate-700 dark:bg-gray-500 text-slate-100 hover:bg-slate-600 focus:bg-slate-600 transition-colors bg-slate focus:shadow-outline duration-150 cursor-pointer w-full"
						type="submit"
						onClick={handleSubmit}
					>
						제출
					</button>
				</form>
			</div>
		</ModalContainer>
	);
};

export default memo(EditProfileModal);
