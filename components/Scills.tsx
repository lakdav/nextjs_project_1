import Image from 'next/image';
import React from 'react';

const Scills = () => {
	return (
		<section id="scills" className="section">
			<h3 className="section-name">Scills</h3>
			<h2 className="section-title">What Can I Do</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
				<div className="scills-item">
					<Image src="/assets/skills/html.png" width={64} height={64} alt="Html" />
					<h4 className="scills-item-title">HTML</h4>
				</div>
				<div className="scills-item">
					<Image src="/assets/skills/css.png" width={64} height={64} alt="Html" />
					<h4 className="scills-item-title">CSS</h4>
				</div>
				<div className="scills-item">
					<Image src="/assets/skills/javascript.png" width={64} height={64} alt="Javascript" />
					<h4 className="scills-item-title">JS</h4>
				</div>
				<div className="scills-item">
					<Image src="/assets/skills/node.png" width={64} height={64} alt="Node.js" />
					<h4 className="scills-item-title">NODE</h4>
				</div>
				<div className="scills-item">
					<Image src="/assets/skills/react.png" width={64} height={64} alt="React.js" />
					<h4 className="scills-item-title">REACT</h4>
				</div>
				<div className="scills-item">
					<Image src="/assets/skills/nextjs.png" width={64} height={64} alt="Next.js" />
					<h4 className="scills-item-title">NEXT</h4>
				</div>
				<div className="scills-item">
					<Image src="/assets/skills/mongo.png" width={64} height={64} alt="Mongo" />
					<h4 className="scills-item-title">MONGO</h4>
				</div>
				<div className="scills-item">
					<Image src="/assets/skills/tailwind.png" width={64} height={64} alt="Tailwind" />
					<h4 className="scills-item-title">TAILWIND</h4>
				</div>
			</div>
		</section>
	);
};

export default Scills;
