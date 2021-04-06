import React, { useEffect } from 'react';
import s from './Home.module.scss';

const Home = () => {
	useEffect(() => {
		document.title = 'Welcome';
	}, []);

	return (
		<div className={s.fullScreen}>
			<div>
				Welcome
			</div>
		</div>
	);
}

export default Home;
