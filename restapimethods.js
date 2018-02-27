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
      url: 'EAAKeoGj4A6MBACu5rghMhKUCp5OphGrcObbeDiDGEHaZCHLy6DnAHEWqfSdGGqhlebuZBn6Kmgu6tC5pTS5nMXNX68f2tqWZCqMPkIiFCnkhcuUNWpj6ZC0YymaZBOPB9xJr1pYThZAuMxU16S5EkKwH0HNTd3ZB9BthGIQYQv5bKpNr2QAnB3DnLJc0QOMlIF2rFcTqZCdnjwZDZD'
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log("Success : " + body);
      callback(null, body);
    });
  }



} 
