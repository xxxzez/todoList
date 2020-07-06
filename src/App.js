import React from "react";
import "./App.css";
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    state = {
        tasks: [
            { id: 0, title: "JS", isDone: true, priority: "low" },
            { id: 1, title: "HTML", isDone: false, priority: "high" },
            { id: 2, title: "CSS", isDone: false, priority: "low" },
            { id: 3, title: "React", isDone: true, priority: "high" },
        ],
        filterValue: "All",
    };

    nextTaskId = this.state.tasks[this.state.tasks.length - 1].id;
    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId + 1,
            title: newText,
            isDone: false,
            priority: "high",
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({ tasks: newTasks });
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue,
        });
    };

    changeStatus = (taskId, isDone) => {
        let newTasks = this.state.tasks.map((t) => {
            if (t.id !== taskId) {
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
