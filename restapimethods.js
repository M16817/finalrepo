var fs=require('fs');
var request = require("request");



module.exports = {
  'logIncident': function (desc, severity, category, subcategory, callback) {

    console.log("The Final Message Utterance to send POST as Query to Service Now");
    var options = {
      method: 'POST',
      url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
      headers:
        {
          'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
          'cache-control': 'no-cache',
          authorization: 'Basic MzMyMzg6YWJjMTIz',
          'content-type': 'application/json'
        },
      body:
        {
          short_description: desc,
          caller_id: 'Pourab Karchaudhuri',
          urgency: severity,
          category: category,
          subcategory: subcategory,
          comments: 'Chatbot Testing'
        },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log("Success : " + body);
      callback(null, body);
    });

  },
  'statusIncident': function (ticketnumber, callback) {

    console.log("The Final Message Utterance to send GET as Query to Service Now");
    var options = {
      method: 'GET',
      url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
      qs: { number: ticketnumber },

      headers:
        {
          'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
          'cache-control': 'no-cache',
          authorization: 'Basic MzMyMzg6YWJjMTIz',
          'content-type': 'application/json'
        },
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log("Success : " + body);
      callback(null, body);
    });

  },

  'userProfile': function (recid,callback) {

    console.log("User profile");
    var options = {
      method: 'GET',
      url: 'https://graph.facebook.com/me',
      qs: { PSID : recid,
         access_token : '737361746461603|CIYfW6g0Aef1u4yxdUCXM5LWMcI'}
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      callback(null, body);
    });
  },

  'chatLog' : function(usermsg,botreply,sessionId){

    console.log('User Says '+usermsg);
    console.log('Bot Says '+botreply);
    //console.log('Session '+ sessionId);
    //usermsg+=session;
  
    var data='<br>'+sessionId + '<br>' + ' User Says :' + usermsg  +'<br>Bot Says :' + botreply +'<br><br>';
  
    console.log('Chat script data '+data);
  
    fs.appendFile('script.txt',data, function(err) {
      if(err) {
          return console.log(err);
      }else{
      console.log('Chat is logged in to file');}
    });
  
  
  }


} 
