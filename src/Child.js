import React from 'react'
import ErrorBoundary from "./ErrorBoundary";

//This component shows how to set the State and act upon Events
class Child extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            uName: '',
            password: '',
            newName: '',
            newPassword: '',
            test: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.updateState = this.updateState.bind(this);

    }

    updateState(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick(){
        var temp = this.state.uName.toString()
        console.log(this.state.uName.toString())
        console.log(temp)
        if(temp === "Hen"){
            return(
                <div>
                    <ErrorBoundary/>
                </div>
            )
        }

    }
    render(){
        if(this.state.newName){
            return <ErrorBoundary/>
        }
           else {
            return (
                <div>
                    <form>
                        <hr />
                        <h6>Child</h6>
                        <label> Name: </label>
                        <input type="text" name='uName' value = {this.state.uName} onChange={this.updateState}  />
                        <br /><br />
                        <label>Pass: </label>
                        <input type="text" name='password' value = {this.state.password} onChange={this.updateState}  />
                        <br /><br />
                        <input type="button" onClick={this.handleClick} value="Submit" />
                        <hr />
                        <h3>{this.state.newName} </h3>
                    </form>
                      </div>
            );
        }
    }

};

export default Child
