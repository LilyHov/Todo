import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';



const App = () => {
    const todoData = [
        { label: 'Drink Coffee', id: 0},
        {label : 'Make Awesome App', important: true, id: 1},
        {label : 'Have a lunch', id: 2}
    ];

    return (
        <>
        <AppHeader/>
        <SearchPanel/>
        <TodoList todos={todoData}/>
        </>
    )
};


ReactDOM.render(<App />,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
