/*This is the sample property file which has a list of error messages that needs to be accessed by all components*/
const PropertiesFile = {
    msg: [
        {errorID: 1, errorMessage: "Empty fields", description: "Please enter your first name.", interestedParty: "End User" },
        {errorID: 2, errorMessage: "Miss match", description: "Email does not match", interestedParty: "End User"},
        {errorID: 3, errorMessage: "Miss the requirement", description: "The 5-digit ZIP code you enter should include only numbers.", interestedParty: "Developer"},
        {errorID: 4, errorMessage: "re-register with the same email ID\n", description: "The email address you entered is already registered", interestedParty: "End User/Developer"},
        {errorID: 5, errorMessage: "Credential error", description: "Your email and/or password are incorrect. Please try again.", interestedParty: "End User"}
    ],
    all: function() { return this.msg},
    get: function(errorId) {
        const isError= p => p.number === errorId
        return this.msg.find(isError)
    }
}
export default PropertiesFile