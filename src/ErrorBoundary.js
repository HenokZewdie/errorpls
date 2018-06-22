
import React, { Component } from 'react'
import {HashRouter, NavLink, Route} from "react-router-dom";
import Home from "./Home";

export default class ErrorBoundary extends Component {
    constructor (props) {
        super(props)
        this.state = { hasError: false }
    }
    componentDidCatch (error, info) {
        this.setState({ hasError: true })
    }
    render () {
        if (this.state.hasError) {
            return(
                <div>
                    <HashRouter>
                        <div>
                            <h1>Something went wrong</h1>
                            <ul>
                                    <NavLink to="/home">Home</NavLink>
                                    <Route exact path='/home' component={Home}/>
                            </ul>
                            <div>
                        </div>
                        </div>
                    </HashRouter>
                </div>
            )
        }
        return this.props.children
    }
}