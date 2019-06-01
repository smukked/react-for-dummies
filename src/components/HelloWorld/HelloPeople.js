import React from 'react';
import './HelloWorld.css';

export class HelloPeople extends React.Component {

    index = 0;

    constructor(props) {
        super(props);
        this.state = {
            name: "People!"
        };

        if (this.props.people) {
            this.setName = this.setName.bind(this);
        }
    }

    setName() {
        if (this.index === this.props.people.length) {
            this.index = 0;
        }

        this.setState({ name: this.props.people[this.index] });
        this.index = this.index + 1;
    }

    render() {
        return <React.Fragment>
            <h1 className="helloworld helloworld--greeting">Hello, {this.state.name}</h1>
            <button className={this.props.people ? "helloworld helloworld--button" : "helloworld helloworld--button-disabled"} disabled={!this.props.people} onClick={this.setName}>Say Hello!</button>
        </React.Fragment>;
    }
}