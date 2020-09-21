import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App () {
	const [ inputText, setInputText ] = useState(''); //setInput is a function and inputText is variable
	const [ todos, setTodos ] = useState([]);
	const [ status, setStatus ] = useState('all');
	const [ filteredTodos, setFileteredTodos ] = useState([]);

	useEffect(() => getLocalTodos(), []); //Runs only once at Start
	useEffect(() => SaveLocalTodos(), [ todos ]);

	const SaveLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	};

	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			setTodos(JSON.parse(localStorage.getItem('todos')));
		}
	};

	return (
		<div className="App">
			<header>
				<h1>ASHWIN'S TO DOs'</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				status={status}
				filteredTodos={filteredTodos}
				setFileteredTodos={setFileteredTodos}
			/>
		</div>
	);
}

export default App;
