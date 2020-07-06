import React from "react";
import "./App.css";
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    state = {
        tasks: [
            { title: "JS", isDone: true, priority: "low" },
            { title: "HTML", isDone: false, priority: "high" },
            { title: "CSS", isDone: false, priority: "low" },
            { title: "React", isDone: true, priority: "high" },
        ],
        filterValue: "All",
    };

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: "high",
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({ tasks: newTasks });
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue,
        });
    };

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map((t) => {
            if (t !== task) {
                return t;
            } else {
                return { ...t, isDone: isDone };
            }
        });
        this.setState({ tasks: newTasks });
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask} />
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter((task) => {
                            if (this.state.filterValue === "All") {
                                return true;
                            } else if (this.state.filterValue === "Active") {
                                return task.isDone === false;
                            } else if (this.state.filterValue === "Completed") {
                                return task.isDone === true;
                            }
                        })}
                    />
                    <TodoListFooter
                        changeFilter={this.changeFilter}
                        filterValue={this.state.filterValue}
                    />
                </div>
            </div>
        );
    };
}

export default App;
