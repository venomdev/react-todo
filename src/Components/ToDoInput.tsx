import { MouseEventHandler } from "react";

export default function ToDoInput({
	toDo,
	setToDo,
	addToDo,
}: {
	toDo: string;
	setToDo: Function;
	addToDo: MouseEventHandler;
}) {
	return (
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
		</div>
	);
}
