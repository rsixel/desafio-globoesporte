import React, { Component } from 'react';

//Resources
import header from './svg/logo-ge.svg';
import './TodoApp.css';

// Componentes
import {TodoForm} from './TodoForm'
import {TodoList} from './TodoList'


class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: props.todoItems};
  }
  addItem(todoItem) {
    let todoItems = this.getState()['todoItems'];

    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    let todoItems = this.getState()['todoItems'];

    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    let todoItems = this.getState()['todoItems'];
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="TodoApp" className="main">
        <TodoHeader />
        
        <body className="body" >
            <TodoForm addItem={this.addItem} />
        </body>

        <div className="todolist">
          <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        </div>
      </div>
    );
  }
}

class TodoHeader extends Component {
  render() {
    return (
        <header className="header">
          <img src={header} className="logo" alt="header" />
          <div className="hoje" />
        </header>
    );
  }
}


export default TodoApp;