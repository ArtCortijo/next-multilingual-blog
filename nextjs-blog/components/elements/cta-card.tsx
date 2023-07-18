import Image from "next/image";

const CTACard = () => {
	return (
		<div className="relative rounded-md bg-slate-100 px-6 py-10 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/30 z-10" />
			<Image
				fill
				className="object-center object-cover"
				src="https://images.unsplash.com/photo-1448906654166-444d494666b3?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwyNXx8bG9uZG9ufGVufDB8fHx8MTY3MDI3MzM3Ng&ixlib=rb-4.0.3"
				alt="CTA Card Image"
			/>
			<div className="relative z-20">
				<div className="text-lg font-medium">#exploretheworld</div>
				<h3 className="text-4xl font-semibold">Explore The World</h3>
				<p className="mt-2 text-lg max-w-lg">
					Explore the workd with me! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Culpa voluptatem beatae quaerat, veniam corporis
					iusto quasi commodi doloremque fugiat!
				</p>

				<form className="mt-6 flex items-center gap-2 w-full">
					<input
						placeholder="Email"
						className="w-full md:w-auto bg-white text-base rounded-md px-4 py-2 outline-none focus:ring-2 ring-neutral-600 placeholder:text-sm"
					/>
					<button
						className="px-4 py-2 whitespace-nowrap rounded-md bg-neutral-900 text-neutral-200"
						type="submit"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default CTACard;
