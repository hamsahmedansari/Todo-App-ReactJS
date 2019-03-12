import actionType from "../constant/constant";
const InitialState = {
  todos: []
};
export default (state = InitialState, action) => {
  switch (action.type) {
    case actionType.ADD_TODO: {
      let tempTodo = [...state.todos];
      tempTodo.unshift(action.payload);
      return {
        ...state,
        todos: tempTodo
      };
    }
    case actionType.GET_ALL_TODO: {
      let tempTodo = action.payload.sort((a, b) => {
        let d1 = new Date(a.date),
          d2 = new Date(b.date);
        if (d1 > d2) return -1;
        if (d1 < d2) return 1;
        return 0;
      });
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
    case actionType.CHANGE_TODO: {
      let tempTodo = [...state.todos];
      let item = tempTodo.findIndex(i => i._id === action.payload._id);
      tempTodo[item] = action.payload;

      return {
        ...state,
        todos: tempTodo
      };
    }
    default:
      return state;
  }
};
