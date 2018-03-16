const ActionsSdkApp = require('actions-on-google').DialogflowApp;

var fs = require('fs');
var fbtemplate=require('./fbtemplate');
var googletemplate=require('./googletemplate');
var fbrichmsg = require('./Facebookrichmsg');
var googleresp = require('./googlerichresponse');
var request = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var incident = require('./restapimethods');
var FBCALL = require('./test');

var expressSession = require('express-session');
// ********* code for facebook auth **************** // 


var redirecturi = '';

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const facebookStrategy = require('passport-facebook');
var configAuth = require('./auth.js');

var strategy = new facebookStrategy(
  {
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);


app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
passport.use(strategy);

// you can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get('/login', function (req, res) {
  console.log('login method called');
  redirecturi = req.query.redirect_uri;
  res.sendfile('Public/index1.html');
});

app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));


app.get('/fb/callback', passport.authenticate('facebook', {
}),
  function (req, res) {
    console.log(redirecturi);
    res.redirect(redirecturi + "&authorization_code=34s4f545");

  });

// ********* code for facebook auth ends here **************** //


// ********* code for google auth starts here  **************** //
//var GoogleStrategy = require('passport-google-oauth2').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({

  clientID: configAuth.googleAuth.clientID,
  clientSecret: configAuth.googleAuth.clientSecret,
  callbackURL: configAuth.googleAuth.callbackURL,

},
  function (token, refreshToken, profile, done) {
    return done(null, profile);
  }
));
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));


app.get('/ga/callback', passport.authenticate('google', {
}),
  function (req, res) {

    console.log('google callack method called');
    console.log(redirecturi);
    res.redirect(redirecturi + "&authorization_code=34s4f545");

  });


//********** Google auth code ends here ************/
var TwitterStrategy = require('passport-twitter').Strategy;

app.use(expressSession({
  secret: configAuth.twitterAuth.consumerSecret,
  resave: false,
  saveUninitialized: true
}));

passport.use(new TwitterStrategy({

  consumerKey: configAuth.twitterAuth.consumerKey,
  consumerSecret: configAuth.twitterAuth.consumerSecret,
  callbackURL: configAuth.twitterAuth.callbackURL

},
  function (token, refreshToken, profile, done) {
    return done(null, profile);
  }
));

app.get('/auth/twitter', passport.authenticate('twitter', {
  scope: ['public_profile', 'email']
}));


app.get('/twt/callback', passport.authenticate('twitter', {
}),
  function (req, res) {
    console.log(redirecturi);
    res.redirect(redirecturi + "&authorization_code=34s4f545");

  });

//**************** twitter auth code ends ere ************/

app.get('/script', function (req, res) {
  fs.readFile('script.txt', 'utf8', function (err, contents) {
    res.send(contents);
    console.log('this is content :' + contents);
    // fs.writeFileSync('logfile',contents,'UTF8');
  });
});




app.post('/first', function (req, res) {
  if (req.body.originalRequest.source == 'facebook') {
    console.log('mahesh print action :' + req.body.result.action);

    /* code for getting end user name */
    //if (req.body.result.action == 'acthello') {

    //};


    //code for fb generic template card  
    // if (req.body.result.action == 'fbgeneric') {
    //   //var fblog=JSON.stringify(fbrichmsg.fbgeneric());  
    //   var fbgen= fbrichmsg.fbgeneric();
    //   console.log(fbgen);
    //   return res.json(fbgen);
    // }

    //code for fb list template 
    
    if(req.body.result.action=='fblist'){
      var fblist=fbtemplate.fblistresp('Title','Subtitle','http://www.naturephotographers.net/kt0101-1.jpg','View','web_url','http://www.naturephotographers.net/kt0101-1.jpg');
      //console.log(fblist);
      return res.json(fblist);
    }

    if(req.body.result.action=='fbquickreplies'){
      var fbquickreplies=fbtemplate.fbquickreplies('title', 'firstreply', 'secondreply');
      return res.json(fbquickreplies);
    }

    if(req.body.result.action=="fbcard"){
      var fbcard=fbtemplate.fbcard('title','subtitle','http://www.naturephotographers.net/kt0101-1.jpg','buttontext','buttonpostback');
      return res.json(fbcard);
    }

    if(req.body.result.action=="fbcourosel"){
      var fbcourosel=fbtemplate.fbcourosel("Welcome!","https://auto.ndtvimg.com/bike-images/colors/suzuki/intruder/suzuki-intruder-glass-sparkle-black.png?v=14","This is courosel.","web_url","https://petersfancybrownhats.com","View Website");
      return res.json(fbcourosel);
    }

    if(req.body.result.action=="fbbuttons"){
      console.log('fbbutton function calling');
      var fbbuttons=fbtemplate.fbbuttons(); //("Welcome!","https://auto.ndtvimg.com/bike-images/colors/suzuki/intruder/suzuki-intruder-glass-sparkle-black.png?v=14","This is courosel.","web_url","https://petersfancybrownhats.com","View Website");
      console.log('fbbutton function called');
      return res.json(fbbuttons);
    }
    
    if(req.body.result.action=="fbsharebutton"){
      var fbsharebutton=fbtemplate.fbsharebutoon();
      return res.json(fbsharebutton);
    }

    if(req.body.result.action=="fbbuybutton"){
      var fbbuybutton=fbtemplate.fbbuybutton();
      return res.json(fbbuybutton);
    }
    
  
       

    /* check for google msg
    if (req.body.result.action=='acthello'){
      var glist=fbrichmsg.googlelist();
      return res.json(glist);

    }*/

    /*to get username of end user

    if (req.body.result.action == 'acthello') {
      FBCALL.FBCALL(function (err, res2) {
        //  console.log(res2.name);
         // var obj = JSON.parse(res2);
          result = 'Hi ' + res2.name + ' welcome to ServiceNow';
    
          return res.json({
            speech: result,
            displayText: result,
            source: ''
          });
        })
    };*/

    if (req.body.result.action == 'auth') {
      // FBCALL.FBCALL(function (err, res2) {
      //  console.log('value of res2' + JSON.parse(res2));
      // console.log(res2.name);

      // incident.userProfile(function(err,res2){
      //  var obj = JSON.parse(res2);
      //  console.log(obj);
      //  result = 'Hi ' + obj.name + ' welcome to ServiceNow';

      var fbbuttonresponse = {
        "speech": "",
        "messages": [
          {
            "type": 4,
            "platform": "facebook",
            "payload": {
              "facebook": {
                "attachment": {
                  "type": "template",
                  "payload": {
                    "template_type": "button",
                    "text": 'Please click login button',
                    "buttons": [
                      {
                        "type": "account_link",
                        "url": "https://mydemoflight.herokuapp.com/login"
                      },
                      {
                        "type": "account_unlink"
                      }
                    ]
                  }
                }
              }
            }
          }
        ]
      }
      return res.json(fbbuttonresponse);
    };

    if (req.body.result.action == 'acthello') {
      var reqvalue = req.body.result.resolvedQuery;
      //var resvalue = 'Hi...!!!! This is servicenow bot how may I help you today ??'+ '<br>' +req.body.result.fulfillment.messages[1].subtitle.buttons[0].text + '<br>'+req.body.result.fulfillment.messages[1].subtitle.buttons[1].text   ;
      console.log(reqvalue);


      // fs.appendFile('script.txt', '\n User says :' + resolvedQuery)
      fs.appendFile('script.txt', '<br>' + ' User says : ' + reqvalue + '</br>' + ' Bot says :' + 'Hi...!!!! This is servicenow bot how may I help you today ??' + '<br>' + req.body.result.fulfillment.messages[1].subtitle + '</br>' + '<br>' + req.body.result.fulfillment.messages[1].buttons[0].text + '</br>' + req.body.result.fulfillment.messages[1].buttons[1].text, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });

      //var messg=resvalue + req.body.result.fulfillment.messages[1].subtitle + req.body.result.fulfillment.messages[1].buttons[0].text +req.body.result.fulfillment.messages[1].buttons[1].text;
      //console.log('messg is'+resvalue); 

      //incident.chatLog(reqvalue, resvalue ,req.body.sessionId);

    };


    if (req.body.result.action == "incidenttype") {
      // fs.appendFile('script.html', '<br></br>' + 'User says :'+ req.body.result.resolvedQuery  + '<br>' + 'Bot says :' + '<br>' + req.body.result.fulfillment.messages[3].subtitle + '</br>' + req.body.result.fulfillment.messages[3].buttons[0].text + '<br>' + req.body.result.fulfillment.messages[3].buttons[1].text + '<br>' + req.body.result.fulfillment.messages[3].buttons[2].text + '</br>', function(err) {
      //   if (err) throw err;
      //   console.log('second conversation updated !!!!!!');
      // });

      incident.chatLog(req.body.result.resolvedQuery, req.body.result.fulfillment.messages[3].subtitle + '<br>' + req.body.result.fulfillment.messages[3].buttons[0].text + '<br>' + req.body.result.fulfillment.messages[3].buttons[1].text + '<br>' + req.body.result.fulfillment.messages[3].buttons[2].text, req.body.sessionId);

    };


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
      // fs.appendFile('script.txt',fbresponse.messages[0].buttons[0].text + '</br>' + fbresponse.messages[0].buttons[1].text + '</br>' + fbresponse.messages[0].buttons[2].text + '</br>' ,function(err){
      //   if (err) throw err;
      //   console.log('subcategories conversation updated !!!!!!');
      // })

      incident.chatLog(req.body.result.resolvedQuery, fbresponse.messages[0].buttons[0].text + '</br>' + fbresponse.messages[0].buttons[1].text + '</br>' + fbresponse.messages[0].buttons[2].text, req.body.sessionId);

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

      incident.chatLog(req.body.result.resolvedQuery, fbresponse.messages[0].buttons[0].text + '</br>' + fbresponse.messages[0].buttons[1].text + '</br>' + fbresponse.messages[0].buttons[2].text, req.body.sessionId);

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

      incident.chatLog(req.body.result.resolvedQuery, fbresponse.messages[0].buttons[0].text + '</br>' + fbresponse.messages[0].buttons[1].text + '</br>' + fbresponse.messages[0].buttons[2].text, req.body.sessionId);

      return res.json(fbresponse);

    }

    //Rest Api Call started

    // if (req.body.result.action == "CreateIncident.CreateIncident-custom") {
    if (req.body.result.action == "makeincident") {
      console.log('make incident called');
      console.log(req.body.result);
      var cat = req.body.result.contexts[0].parameters.Category;
      console.log(cat);

      incident.chatLog(req.body.result.parameters.subcategory,'Please Enter Description',req.body.sessionId);
      incident.chatLog(req.body.result.parameters.desc,'Please Enter Severity as High, low or medium',req.body.sessionId);


      incident.logIncident(req.body.result.parameters.desc, req.body.result.parameters.severity, cat, req.body.result.parameters.subcategory, function (err, resu) {
        var success = resu["result"]["number"];
        var resagent = "Your incident has been created with incident number:" + success + ".Note it down for further enquiry.";
        console.log('This is incident number :' + success)

        incident.chatLog(req.body.result.parameters.severity,resagent,req.body.sessionId);


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
    // console.log(req.body.originalRequest.source);
    // if (req.body.result.action === 'acthello') {
    //   googleresp.basicCard(req,res);
    // }

    if(req.body.result.action=='googlesuggesion'){
      console.log('call googleresponse : ');
      var googlesuggesion= googletemplate.googlesuggesion('textToSpeech','firstsuggestion','secondsuggestion','thirdsuggestion');
      return res.json(googlesuggesion);
      console.log('googleresponse : ');
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
      console.log('entire body :' + req.body.result);
      //var cat = req.body.result.contexts[0].parameters.Category;
      var cat = req.body.result.parameters.category;

      console.log('google category is :' + cat);
      incident.logIncident(req.body.result.parameters.desc, req.body.result.parameters.severity, cat, req.body.result.parameters.subcategory, function (err, resu) {
        var success = resu["result"]["number"];
        var resagent = "Your incident has been created with incident number:" + success;
        console.log('google incident number is :' + success);
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
