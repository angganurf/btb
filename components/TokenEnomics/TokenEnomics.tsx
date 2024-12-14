import Image from "next/image";
import Link from "next/link";
export default function TokenEnomics() {
	return (
		<>
			<div className=" bg-[#1A4027] pb-0 mt-10  text-yellow-600 text-center flex flex-col items-center">
{/* 				<h2 className=" text-4xl mt-9 uppercase md:text-8xl font-bold">
					TOKENOMICS
				</h2>
				<p className="text-white text-2xl md:text-2xl max-w-[70rem] m-2 text-justify">
					<span className="break-keep">
						<span className="font-sans font-bold">50{"%"}</span>
					</span>{" "}
					Liquidity is held by the team to secure the token supply from Jeeters.
					The team will hold{" "}
					<span className="break-keep">
						<span className="font-sans font-bold">50{"%"}</span>
					</span>{" "}
					of the supply to earn royalties from Meteora. The teams chance to Rug
					is{" "}
					<span className="break-keep">
						<span className="font-sans font-bold">0{"%"}.</span>
					</span>{" "}
				</p> */}
				<div className="flex w-full mb-14 flex-col space-y-14  mt-14   space-x-7 justify-center items-center">
					<div className=" w-auto ">
						{/* <div className="w-full mb-5 px-20 text-2xl xl:text-6xl py-5 bg-yellow text-white ">
							<p>TOTAL SUPPLY</p>
							<p>
								999.999.999 <span className="font-sans font-bold">$</span>KONKO
							</p>
						</div> */}
						<div className="w-full mb-5 px-2 text-2xl xl:text-6xl py-5 bg-yellow text-white ">
							<p>Contract adress</p>
							<p className=" text-sm sm:text-xl xl:text-3xl">Ai5XtgHPiYXqQFHeYpbhAaERGFQAYH1NKxmNszHGmoon</p>
						</div>
					</div>
					<div className="flex gap-5">
						{/* <div className="animate-bounce">
							<Link
								target="_blank"
								href={
									"https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g&inputAmount=0.2&fixed=in"
								}
								className="bg-red uppercase   animate-bounce lg:mr-auto text-white py-3 px-5 text-3xl "
							>
								BUY Konko here
							</Link>
						</div> */}
					</div>
				</div>
			</div>
			<div className="flex md:flex-row flex-col w-full">
				<Image
					className="w-full md:w-[50%]"
					src={"/dog-bubble1.jpg"}
					width={1920}
					height={1080}
					alt="trading"
				/>
				<Image
					className="md:w-[50%] w-full"
					src={"/dog-bubble2.jpg"}
					width={1920}
					height={1080}
					alt="trading"
				/>
			</div>
		</>
	);
}
