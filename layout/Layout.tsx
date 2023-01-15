import React, { FC } from 'react';
import Navbar from '../components/Navbar';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
interface Props {
	children: React.ReactElement;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="min-h-screen w-full p-2">{children}</main>
		</>
	);
};

export default Layout;
