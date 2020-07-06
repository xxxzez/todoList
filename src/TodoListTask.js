import React from "react";
import "./App.css";

class TodoListTask extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode = () => {
        if (this.state.editMode === false) {
            this.setState({ editMode: true });
        }
    };

    deactivateEditMode = () => {
        if (this.state.editMode === true) {
            this.setState({ editMode: false });
        }
    };

    onIsDoneChanged = (event) => {
        let isDone = event.currentTarget.checked;
        let task = this.props.task.id;
        this.props.changeStatus(task, isDone);
    };

    onTitleChanged = (event) => {
        let title = event.currentTarget.value;
        let taskId = this.props.task.id;
        this.props.changeTaskTitle(taskId, title);
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

                {this.state.editMode ? (
                    <input
                        autoFocus={true}
                        value={this.props.task.title}
                        onBlur={this.deactivateEditMode}
                        onChange={this.onTitleChanged}
                    />
                ) : (
                    <span onClick={this.activateEditMode}>
                        id: {this.props.task.id} -<b>{this.props.task.title}</b>
                        , priority: {this.props.task.priority}
                    </span>
                )}
            </div>
        );
    };
}

export default TodoListTask;
