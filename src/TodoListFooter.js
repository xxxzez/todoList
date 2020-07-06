import React from "react";

class TodoListFooter extends React.Component {
    state = {
        isHidden: false,
        onHideFiltersClick: () => {
            this.setState({ isHidden: true });
        },
        onAllFilterClick: () => {
            this.props.changeFilter("All");
        },
        onCompletedFilterClick: () => {
            this.props.changeFilter("Completed");
        },
        onActiveFilterClick: () => {
            this.props.changeFilter("Active");
        },
        onShowFiltersClick: () => {
            this.setState({ isHidden: false });
        },
    };

    render = () => {
        let classForAll =
            this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted =
            this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive =
            this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="TodoListFooter">
                {!this.state.isHidden && (
                    <div>
                        <button
                            onClick={this.state.onAllFilterClick}
                            className={classForAll}
                        >
                            All
                        </button>
                        <button
                            onClick={this.state.onCompletedFilterClick}
                            className={classForCompleted}
                        >
                            Completed
                        </button>
                        <button
                            onClick={this.state.onActiveFilterClick}
                            className={classForActive}
                        >
                            Active
                        </button>
                    </div>
                )}
                {!this.state.isHidden && (
                    <span onClick={this.state.onHideFiltersClick}>Hide</span>
                )}
                {this.state.isHidden && (
                    <span onClick={this.state.onShowFiltersClick}>Show</span>
                )}
            </div>
        );
    };
}

export default TodoListFooter;
