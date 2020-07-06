import React from "react";
import "./App.css";

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    state = {
        error: false,
    };

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        if (newText === "") {
            this.setState({ error: true });
        } else {
            this.setState({ error: false });
        }
        this.props.addTask(newText);
    };

    onInputChange = () => {
        this.setState({ error: false });
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
                        onKeyPress={this.onKeyPressHandler}
                        onChange={this.onInputChange}
                        className={inputClass}
                        type="text"
                        placeholder="New task name"
                        ref={this.newTaskTitleRef}
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    };
}

export default TodoListHeader;
