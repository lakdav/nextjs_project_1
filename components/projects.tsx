import React from 'react';
import Project from './Project';

const Projects = () => {
	return (
		<section className="section">
			<h3 className="section-name">Pojects</h3>
			<h2 className="section-title">What I&apos;ve Built</h2>
			<div className="grid md:grid-cols-2 gap-4 ">
				<Project title="Property Finder" src="/assets/projects/property.jpg" projectUrl="/property" stack="React JS" />
				<Project title="Crypto App" src="/assets/projects/crypto.jpg" projectUrl="/crypto" stack="React JS" />
				<Project title="Netflix App" src="/assets/projects/netflix.jpg" projectUrl="/netflix" stack="React JS" />
				<Project title="Twitch UI" src="/assets/projects/twitch.jpg" projectUrl="/twitch" stack="Next JS" />
			</div>
		</section>
	);
};

export default Projects;
