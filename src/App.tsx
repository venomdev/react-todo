import React, { useState } from "react";
import "./App.css";
import ToDoInput from "./Components/ToDoInput";
import ToDoList from "./Components/ToDoList";

type ToDoList = string[];

function App() {
	const [toDo, setToDo] = useState("");
	const [toDoList, setToDoList] = useState<ToDoList>([]);

	return (
		<div className="App">
			<h1>React To Do App</h1>
			<ToDoInput toDo={toDo} setToDo={setToDo} addToDo={addToDo} />
			<ToDoList list={toDoList} remove={deleteToDo} />
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
