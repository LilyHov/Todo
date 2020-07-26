import React from 'react';
import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemsStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";


const App = () => {
    const todoData = [
        { label: 'Drink Coffee', id: 0},
        {label : 'Make Awesome App', important: true, id: 1},
        {label : 'Have a lunch', id: 2}
    ];

    return (
        <>
            <AppHeader todo={1} done={3}/>
            <div className='top-panel d-flex'>
                <SearchPanel/>
                <ItemsStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </>
    )
};

export default App;