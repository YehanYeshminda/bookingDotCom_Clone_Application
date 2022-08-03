const MailList = () => {
	return (
		<div className="w-full mt-14 bg-blue-800 text-white flex flex-col items-center gap-5 p-12">
			<h1 className="text-3xl font-semibold">Save time & Money!</h1>
			<span className="span-mail-decription">
				Sign up and we'll send the best deals for you!
			</span>
			<div className="mailInputContainer">
				<input
					type="text"
					placeholder="Enter Your Email..."
					className="w-72 h-8 p-2.5 border-none mr-2.5 rounded cursor-pointer"
				/>
				<button className="h-12 bg-blue-500 text-white font-semibold border-none p-2.5 rounded cursor-pointer">
					Subscribe
				</button>
			</div>
		</div>
	);
};

export default MailList;
