import React from 'react';
import Todo from './Todo';

//another way of getting props using curly braces
const TodoList = ({ todos, setTodos, status, filteredTodos, setFileteredTodos }) => {
	React.useEffect(
		() => {
			switch (status) {
				case 'completed':
					setFileteredTodos(todos.filter((el) => el.completed));
					break;
				case 'uncompleted':
					setFileteredTodos(todos.filter((el) => !el.completed));
					break;
				case 'all':
					setFileteredTodos(todos);
					break;
				default:
					setFileteredTodos(todos);
					break;
			}
		},
		[ todos, status ]
	);
	const todoEl = filteredTodos.map((todo) => {
		if (todo.text !== '') {
			return <Todo key={todo.id} todoItem={todo} todos={todos} setTodos={setTodos} />;
		} else {
			return false;
		}
	});
	return (
		<div className="todo-container">
			<ul className="todo-list">{todoEl}</ul>
		</div>
	);
};
export default TodoList;
