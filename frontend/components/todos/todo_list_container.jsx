import TodoList from "./todo_list";
import { connect } from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


/*
  connect connects the container to the store;
*/
