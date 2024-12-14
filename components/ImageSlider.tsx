"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpg";
import image5 from "@/public/image5.jpg";
import image6 from "@/public/image6.jpg";
import image7 from "@/public/image7.jpg";
import image8 from "@/public/image8.jpg";
import image9 from "@/public/image10.jpg";
import image10 from "@/public/image10.jpg";
import image11 from "@/public/image11.jpg";
import image12 from "@/public/image12.jpg";
import image13 from "@/public/image13.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
interface ImageData {
	src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
	{
		src: image1,
	},
	{
		src: image2,
	},
	{
		src: image3,
	},
	{
		src: image4,
	},
	{
		src: image5,
	},
	{
		src: image6,
	},
	{
		src: image7,
	},
	{
		src: image8,
	},
	{
		src: image9,
	},
	{
		src: image10,
	},
	{
		src: image11,
	},
	{
		src: image12,
	},
	{
		src: image13,
	},
];

export default function ImageSlider(): JSX.Element {
	// State to keep track of the current image index
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// State to determine if the image is being hovered over
	const [isHovered, setIsHovered] = useState<boolean>(false);

	// Function to show the previous slide
	const prevSlide = (): void => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	// Function to show the next slide
	const nextSlide = (): void => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	// useEffect hook to handle automatic slide transition
	useEffect(() => {
		// Start interval for automatic slide change if not hovered
		if (!isHovered) {
			const interval = setInterval(() => {
				nextSlide();
			}, 3000);

			// Cleanup the interval on component unmount
			return () => {
				clearInterval(interval);
			};
		}
	}, [isHovered]);

	// Handle mouse over event
	const handleMouseOver = (): void => {
		setIsHovered(true);
	};

	// Handle mouse leave event
	const handleMouseLeave = (): void => {
		setIsHovered(false);
	};

	return (
		<div className="relative w-full mx-automt-4">
			<div
				className="relative h-[360px] mx-12 group"
				onMouseOver={handleMouseOver}
				onMouseLeave={handleMouseLeave}
			>
				<Image
					src={images[currentIndex].src}
					alt={`Slider Image ${currentIndex + 1}`}
					layout="fill"
					objectFit="cover"
					className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
				/>
			</div>
			<button
				className="absolute left-0 top-1/2 transform h-[360px] rounded-xl hover:bg-[#1a222f] mx-1 ] -translate-y-1/2  text-white p-2 group"
				onClick={prevSlide}
			>
				<ChevronLeft className="text-gray-400 group-hover:text-white" />
			</button>
			<button
				className="absolute right-0 top-1/2 transform h-[360px] rounded-xl hover:bg-[#1a222f] mx-1 ] -translate-y-1/2  text-white p-2 group"
				onClick={nextSlide}
			>
				<ChevronRight className="text-gray-400 group-hover:text-white" />
			</button>
			<div className="flex justify-center mt-4">
				{images.map((_, index) => (
					<div
						key={index}
						className={`h-1 w-10 mx-1 ${
							index === currentIndex
								? "bg-[#beff46] rounded-xl"
								: "bg-gray-300 rounded-xl"
						} transition-all duration-500 ease-in-out`}
					></div>
				))}
			</div>
		</div>
	);
}
