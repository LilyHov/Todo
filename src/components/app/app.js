import React, {Component} from 'react';
import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemsStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

export default class App extends Component {
    maxId = 100;
    createTodoItem =(label) => {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId ++
        }
    };
    state = {
        todoData : [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
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
    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};
            const newArray = [
                ...oldItem.slice(0, idx),
                newItem,
                ...oldItem.slice(idx+1)
            ];
            return {
                todoData: newArray
            }
        });
    };

    onToggleImportant =() => {
        console.log('import')
    };

    render() {
        return (
            <div className="todo-app">
        <AppHeader todo={1} done={3}/>
        <div className='top-panel d-flex'>
            <SearchPanel/>
            <ItemsStatusFilter/>
        </div>
        <TodoList
              todos={this.state.todoData}
              onDelete={this.deleteItem}
              onToggleDone={this.onToggleDone}
              onToggleImportant={this.onToggleImportant} />
        <ItemAddForm onItemAdded={this.addItem}/>
    </div>)
}
};
