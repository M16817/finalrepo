const ActionsSdkApp = require('actions-on-google').DialogflowApp;

var request = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var incident = require('./app3');
app.post('/', function (req, res) {

  if (req.body.originalRequest.source == 'facebook') {

    if (req.body.result.parameters.Category === 'Network') {
      var fbresponse = {
        "speech": "",
        "messages": [
          {
            "type": 1,
            "platform": "facebook",
            "title": "Servicenow",
            "subtitle": "Servicenow",
            "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
            "buttons": [
              {
                "text": "DHCP",
                "postback": "DHCP"
              },
              {
                "text": "DNS",
                "postback": "DNS"
              },
              {
                "text": "IP",
                "postback": "IP"
              }
            ]
          },
          {
            "type": 0,
            "speech": ""
          }
        ]

      };
      return res.json(fbresponse);
    }

    if (req.body.result.parameters.Category === 'Hardware') {
      var fbresponse = {
        "speech": "",
        "messages": [
          {
            "type": 1,
            "platform": "facebook",
            "title": "Servicenow",
            "subtitle": "Servicenow",
            "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
            "buttons": [
              {
                "text": "Monitor",
                "postback": "Monitor"
              },
              {
                "text": "Keyboard",
                "postback": "Keyboard"
              },
              {
                "text": "Mouse",
                "postback": "Mouse"
              }
            ]
          },
          {
            "type": 0,
            "speech": ""
          }
        ]
      };
      return res.json(fbresponse);
    }

    if (req.body.result.parameters.Category === 'Software') {
      var fbresponse = {
        "speech": "",
        "messages": [
          {
            "type": 1,
            "platform": "facebook",
            "title": "Servicenow",
            "subtitle": "Servicenow",
            "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
            "buttons": [
              {
                "text": "Email",
                "postback": "Email"
              },
              {
                "text": "OS",
                "postback": "OS"
              },
              {
                "text": "Mac",
                "postback": "Mac"
              }
            ]
          },
          {
            "type": 0,
            "speech": ""
          }
        ]
      };
      return res.json(fbresponse);
    }

    //Rest Api Call started

    if (req.body.result.action == "CreateIncident.CreateIncident-custom") {

      var cat = req.body.result.contexts[0].parameters.Category;
      incident.logIncident(req.body.result.parameters.desc, req.body.result.parameters.severity, cat, req.body.result.parameters.subcategory, function (err, resu) {
        var success = resu["result"]["number"];
        var resagent = "Your incident has been created with incident number:" + success + ".\nNote it down for further enquiry.";
        return res.json({
          followupEvent: {
            "name": "mainmenuevent",
            "data": {
              "incnumber": success
            }
          }
        });
      });
    }


    if (req.body.result.action == "getincident") {

      console.log("TESTING GET INCIDENT :");

      incident.statusIncident(req.body.result.parameters.incidentno, function (err, resul) {

        console.log('value of result is :::' + resul);
        var jsonparse = JSON.parse(resul);

        if (jsonparse.hasOwnProperty('result')) {
          console.log('call followup event');
          console.log('json string is ' + jsonparse);
          return res.json({
            followupEvent: {
              "name": "mainmenueventgetinc",
              "data": {
                "incstatus": jsonparse.result[0].short_description,
                "incnumber": jsonparse.result[0].number
              }
            }
          });
        }
        else {
          return res.json({
            followupEvent: {
              "name": "IncFailevent",
              "data": {
              }
            }

          });
        }
      });

    }







  }

  //GOOGLE CODE START 
  else if (req.body.originalRequest.source == 'google') {
    console.log(req.body.originalRequest.source);
    if (req.body.result.action === 'acthello') {
      console.log('testing this code');
      const googleapp = new ActionsSdkApp({ request: req, response: res });
      var showcase = googleapp.buildRichResponse()
        .addSimpleResponse({ speech: 'Trying to implement basic card', displayText: 'hi' })
        .addBasicCard(
        googleapp.buildBasicCard('basic card text basic card text basic card text')
          .setTitle('title of this card')
          .addButton('Create Incident', 'WWW.google.com')
          .setImage('', 'image alternate text')
        );
      googleapp.ask(showcase);



    }


    if (req.body.result.parameters.Category === 'Network') {
      var fbresponse = {
        "speech": "google assistant",
        "messages": [
          {
            "type": "simple_response",
            "platform": "google",
            "textToSpeech": "Select one"
          },
          {
            "type": "suggestion_chips",
            "platform": "google",
            "suggestions": [
              {
                "title": "DHCP"
                //"postback": "DHCP"
              },
              {
                "title": "DNS"
                //"postback": "DNS"
              },
              {
                "title": "IP"
                // "postback": "IP"
              }
            ]
          },
          {
            "type": 0,
            "speech": "this is service now bot"
          }
        ]

      };
      return res.json(fbresponse);
    }

    if (req.body.result.parameters.Category === 'Hardware') {
      var fbresponse = {
        "speech": "google assistant",
        "messages": [
          {
            "type": "simple_response",
            "platform": "google",
            "textToSpeech": "Select one"
          },
          {
            "type": "suggestion_chips",
            "platform": "google",
            "suggestions": [
              {
                "title": "Monitor"
                //"postback": "DHCP"
              },
              {
                "title": "Keyboard"
                //"postback": "DNS"
              },
              {
                "title": "Mouse"
                // "postback": "IP"
              }
            ]
          },
          {
            "type": 0,
            "speech": "this is service now bot"
          }
        ]
      };
      return res.json(fbresponse);
    }

    if (req.body.result.parameters.Category === 'Software') {
      var fbresponse = {
        "speech": "google assistant",
        "messages": [
          {
            "type": "simple_response",
            "platform": "google",
            "textToSpeech": "Select one"
          },
          {
            "type": "suggestion_chips",
            "platform": "google",
            "suggestions": [
              {
                "title": "Email"
                //"postback": "DHCP"
              },
              {
                "title": "OS"
                //"postback": "DNS"
              },
              {
                "title": "Mac"
                // "postback": "IP"
              }
            ]
          },
          {
            "type": 0,
            "speech": "this is service now bot"
          }
        ]
      };
      return res.json(fbresponse);
    }

    //Rest Api Call started

    if (req.body.result.action == "CreateIncident.CreateIncident-custom") {

      var cat = req.body.result.parameters.Category;
      incident.logIncident(req.body.result.parameters.desc, req.body.result.parameters.severity, cat, req.body.result.parameters.subcategory, function (err, resu) {
        var success = resu["result"]["number"];
        var resagent = "Your incident has been created with incident number:" + success + ".\nNote it down for further enquiry.";
        return res.json({
          // speech:resagent,
          // displayText: resagent,
          // source:'Service Now'
          followupEvent: {
            "name": "mainmenuevent",
            "data": {
              "incnumber": success
            }
          }
        });
      });
    }

    if (req.body.result.action == "getincident") {
      // if(/[^a-zA-Z0-9]/.test( req.body.result.parameters.incidentno ))
      // {
      incident.statusIncident(req.body.result.parameters.incidentno, function (err, resul) {
        var jsonparse = JSON.parse(resul);
        if (jsonparse.hasOwnProperty('result')) {
          console.log(jsonparse.result[0].description);
          return res.json({

            followupEvent: {
              "speech": "google assistant",
              "name": "mainmenueventgetinc",
              "data": {
                "textToSpeech": "Details are",
                "incstatus": jsonparse.result[0].description,
                "incnumber": jsonparse.result[0].number,
                "resolved_at": jsonparse.result[0].resolved_at
              }
            }
          });
        }
        else {
          return res.json({
            // speech:"This Incident number record does not exist.",
            // displayText:"This Incident number record does not exist.",
            // source:"Service Now"
            followupEvent: {
              "name": "IncFailevent",
              "data": {

              }
            }

          });

        }
      });

    }




  }

  else {

    console.log('slack', req.body.originalRequest.source);
    if (req.body.result.parameters.Category === 'Network') {
      var fbresponse = {
        "speech": "",
        "messages": [
          {
            "type": 1,
            "platform": "slack",
            "title": "Servicenow",
            "subtitle": "Servicenow",
            "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
            "buttons": [
              {
                "text": "DHCP",
                "postback": "DHCP"
              },
              {
                "text": "DNS",
                "postback": "DNS"
              },
              {
                "text": "IP",
                "postback": "IP"
              }
            ]
          },
          {
            "type": 0,
            "speech": ""
          }
        ]

      };
      return res.json(fbresponse);
    }

    if (req.body.result.parameters.Category === 'Hardware') {
      var fbresponse = {
        "speech": "",
        "messages": [
          {
            "type": 1,
            "platform": "slack",
            "title": "Servicenow",
            "subtitle": "Servicenow",
            "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
            "buttons": [
              {
                "text": "Monitor",
                "postback": "Monitor"
              },
              {
                "text": "Keyboard",
                "postback": "Keyboard"
              },
              {
                "text": "Mouse",
                "postback": "Mouse"
              }
            ]
          },
          {
            "type": 0,
            "speech": ""
          }
        ]
      };
      return res.json(fbresponse);
    }

    if (req.body.result.parameters.Category === 'Software') {
      var fbresponse = {
        "speech": "",
        "messages": [
          {
            "type": 1,
            "platform": "slack",
            "title": "Servicenow",
            "subtitle": "Servicenow",
            "imageUrl": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG",
            "buttons": [
              {
                "text": "Email",
                "postback": "Email"
              },
              {
                "text": "OS",
                "postback": "OS"
              },
              {
                "text": "Mac",
                "postback": "Mac"
              }
            ]
          },
          {
            "type": 0,
            "speech": ""
          }
        ]
      };
      return res.json(fbresponse);
    }

    //Rest Api Call started

    if (req.body.result.action == "CreateIncident.CreateIncident-custom") {

      var cat = req.body.result.contexts[0].parameters.Category;

      console.log('get value of description' + req.body.result.parameters.desc)
      console.log('print context value ', cat);
      console.log('Print parmeter value', req.body.result.Category);


      incident.logIncident(req.body.result.parameters.desc, req.body.result.parameters.severity, cat, req.body.result.parameters.subcategory, function (err, resu) {
        var success = resu["result"]["number"];
        var resagent = "Your incident has been created with incident number:" + success + ".\n Note it down for further enquiry.";
        return res.json({
          followupEvent: {
            "name": "mainmenuevent",
            "data": {
              "incnumber": success
            }
          }
        });
      });
    }

    if (req.body.result.action == "getincident") {

      console.log("TESTING GET INCIDENT :");

      incident.statusIncident(req.body.result.parameters.incidentno, function (err, resul) {

        console.log('value of result is :::' + resul);
        var jsonparse = JSON.parse(resul);

        if (jsonparse.hasOwnProperty('result')) {
          console.log('call followup event');
          console.log('json string is ' + jsonparse);
          return res.json({
            followupEvent: {
              "name": "mainmenueventgetinc",
              "data": {
                "incstatus": jsonparse.result[0].short_description,
                "incnumber": jsonparse.result[0].number
              }
            }
          });
        }
        else {
          return res.json({
            followupEvent: {
              "name": "IncFailevent",
              "data": {
              }
            }

          });
        }
      });

    }

  }

});

app.listen(portC, function () {
  console.log('AGENT is running my app on  PORT: ' + portC);
});
