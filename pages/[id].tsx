import Image from 'next/image';
import React from 'react';

import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/router';

const urlString: { [key: string]: string } = {
	property: '/assets/projects/property.jpg',
	crypto: '/assets/projects/crypto.jpg',
	netflix: '/assets/projects/netflix.jpg',
	twitch: '/assets/projects/twitch.jpg',
};

const Display = () => {
	const route = useRouter();
	if (!route.query.id) return null;
	return (
		<div className="section">
			<div className=" aspect-[1/.5] relative">
				<div className="absolute inset-0 bg-black/70 z-10">
					<Image className="absolute z-1" fill src={urlString[route.query.id as string] || ''} alt="/" />
				</div>

				<div className="">
					<h2 className="py-2 text-4xl tracking-wider">Some Project Name</h2>
					<h3 className="text-sm text-blue-700">React JS / Tailwind / Firebase</h3>
				</div>
			</div>
			<div className="p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<h1 className="text-3xl mb-2">Project Name</h1>
					<h2 className="text-xl text-gray-700 font-thin mb-5">Overview</h2>
					<p>
						This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an
						Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to
						view property information as well as the specific location of the property integrated with the Google Maps
						API. User authentication is available so you can signup and signin to your account with an email address in
						order to save your favorite properties. This is made possible with Zillow API.
					</p>
					<a href="https://github.com/fireclint/property-finder" target="_blank" rel="noreferrer">
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a href="https://property-finder-development.web.app/" target="_blank" rel="noreferrer">
						<button className="px-8 py-2 mt-4">Demo</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
					<div className="p-3">
						<p className="text-center font-bold pb-2 uppercase text-blue-700">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 px-4 flex items-center italic">
								<RiRadioButtonFill className="pr-1" /> React
							</p>
							<p className="text-gray-600 py-2 px-4 flex items-center italic">
								<RiRadioButtonFill className="pr-1" /> Tailwind
							</p>
							<p className="text-gray-600 py-2 px-4 flex items-center italic">
								<RiRadioButtonFill className="pr-1" /> Javascript
							</p>
							<p className="text-gray-600 py-2 px-4 flex items-center italic">
								<RiRadioButtonFill className="pr-1" /> Firebase
							</p>
							<p className="text-gray-600 py-2 px-4 flex items-center italic">
								<RiRadioButtonFill className="pr-1" /> Google API
							</p>
							<p className="text-gray-600 py-2 px-4 flex items-center italic">
								<RiRadioButtonFill className="pr-1" /> Zillow API
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="cursor-pointer italic text-2xl font-bold hover:text-blue-700 transition-colors">Back</p>
				</Link>
			</div>
		</div>
	);
};

export default Display;
