/*eslint-disable*/
import React from 'react';

const Todo = ({ todoItem, todos, setTodos }) => {
	const isInitialMount = React.useRef(true);

	const trashHandler = () => {
		setTodos(todos.filter((el) => el.id !== todoItem.id));
	};

	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (todoItem.id === item.id) {
					return {
						...item,
						completed : !item.completed
					};
				}
				return item;
			})
		);
	};

	React.useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			console.log(todos, 'from ue');
		}
	});
	return (
		<div className="todo">
			<li className={`todo-item ${todoItem.completed ? 'completed' : ''}`}>
				{todoItem.text}
			</li>
			<button onClick={completeHandler} className="complete-btn">
				<i className="fas fa-check" />
			</button>
			<button onClick={trashHandler} className="trash-btn">
				<i className="fas fa-trash" />
			</button>
		</div>
	);
};
export default Todo;
