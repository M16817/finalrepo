
const ActionsSdkApp = require('actions-on-google').DialogflowApp;
appHandler = new ActionsSdkApp({request: req, response: res});
var xx = appHandler.buildRichResponse()
 .addSimpleResponse({speech: 'Please select option from '+contentType,
   displayText: 'Please select option from '+contentType})
 .addSuggestions(content) ;
 
appHandler.ask( xx );