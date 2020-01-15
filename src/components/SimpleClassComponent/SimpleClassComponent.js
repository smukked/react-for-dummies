import React, { Component } from 'react'

export default class SimpleClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: "I am loading"
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                loaded: "I am loaded!"
            })
        }, 1000)
    }

    render() {
        return (
            <div>{this.state.loaded}</div>
        )
    }
}
