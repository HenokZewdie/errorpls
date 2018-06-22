import React, { Component } from 'react'
import './App.css'
import ErrorBoundary from "./ErrorBoundary";
import Child from "./Child";
import Header from "./Header";
import CallinComponent from "./CallinComponent";


export default class App extends Component {
    render () {
        return (
            <div className='App'>
                <h6>Parent</h6>
                <ErrorBoundary>
                    <Child />
                    <Header />
                    <CallinComponent />
                </ErrorBoundary>
            </div>
        )
    }
}
