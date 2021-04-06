import React, { useState, memo, useEffect } from 'react';
import s from './ToDo.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const ToDo = () => {
	useEffect(() => {
		document.title = 'ToDo';
	}, []);

	const dispatch = useDispatch();
	const tasks = useSelector(state => state.todo.tasks);
	const [inputText, setInputText] = useState('');

	const inputHandler = (event) => {
		setInputText(event?.target.value);
	}

	const addTask = () => {
		if (inputText?.length >= 5) {
			dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), checked: false, text: inputText } });
			setInputText('');
		} else {
			alert('The text must contain at least 5 chars');
		}
	}

	return (
		<>
			<div className={s['todo-block']}>
				<div className={s['todo-block__title']}>
					TODO List
				</div>
				<div className={s['create-task']}>
					<label htmlFor='create'>New Task: </label>
					<div className={s.input}>
						<input onChange={inputHandler} value={inputText} type='text' id='create' />
					</div>

					<button onClick={() => addTask()}><img src='./assets/img/create.png' alt='' /></button>
				</div>
				<div className={s.tasks}>
					{
						tasks.length !== 0 ? [...tasks.filter(el => el.checked === false), ...tasks.filter(el => el.checked === true)].map((el) => {
							const changeChecked = (id) => {
								dispatch({ type: 'CHANGE_TASK', payload: id })
							};

							const buttonHandler = (id) => {
								dispatch({ type: 'DELETE_TASK', payload: id })
							};

							return (
								<div className={s.task}>
									<input type='checkbox' checked={el.checked} onChange={() => { changeChecked(el.id) }} id={`check${el.id}`} />
									<label htmlFor={`check${el.id}`} className={s.task__text}>
										{el.text}
									</label>
									<button onClick={() => { buttonHandler(el.id) }}><img src='./assets/img/delete.png' alt='' /></button>
								</div>
							);
						})
							: <div className={s.nothing}>No tasks</div>}

				</div>
			</div>
		</>
	);
}

export default memo(ToDo);
