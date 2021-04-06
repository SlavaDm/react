import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import Link from './Link/Link';

function Header() {
	const links = [
		{ text: 'ToDo', path: '/toDo' },
		{ text: 'GetUsers', path: '/getUsers' }
	];

	return (
		<header className={s.header} >
			<div className={s.wrapper} >
				<div className={s.header__logo} >
					<NavLink className={s.link} to='/' >
						<img src='./assets/img/logo.png' alt='' />
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