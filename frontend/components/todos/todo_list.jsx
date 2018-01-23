import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
// module.exports = () => <h3>Todo List goes here!</h3>;

const TodoList = (props) => (
  <div>
    <ul>
      {props.todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo}/>
      ))}
    </ul>
    <TodoForm receiveTodo={props.receiveTodo}/>
  </div>
);

export default TodoList;
