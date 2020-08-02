import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/app';

fetch('https://swapi.dev/api/people/1')
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(
            res
        );
    });

ReactDOM.render(<App />,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
