import React from "react";
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map((task) => (
            <TodoListTask
                key={Math.random()}
                task={task}
                changeStatus={this.props.changeStatus}
            />
        ));

        return <div className="TodoListTasks">{tasksElements}</div>;
    };
}

export default TodoListTasks;
