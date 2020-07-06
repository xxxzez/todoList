import React from "react";
import "./App.css";

class TodoListHeader extends React.Component {
    state = {
        error: false,
        title: "",
    };

    onAddTaskClick = () => {
        let newText = this.state.title;
        this.state.title = "";
        if (newText === "") {
            this.setState({ error: true });
        } else {
            this.setState({ error: false });
        }
        this.props.addTask(newText);
    };

    onInputChange = (event) => {
        this.setState({ error: false });
        this.setState({ title: event.currentTarget.value });
    };

    onKeyPressHandler = (event) => {
        if (event.key === "Enter") {
            this.onAddTaskClick();
        }
    };

    render = () => {
        let inputClass = this.state.error === true ? "error" : "";
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input
                        value={this.state.title}
                        onKeyPress={this.onKeyPressHandler}
                        onChange={this.onInputChange}
                        className={inputClass}
                        type="text"
                        placeholder="New task name"
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    };
}

export default TodoListHeader;
