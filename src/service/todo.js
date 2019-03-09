import http from "./http";
import config from "../config.json";

// export const saveTodo = async Todo => {
//   if (Todo._id) {
//     const body = { ...Todo };
//     delete body._id;
//     return await http.put(config.userEndPoint + `/todo/${Todo._id}`, body);
//   }
//   return await http.post(config.userEndPoint + `/todo`, Todo);
// };
