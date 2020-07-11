const { createStore } = require("redux");

const initialState = {
    todoLists: [
        { id: 0, title: "React" },
        { id: 1, title: "incubator" },
        { id: 2, title: "Что купить" },
        { id: 3, title: "" },
        { id: 4, title: "" },
        { id: 5, title: "React" },
        { id: 6, title: "asd" },
    ],
    nextTodoListId: 7,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TODOLIST":
            return {
                ...state,
                todoLists: [...state.todoLists, action.newTodoList],
            };
        default:
    }

    console.log("reducer: ", action);
    return state;
};

const store = createStore(reducer);

export default store;
