import Link from "next/link";
import Image from "next/image";
import DogsLayOut from "../DogsLayOut";
export default function SocialLink() {
	return (
		<div className="relative min-h-[43rem] bg-[#1A4027] text-white  h-full pt-16 items-center overflow-hidden px-5 flex flex-col">
			<p className="text-7xl font-bold">SOCIALS</p>
			<p className="text-3xl font-semibold">
				Join <span className="font-sans font-bold">$</span>
				{"BTB’S"} WORLD
			</p>

			<div className="flex mt-16 gap-4">
				<div className="flex mt-2 gap-4">
					<Link
						target="_blank"
						href={"https://x.com/bulltobillion?s=21"}
						className="w-20 h-20 hover:scale-110 cursor-pointer -rotate-3 bg-black flex items-center justify-center"
					>
						<Image
							className="w-16"
							src={"/x.webp"}
							width={100}
							height={100}
							alt="logo"
						/>
					</Link>
					<Link
						target="_blank"
						href={"#"}
						className="w-20 h-20 rotate-3 hover:scale-110 cursor-pointer bg-black flex items-center justify-center"
					>
						<Image
							className="w-16"
							src={"/telegram.webp"}
							width={100}
							height={100}
							alt="logo"
						/>
					</Link>
				</div>
			</div>
			<div className="flex w-full flex-col items-center">
				<div className=" max-w-[30rem] w-full mb-9 md:mb-0 md:max-w-[55.5rem] order-2 lg:order-1">
					{/* <Image
            className=" w-full "
            src={"/all-dog.jpg"}
            alt=""
            width={1920}
            height={1080}
          /> */}
				</div>
				<div className="order-1">
					<div className="flex items-center  mt-16 gap-7">
						<p className="text-5xl uppercase  lg:block hidden font-bold ">
							{/* <span className="font-sans">$</span>BTB */}
						</p>
						<div className="rotate-3 ">
							<Link
								target="_blank"
								href={"#"}
								className=" text-white md:text-3xl text-2xl bg-yellow border-4 rounded-0 animate-pulse border-black rotate[-3deg] shadow px-5 py-3 hover:scale-105 rotate[-3deg]"
							>
								dex
							</Link>
						</div>
					</div>
				</div>
			</div>
			<p className="text-3xl mt-24 font-semibold">
				<span className="font-sans font-bold">$</span>
				BTB <span className="font-sans font-bold">/</span> BULL TO BILLION
			</p>
		</div>
	);
}
