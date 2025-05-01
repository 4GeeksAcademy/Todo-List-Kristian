import React, { useState } from "react";

const TodoList = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	const handleDelete = (indexToDelete) => {
		const updatedList = list.filter((_, index) => index !== indexToDelete);
		setList(updatedList);
	}

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
				<div className="card my-personal-div">
					<input type="text" placeholder="What do you need to be done?" onChange={(e) => setTask(e.target.value)} />
					<ul>
						{list.map((item, index) => (
							<li key={index} className="my-li">
								{item} <button className="float-end kris-button" onClick={() => handleDelete(index)}>X</button>
							</li>
						))}
						<li className="my-li">{list.length} item left</li>
					</ul>
				</div>
				<button type="submit" className="btn m-2">Send Data</button>
			</form>
		</div>
	);
};

export default TodoList;