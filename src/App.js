import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm ";

class App extends React.Component {
    state = {
        todoLists: [],
        nextTodoListId: 0,
    };

    addTodoList = (title) => {
        let newTodoList = {
            id: this.state.nextTodoListId,
            title: title,
        };
        let newTodoLists = [...this.state.todoLists, newTodoList];
        this.setState(
            {
                todoLists: newTodoLists,
                nextTodoListId: this.state.nextTodoListId + 1,
            },
            () => {
                this.saveState();
            }
        );
    };

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state-" + this.props.id, stateAsString);
    };

    restoreState = () => {
        let state = {
            todoLists: [],
            nextTodoListId: 0,
        };
        let stateAsString = localStorage.getItem("our-state-" + this.props.id);
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state);
    };

    render = () => {
        let todoLists = this.state.todoLists.map((tl) => (
            <TodoList id={tl.id} title={tl.title} />
        ));
        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList} />
                </div>
                <div className="App">{todoLists}</div>
            </>
        );
    };
}

export default App;
