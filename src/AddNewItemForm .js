import React from "react";
import "./App.css";

class AddNewItemForm extends React.Component {
    state = {
        error: false,
        title: "",
    };

    onAddItemClick = () => {
        let newText = this.state.title;
        this.setState({ title: "" });
        if (newText === "") {
            this.setState({ error: true });
        } else {
            this.setState({ error: false });
        }
        this.props.addItem(newText);
    };

    onInputChange = (event) => {
        this.setState({ error: false });
        this.setState({ title: event.currentTarget.value });
    };

    onKeyPressHandler = (event) => {
        if (event.key === "Enter") {
            this.onAddItemClick();
        }
    };

    render = () => {
        let inputClass = this.state.error === true ? "error" : "";
        return (
            <div className="todoList-newTaskForm">
                <input
                    value={this.state.title}
                    onKeyPress={this.onKeyPressHandler}
                    onChange={this.onInputChange}
                    className={inputClass}
                    type="text"
                    placeholder="New item name"
                />
                <button onClick={this.onAddItemClick}>Add</button>
            </div>
        );
    };
}

export default AddNewItemForm;
