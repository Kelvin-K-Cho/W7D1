import { combineReducers } from "redux";
import todosReducer from "./todos_reducer";

/*
const initialState = {
  entities: {
    todos: { //this is what the initial state of the whole app looks like
      1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
      },
      2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
      },
    },
    cookies: {

    }
  }
};
*/

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;

/*
  in the root reducer, we use the combine reducers function

*/
