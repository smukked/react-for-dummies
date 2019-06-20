import React from 'react';
import './Hello.css';

export function Hello(props) {
    return (<h1 className="hello hello--greeting">Hello, {props.title} {props.name}</h1>);
}