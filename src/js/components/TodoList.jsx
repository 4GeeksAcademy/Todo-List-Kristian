import React, { useState } from "react";

const TodoList = () => {
	const [task, setTask] = useState("");
	
	return (
		<form className="m-4">
			<h1 className="d-flex justify-content-center text-secondary">Todo List!</h1>
			<div className="row mb-3">
				<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
				<div className="col-sm-10">
					<input type="email" className="form-control" id="inputEmail3"/>
				</div>
			</div>
			<div className="row mb-3">
				<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
				<div className="col-sm-10">
					<input type="password" className="form-control" id="inputPassword3"/>
				</div>
			</div>
			<button type="submit" className="btn btn-primary">Sign in</button>
		</form>
	);
};

export default TodoList;