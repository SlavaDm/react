import { ADD_TASK, CHANGE_TASK, DELETE_TASK } from '../types';

const defaultState = {
	tasks: JSON.parse(localStorage.getItem('tasks')) || []
}

export default function ToDo(state = defaultState, action) {
	switch (action.type) {
		case ADD_TASK:
			const addedTasks = [...state.tasks, action.payload];

			localStorage.setItem('tasks', JSON.stringify(addedTasks));

			return {
				...state,
				tasks: addedTasks
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
			const arrayWithoutDeletedTasks = state.tasks.filter(el => el.id !== action.payload);

			localStorage.setItem('tasks', JSON.stringify(arrayWithoutDeletedTasks));

			return {
				...state,
				tasks: arrayWithoutDeletedTasks
			}

		default:
			return state;
	}
}
