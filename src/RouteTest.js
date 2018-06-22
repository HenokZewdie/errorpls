import React from 'react'
import { Route, HashRouter, NavLink} from 'react-router-dom'
import Home from "./Home";
import {Switch} from "react-router";


//The Product Component has route path and dynamic url for the detailed
export default class RouteTest extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>ReactJS using JSX</h1>
                    <ul className="header">
                        <li><NavLink to="/home">Home</NavLink></li>

                    </ul>
                    <div className="content">
                        <Route path="/home" component={Home}/>


                    </div>
                </div>
            </HashRouter>
        )
    }

}




