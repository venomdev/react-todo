import React, { useState } from "react";
import "./App.css";

type ToDoList = string[];

function App() {
	const [toDo, setToDo] = useState("");
	const [toDoList, setToDoList] = useState<ToDoList>([]);

	return (
		<div className="App">
			<h1>React To Do App</h1>
			<div className="input-wrapper">
				<input
					type="text"
					name="todo"
					placeholder="Create a new todo"
					onChange={(e) => {
						setToDo(e.target.value);
					}}
					value={toDo}
				/>
				<button className="add-button" onClick={addToDo}>
					Add
				</button>
				{toDoList?.length > 0 ? (
					<ul className="todo-list">
						{toDoList.map((item, index) => (
							<li key={index}>
								<div className="todo">
									{item}
									<button
										className="delete-button"
										onClick={() => deleteToDo(item)}
									>
										Delete
									</button>
								</div>
							</li>
						))}
					</ul>
				) : (
					<div className="empty">
						<p>No task found</p>
					</div>
				)}
			</div>
		</div>
	);

	function addToDo() {
		if (toDo !== "") {
			console.info("add:", toDo);
			setToDoList([...toDoList, toDo]);
			setToDo("");
		}
	}

	function deleteToDo(text: string) {
		const newToDos = toDoList.filter((todo) => {
			return todo != text;
		});
		setToDoList(newToDos);
	}
}

export default App;
