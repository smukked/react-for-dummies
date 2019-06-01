import React from 'react';
import './HelloWorld.css';

export function Hello(props) {
    return (<h1 className="helloworld helloworld--greeting">Hello, {props.name}</h1>);
}