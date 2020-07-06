import React from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends React.Component {
    state = {
        todolists: [
            { id: 0, title: "First" },
            { id: 1, title: "Second" },
            { id: 2, title: "Third" },
            { id: 3, title: "Forth" },
        ],
    };
    render = () => {
        let todoLists = this.state.todolists.map((tl) => (
            <TodoList id={tl.id} title={tl.title} />
        ));
        return (
            <>
                <div>
                    <input />
                    <button onClick={this.addTodoList}>Add</button>
                </div>
                <div className="App">{todoLists}</div>;
            </>
        );
    };
}

export default App;
