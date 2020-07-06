import React from "react";
import "./App.css";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm ";

class App extends React.Component {
    state = {
        tasks: [],
        filterValue: "All",
        nextTaskId: 0,
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
            tasks: [],
            filterValue: "All",
            nextTaskId: 0,
        };

        let stateAsString = localStorage.getItem("our-state-" + this.props.id);
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state);
    };

    addTask = (newText) => {
        let newTask = {
            id: this.state.nextTaskId,
            title: newText,
            isDone: false,
            priority: "high",
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState(
            { tasks: newTasks, nextTaskId: this.state.nextTaskId + 1 },
            () => {
                this.saveState();
            }
        );
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue,
        });
    };

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map((task) => {
            if (task.id !== taskId) {
                return task;
            } else {
                return { ...task, ...obj };
            }
        });
        this.setState({ tasks: newTasks });
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, { isDone: isDone });
    };

    changeTaskTitle = (taskId, title) => {
        this.changeTask(taskId, { title: title });
    };

    render = () => {
        return (
            <div className="todoList">
                <div className="todoList-header">
                    <TodoListTitle title={this.props.title} />
                    <AddNewItemForm addItem={this.addItem} />
                </div>
                <TodoListTasks
                    changeTaskTitle={this.changeTaskTitle}
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
        );
    };
}

export default App;
