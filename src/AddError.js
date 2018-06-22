
import React, { Component } from 'react'
export  default  class AddError extends Component {
    constructor (props) {
        super(props)
        this.state = {
                       hasError: false,
                       cause: null, /* The error cause, */
                       errorId: null, /*Unique Identifier of the error*/
                       contextId: null, /*unique identifier of the error WHERE the error occurred*/
                       errorType: null, /*what made the error caused, erroneous/noise input to the application,
                                          an external service that failed, or an internal error
                                          Who do we have to notify.. End user, Developer.....*/
                       severity: null, /* severity of the error */
                       errorDescription: null, /**/
                       errorCorrection: null /*Description of how the error can be corrected*/
                    }
    }

/*    addError (e) {
        this.setState
        ({
            hasError: true,
            cause: "LoadingTakesMoreThan",
            errorId: "ChatNotFound",
            errorType: "ERROR_TYPE_CLIENT",



        })
    }*/
    render () {
        this.setState
        ({
            hasError: true,
            cause: "LoadingTakesMoreThan",
            errorId: "ChatNotFound",
            errorType: "ERROR_TYPE_CLIENT",

        })
            return(
                <div>

                </div>
            )
    }
}