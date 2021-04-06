import React from 'react';
import s from '../Header.module.scss';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
	return (
		<div className={s.header__item} >
			<NavLink className={s.link} to={props.path}>{props.text}</NavLink >
		</div >
	)
}

export default Link;
