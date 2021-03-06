import React from 'react';
import {TodoListItem} from './TodoListItem'

import './TodoList.css';

export class TodoList extends React.Component {
    render () {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoListItem key={index} item={item} index={item.index} removeItem={this.props.removeItem} onToggle={this.props.onToggle} />
        );
      });
      return (
        <ul className="todolistgroup"> {items} </ul>
      );
    }
  }