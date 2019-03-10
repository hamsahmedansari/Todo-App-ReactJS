import http from "./http";
import config from "../config.json";

export const save = async Todo => {
  //   if (Todo._id) {
  //     const body = { ...Todo };
  //     delete body._id;
  //     return await http.put(config.userEndPoint + `/todo/${Todo._id}`, body);
  //   }
  return await http.post(config.userEndPoint + `/todo`, Todo);
};

export const getAll = async () => {
  return await http.get(config.userEndPoint + `/todo`);
};

export const deleteTodos = async ({ _id }) => {
  return await http.delete(config.userEndPoint + `/todo/${_id}`);
};
