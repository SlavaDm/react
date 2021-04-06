import { GET_USERS } from '../types';
const axios = require('axios');

export const fetchUsers = () => {
	return dispatch => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => {
				dispatch(getUsers(res.data));
			});
	};
};

const getUsers = users => ({
	type: GET_USERS,
	payload: [...users]
});
