import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    //change the haserror state 
    componentDidCatch(error, info){
        this.setState({hasError: true});
    }
    render() {
        if (this.state.hasError) {
            return <h1>Oops there was an error with your request</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry; 