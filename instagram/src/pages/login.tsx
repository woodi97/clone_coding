import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900">
			<div className="px-10 py-8 mt-1 text-left bg-white shadow-lg dark:bg-slate-600">
				<h3 className="text-2xl font-bold text-center">
					Login to your account
				</h3>
				<form>
					<div className="mt-4">
						<div>
							<label className="dark:text-white" htmlFor="id">
								Username or email address
							</label>
							<input
								id="id"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							></input>
						</div>
						<div className="mt-4">
							<div className="flex items-baseline justify-between">
								<label className="dark:text-white" htmlFor="pw">
									Password
								</label>
								<a
									href="#"
									className="text-sm text-blue-600 hover:underline dark:text-slate-900"
								>
									Forgot password?
								</a>
							</div>
							<input
								id="pw"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							></input>
						</div>
						<button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 dark:bg-slate-800">
							Login
						</button>
					</div>
				</form>
				<div className="flex w-full items-center justify-between mt-5">
					<span>아직 회원이 아니신가요?</span>
					<a
						href=""
						className="text-sm text-blue-600 hover:underline dark:text-slate-900"
					>
						회원가입
					</a>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
