import React from 'react';
import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemsStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";


const App = () => {
    const todoData = [
        { label: 'Drink Coffee', id: 0},
        {label : 'Make Awesome App', id: 1},
        {label : 'Have a lunch', id: 2}
    ];

    return (
        <div className="todo-app">
            <AppHeader todo={1} done={3}/>
            <div className='top-panel d-flex'>
                <SearchPanel/>
                <ItemsStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    )
};

export default App;
