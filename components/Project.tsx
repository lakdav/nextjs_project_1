import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
	src: string;
	title: string;
	stack: string;
	projectUrl: string;
}

const Project: FC<Props> = ({ src, title, stack, projectUrl }) => {
	return (
		<article
			id="projects"
			className="group relative aspect-[1.4/1] z-0  bg-white rounded-lg shadow-md flex justify-center items-center"
		>
			<div className="absolute -z-10 inset-5 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
				<Image
					className="group-hover:opacity-10 transition-opacity"
					src={src}
					fill
					alt={title}
					sizes="(min-width: 768px) 40vw, 80vw"
				/>
			</div>
			<div className="hidden group-hover:block text-white text-center">
				<h2 className="text-3xl mb-2 tracking-wider">{title}</h2>
				<h3 className="text-xl mb-1 font-medium">{stack}</h3>
				<Link className="inline-block bg-white text-gray-900 font-bold py-2 px-8 rounded" href={projectUrl}>
					More Info
				</Link>
			</div>
		</article>
	);
};

export default Project;
