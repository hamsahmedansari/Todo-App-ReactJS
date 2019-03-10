import actionType from "../constant/constant";
const InitialState = {
  todos: []
};
export default (state = InitialState, action) => {
  switch (action.type) {
    case actionType.ADD_TODO: {
      let tempTodo = state.todos ? state.todos : [];
      tempTodo.push(action.payload);
      return {
        ...state,
        todos: tempTodo
      };
    }
    case actionType.GET_ALL_TODO: {
      let tempTodo = action.payload;
      return {
        ...state,
        todos: tempTodo
      };
    }
    case actionType.DELETE_TODO: {
      let tempTodo = state.todos.filter(
        item => item._id !== action.payload._id
      );
      return {
        ...state,
        todos: tempTodo
      };
    }
    default:
      return state;
  }
};
