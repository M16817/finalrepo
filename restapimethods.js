import { json } from "./C:/Users/maheshr/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/body-parser";

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

  'userProfile': function (callback) {

    console.log("User profile");
    var options = {
      method: 'GET',
      url: 'https://graph.facebook.com/me',
      qs: { access_token : 'EAALWyUke73EBAEPmTecXQ6B7jB9Ex9O7POfW4oaoSRoMHpyawNM9uEiA2x489q0ZAYp7AFUvpFYBBU7glcNZAL4uWDWguoPPsF57Cjc0DxgcdJNxgBwWBLDCQ0I3LccKaH2fZC849O4Nx73jF4ARNyGnKfoMgsn9fHjfY61YoFnkxAbJQTpLuf0KgIiGprJUOPjqHdSTwZDZD'}
    ,json:true};

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      callback(null, body);
    });
  }
} 
