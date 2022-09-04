export default function ToDoList({
	list,
	remove,
}: {
	list: string[];
	remove: Function;
}) {
	return (
		<>
			{list?.length > 0 ? (
				<ul className="todo-list">
					{list.map((item, index) => (
						<li key={index}>
							{
								// div inside of li for proper HTML structuring
							}
							<div className="todo">
								{item}
								<button
									className="delete-button"
									onClick={() => remove(item)}
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
		</>
	);
}
