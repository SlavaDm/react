import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import Link from './Link/Link';

function Header() {
	const links = [
		{ text: 'ToDo', path: '/react/toDo' },
		{ text: 'GetUsers', path: '/react/getUsers' }
	];

	return (
		<header className={s.header} >
			<div className={s.wrapper} >
				<div className={s.header__logo} >
					<NavLink className={s.link} to='/' >
						<img src='https://uploads-ssl.webflow.com/5aaf70f0e8d43c7a71300daa/5aaf70f0e8d43c4f8a300ef2_autodesk-p-800.png' alt='' />
						<div>
							Logo
						</div>
					</NavLink>
				</div >
				<div className={s.header__row} >
					{links.map(el => {
						return <Link text={el.text} path={el.path} />
					})}
				</div >
			</div >
		</header >
	);
}

export default Header;
