import { ADD_TASK, CHANGE_TASK, DELETE_TASK } from '../types';

const defaultState = {
	tasks: JSON.parse(localStorage.getItem('tasks')) || []
}

export default function ToDo(state = defaultState, action) {
	switch (action.type) {
		case ADD_TASK:
			const addedPeopleInArray = [...state.tasks, action.payload];

			localStorage.setItem('tasks', JSON.stringify(addedPeopleInArray));

			return {
				...state,
				tasks: addedPeopleInArray
			}

		case CHANGE_TASK:
			const updatedCheckedArray = state.tasks.reduce((acc, item) => {
				if (item.id === action.payload) {
					item.checked = !item.checked;
				}

				return [...acc, item];
			}, []);

			localStorage.setItem('tasks', JSON.stringify(updatedCheckedArray));

			return {
				...state,
				tasks: updatedCheckedArray
			}

		case DELETE_TASK:
			const arrayWithoutDeletedPeople = state.tasks.filter(el => el.id !== action.payload);

			localStorage.setItem('tasks', JSON.stringify(arrayWithoutDeletedPeople));

			return {
				...state,
				tasks: arrayWithoutDeletedPeople
			}

		default:
			return state;
	}
}
