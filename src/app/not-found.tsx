import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Page not found',
	description: 'Page not found',
};

const NotFound = () => {
	return (
		<html lang="en">
			<body>
				<div className="min-h-[80vh] flex justify-center items-center flex-col">
					<h2 className="text-4xl font-bold">404</h2>
					<p className="mt-3 ">The page could not be found</p>
					<Link  href="/" className="bg-secondary-blue px-3 py-2 text-white  rounded-lg">Return Home</Link>
				</div>
			</body>
		</html>
	);
};

export default NotFound;