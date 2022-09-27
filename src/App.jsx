import './styles.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import '@animxyz/core';
import { XyzTransition } from '@animxyz/react';

export default function App() {
	return (
		<XyzTransition appear duration="auto">
			<div className="page-wrap">
				<Header />
				<Body />
				<Footer />
			</div>
		</XyzTransition>
	);
}
