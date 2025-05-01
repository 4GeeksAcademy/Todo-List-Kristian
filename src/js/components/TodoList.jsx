import React, { useState } from "react";

const TodoList = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	
	return (
		<div className="row d-flex justify-content-center">
		<form className="m-4 col-4" 
		onSubmit={(e) => {
			e.preventDefault();
			if (task.trim() === "") return;
			setList([...list, task]);
			setTask("");
		}}
		>
			<h1 className="d-flex justify-content-center text-secondary">Todo List!</h1>
			<div>
				<div>
					<input type="text" className="form-control" onChange={(e) => setTask(e.target.value)} />
				</div>
			</div>
			<ul className="list-group">
				{list.map((item, index) => (
					<li key={index} className="list-group-item">
						{item}
					</li>
				))}
				<li className="list-group-item">{list.length} item left</li>
			</ul>
			<button type="submit" className="btn btn-primary m-2">Send Data</button>
		</form>
		</div>
	);
};

export default TodoList;