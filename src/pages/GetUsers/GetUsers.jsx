import React, { useEffect } from 'react';
import s from './GetUsers.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../async/fetchUsers';


function GetUsers() {
	useEffect(() => {
		document.title = 'GetUsers';
	}, []);

	const dispatch = useDispatch();
	const users = useSelector(state => state.users.users);

	if (users.length === 0) {
		dispatch(fetchUsers());
	}

	return (
		<div className={s.block}>
			{users.map((el, id) => {
				return <div>{id + 1}. {el.name}</div>
			})}
		</div>
	);
}

export default GetUsers;
