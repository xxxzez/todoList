import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm ";
import TodoListTitle from "./TodoListTitle";

class App extends React.Component {
    state = {
        todolists: [
            { id: 0, title: "First" },
            { id: 1, title: "Second" },
            { id: 2, title: "Third" },
            { id: 3, title: "Forth" },
        ],
    };

    addTodoList = (title) => {
        alert(title);
    };

    render = () => {
        let todoLists = this.state.todolists.map((tl) => (
            <TodoList id={tl.id} title={tl.title} />
        ));
        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList} />
                </div>
                <div className="App">{todoLists}</div>;
            </>
        );
    };
}

export default App;
