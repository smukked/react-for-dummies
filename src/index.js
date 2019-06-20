import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/*
    Step 0.0
    HTML
*/

// <div id="root">
//   <h1 class="greeting">Hello, HTML!</h1>
// </div>



























/*
    Step 0.1
    JavaScript
*/

// const h1 = document.createElement("h1");
// h1.innerText = "Hello, JavaScript!";
// h1.className = "greeting";

// document.getElementById("root").appendChild(h1);





























/*
    Step 1.0
    React JS
*/

// const element = React.createElement(
//     'h1',
//     { className: 'greeting' },
//     'Hello, React JS!'
// );
// ReactDOM.render(element, document.getElementById('root'));





























/*
    Step 1.1
    React JSX
*/

// ReactDOM.render(
//     <h1 className="greeting">Hello, JSX!</h1>,
//     document.getElementById('root')
// );

































/*
    Step 2.0
    Component
*/

// ReactDOM.render(
//     <HelloWorld />,
//     document.getElementById('root')
// );


























/*
    Step 2.1
    Component with props
*/

// ReactDOM.render(
//     <Hello title="Mr." name="Props" />,
//     document.getElementById('root')
// );




























/*
    Step 3.0
    Simple Class Component
*/

// ReactDOM.render(
//     <SimpleClassComponent />,
//     document.getElementById('root')
// );
























/*
    Step 3.1
    Class Component
*/

// const people = ["Tom Jones", "John Travolta", "Diana Ross"];

// ReactDOM.render(
//     <HelloPeople people={people} />,
//     document.getElementById('root')
// );



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
