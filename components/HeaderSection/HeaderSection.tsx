import Image from "next/image";
import Link from "next/link";
import ImageSlider from "../ImageSlider";

export default function HeaderSection() {
	return (
		<div className="mx-auto text-black">
			<div className="bg-[#1d1d1d] max-h-fit md:min-h-[100vh] w-full overflow-hidden  flex flex-col items-center  relative pt-2">
				<div className="relative text-white  mb-16 lg:mb-1 text-center md:w-[600px]  w-[100vw]   ">
					<Image
						className="mx-auto rounded"
						src={"/logo.png"}
						width={150}
						height={150}
						alt="btb"
					/>
					<p className=" text-7xl md:text-[80px] text-white font-bold">
						<span className="font-sans">$</span>BTB
						<span className="text-2xl mt-2 font-semibold block">
							BULL TO BILLION
						</span>
					</p>
				</div>
				<div className="flex px-[25%] lg:mt-4 flex-col items-center">
					<div className="order-2 md:order-1 max-w-[95vw] lg:max-w-[25vw] mt-10 relative   ">
						<ImageSlider />
					</div>

					<div className="  text-white mb-5 text-center">
						<p className=" text-5xl lg:text-5xl max-w-[95vw] lg:max-w-[35vw] lg:mt-10 ml-3 mb-12 ">
							{/* <span  text-7xl ">Anita</span> is a
              Degenerate Fairy That loves to Gamble */}
							just made a meme on <span className="text-green-600">Bull </span>
							Market
						</p>

						<div className="flex w-full  flex-col items-center gap-9">
							<Link
								target="_blank"
								href={"#"}
								className="bg-yellow order-2 hover:scale-110  uppercase px-3 py-2 text-xl md:text-4xl text-white rotate-6 border-[4px] border-black"
							>
								Buy BTB
							</Link>

							<div className="flex order-1 mt-2 gap-4">
								<Link
									target="_blank"
									href={"#"}
									className="w-16 h-16 hover:scale-110 cursor-pointer -rotate-3 bg-black flex items-center justify-center"
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
									className="w-16 h-16 rotate-3 hover:scale-110 cursor-pointer bg-black flex items-center justify-center"
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
					</div>
				</div>
			</div>
		</div>
	);
}
