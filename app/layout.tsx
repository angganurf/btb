import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const maladroit = localFont({
	src: [
		{
			path: "../public/Maladorit-bold.otf",
			weight: "700",
			style: "bold",
		},
		{
			path: "../public/Maladorit-normal.otf",
			weight: "400",
			style: "normal",
		},
	],
});

export const metadata: Metadata = {
	title: "$BTB | Bull to Billion",
	description: "Bull to Billion",
	icons: "../public/logo.png",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={maladroit.className}>{children}</body>
		</html>
	);
}
