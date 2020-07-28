import React, {Component} from 'react';
import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemsStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

export default class App extends Component {
    maxId = 100;
    state = {
        todoData : [
            {label: 'Drink Coffee', id: 0},
            {label : 'Make Awesome App', id: 1},
            {label : 'Have a lunch', id: 2}
        ]
    } ;
    deleteItem = (id) => {
       this.setState(({todoData}) => {
           const idx = todoData.findIndex((el) => el.id === id);
           const newArray = [
                ...todoData.splice(0,idx),
                ...todoData.splice(idx+1)
            ];

           return {
               todoData: newArray
            };
       });
    };
    addItem = (id) => {
      const newItem = {
          label: 'text',
          id: this.maxId++,
      };
    this.setState(({todoData}) => {
        const newArray = [
            ...todoData,
            newItem
        ];
        return {
            todoData: newArray
        }
    })};

    render() {
        return (
            <div className="todo-app">
        <AppHeader todo={1} done={3}/>
        <div className='top-panel d-flex'>
            <SearchPanel/>
            <ItemsStatusFilter/>
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}/>
        <ItemAddForm onItemAdded={this.addItem}/>
    </div>)
}
};
