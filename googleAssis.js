
const ActionsSdkApp = require('actions-on-google').DialogflowApp;
const app=new ActionsSdkApp({request:req,response:res});

var richresponse=function richresponse(req,res)
{
  var displayText=app.buildRichResponse()
  .addSimpleResponse({speech: 'Please select option from',
  displayText: 'This is a display text'});
  app.ask();

}

module.exports.richresponse=richresponse;

