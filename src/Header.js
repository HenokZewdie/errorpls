import React from "react";
import ErrorBoundary from "./ErrorBoundary";



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
            this.setState(({counter}) => ({
                counter: counter + 1
            }));
/*      same code
        var temp = this.state.counter
        this.setState({counter: temp + 1});*/
    }

    render() {
        if (this.state.counter === 3) {
            return(
                /*The argument must passed from here.... TODO*/
                /* Where the error has occurred, It will redirected to the error Boundary component */
        <ErrorBoundary />
            )
        }
        return <h4 onClick={this.handleClick}>Header {this.state.counter}</h4>;
    }
}
export default Header