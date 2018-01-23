import React from 'react';
import {receiveTodo} from '../../actions/todo_actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    this.handleBodyValue = this.handleBodyValue.bind(this);
    this.handleTitleValue = this.handleTitleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleTitleValue(e){
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  }

  handleBodyValue(e){
    e.preventDefault();
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    function uniqueId() {
      return new Date().getTime();
    }
    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
    };
    this.props.receiveTodo(todo);
  }

  render() {
    return (
      <div>
        <h1>Add New Todo</h1>
        <input onChange={this.handleTitleValue}></input>
        <textarea onChange={this.handleBodyValue}></textarea>
        <button value="Done"></button>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
