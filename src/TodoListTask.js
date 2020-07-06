import React from "react";
import "./App.css";

class TodoListTask extends React.Component {
    onIsDoneChanged = (event) => {
        let isDone = event.currentTarget.checked;
        let task = this.props.task;
        this.props.changeStatus(task, isDone);
    };

    someClass =
        this.props.task.isDone === true
            ? "todoList-task done"
            : "todoList-task";

    render = () => {
        return (
            <div className={this.someClass}>
                <input
                    type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged}
                />
                <span>
                    <b>{this.props.task.title}</b>,{" "}
                </span>
                <span>priority: {this.props.task.priority}</span>
            </div>
        );
    };
}

export default TodoListTask;
