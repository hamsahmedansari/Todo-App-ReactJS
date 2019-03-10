import actionType from "../constant/constant";
import { save, getAll } from "../../service/todo";
export function addTodo(param) {
  return async dispatch => {
    await save(param)
      .then(({ data: res }) => {
        dispatch({
          type: actionType.ADD_TODO,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
}
export function getTodos(param) {
  return async dispatch => {
    await getAll()
      .then(({ data: res }) => {
        dispatch({
          type: actionType.GET_ALL_TODO,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
}
