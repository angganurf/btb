"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TokenEnomics() {
	const [copySuccess, setCopySuccess] = useState(false);

	const contractAddress = "Ai5XtgHPiYXqQFHeYpbhAaERGFQAYH1NKxmNszHGmoon";

	const copyText = () => {
		navigator.clipboard.writeText(contractAddress)
			.then(() => {
				setCopySuccess(true);
				setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
			});
	};

	return (
		<>
			<div className="bg-[#1A4027] pb-0 mt-10 text-yellow-600 text-center flex flex-col items-center">
				<div className="flex w-full mb-14 flex-col space-y-14 mt-14 space-x-7 justify-center items-center">
					<div className="w-auto">
						<div className="w-full mb-5 px-2 text-2xl xl:text-6xl py-5 bg-yellow text-white ">
							<p>Contract Address</p>
							<p className="text-sm sm:text-xl xl:text-3xl">{contractAddress}</p>
							<button
								onClick={copyText}
								className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
							>
								Copy Address
							</button>
							{copySuccess && (
								<p className="text-green-300 mt-2">Address copied to clipboard!</p>
							)}
						</div>
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
