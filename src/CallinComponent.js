import React from "react";
import propper from './PropertiesFile'

export default class CallinComponent extends React.Component{
    render(){
        return(
            <p className="App-intro">
                {/* To get started, edit <code>src/App.js</code> and save to reload.*/}
                <ul>
                    {
                        propper.all().map(p => (
                            <h4 key={p.errorID}>
                                <h5>{p.errorMessage}: {p.description}</h5>
                            </h4>
                        ))
                   }

                }
            </ul>
            </p>
        )
    }
}
