import { GET_USERS } from '../types'

const defaultState = {
	users: JSON.parse(localStorage.getItem('users')) || []
}

export default function Users(state = defaultState, action) {
	switch (action.type) {
		case GET_USERS:
			const users = action.payload.splice(0, 10)
			localStorage.setItem('users', JSON.stringify(users));
			state.users = users

			return {
				...state,
				users: users
			}

		default:
			return state;
	}
}
