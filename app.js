var firstapp=require('./app2.js');
var success="";

var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

   app.post('/',function(req,res){ 

// if (result.body.result.action==='helloresp'){
//   console.log('this is rich message');
//    var fbresp={
//       "facebook": {
//         "attachment": {
//           "type": "",
//           "payload": {
//             "template_type": "generic",
//             "elements": [
//               {
//                 "title": "Welcome to Peters Hats",
//                 "image_url": "https://xebialabs.com/assets/files/plugins/servicenow.jpg",
//                 "subtitle": "We have got the right hat for everyone.",
//                 "default_action": {
//                   "type": "web_url",
//                   "url": "http://www.google.com",
//                   "messenger_extensions": true,
//                   "webview_height_ratio": "tall",
//                   "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
//                 },
//                 "buttons": [
//                   {
//                     "type": "web_url",
//                     "url": "http://www.google.com",
//                     "title": "View Website"
//                   },
//                   {
//                     "type": "postback",
//                     "title": "Start Chatting",
//                     "payload": "DEVELOPER_DEFINED_PAYLOAD"
//                   }
//                 ]
//               }
//             ]
//           }
//         }
//       }
//     }
//     return res.json(fbresp);
//   }




    if (req.body.result.parameters.Category ==='Network')
    { 
      console.log(req.body.originalRequest.source);
      if (req.body.originalRequest.source=="facebook")
      {        
      var facebookResponse={
    "speech": "This cannot be blank",
    "messages": [
      {
        "type": 2,
        "platform": "facebook",
        "title": "select one subcategory",
        "replies": [
          "DHCP",
          "DNS",
          "IP",
          "VPN",
          "wireless"
        ]
      },
      {
        "type": 0,
        "speech": "Hi !!!! this is servicenow bot how may i help you?? Please select below one option"
      }
    ]
  }
    return res.json(facebookResponse);
  }
  else if(req.body.originalRequest.source=="google")
  {
    var facebookResponse={
  "speech": "This cannot be blank",
  "messages": [
    {
      "type": 2,
      "platform": "facebook",
      "title": "select one subcategory",
      "replies": [
        "DHCP",
        "DNS",
        "IP",
        "VPN",
        "wireless"
      ]
    },
    {
      "type": 0,
      "speech": "Hi !!!! this is servicenow bot how may i help you?? Please select below one option"
    }
  ]
}
  return res.json(facebookResponse);
}

  };




  if (req.body.result.parameters.Categorys ==='Hardware')
  {       
    var facebookResponse={

      "speech": "",
  "messages": [
    {
      "type": 1,
      "platform": "facebook",
      "title": "Service now",
      "subtitle": "Service now",
      "imageUrl": "https://assets.kpmg.com/content/dam/kpmg/images/2015/07/US-strategic-alliance-servicenow.jpg/jcr:content/renditions/cq5dam.web.1200.630.jpg",
      "buttons": [
        {
          "text": "Mouse",
          "postback": "Mouse"
        },
        {
          "text": "Keyboard",
          "postback": "Keyboard"
        },
        {
          "text": "Monitor",
          "postback": "Monitor"
        }
      ]
    },
    {
      "type": 0,
      "speech": ""
    }
  ]

        
};

return res.json(facebookResponse);
}



if (req.body.result.parameters.Category ==='Software')
{       
  console.log('hie');
  var facebookResponse={

    "speech": "",
"messages": [
  {
    "type": 1,
    "platform": "facebook",
    "title": "Service now",
    "subtitle": "Service now",
    "imageUrl": "https://assets.kpmg.com/content/dam/kpmg/images/2015/07/US-strategic-alliance-servicenow.jpg/jcr:content/renditions/cq5dam.web.1200.630.jpg",
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
        "text": "Installation",
        "postback": "Installation"
      }
    ]
  },
  {
    "type": 0,
    "speech": ""
  }
]

      
};

return res.json(facebookResponse);
}
       if(req.body.result.action=== 'createincidentid'){
        var desc1=req.body.result.parameters.Description;
        var severity=req.body.result.parameters.severity;
        var category1=req.body.result.contexts[0].parameters.Category;
        var subcategory=req.body.result.parameters.subcategory;
        firstapp.logIncident(desc1, severity,category1,subcategory, function(err,resu)
        {
          success=resu["result"]["number"];        
          var resagent='Your incident id is generated with \n Incident number : '+success +'\n severity : ' +severity +'\n description : ' +desc1 + '\n category :' +category1 + '\n subcategory :' + subcategory;
          console.log('request are'+resagent);
           return res.json({
                followupEvent : {
                  "name" : "goodbye",
                  "data" : {
                     "Incidentno":success,
                     "Desc":desc1
                  }
                }
           });
        });
      }
       if(req.body.result.action==='searchincident'){
        // if(req.body.result.parameters.incno.includes("INC"))
         //{
         firstapp.statusIncident(req.body.result.parameters.incno,function(err,resu){     
           var jsonobj= JSON.parse(resu);
            if(jsonobj.hasOwnProperty('result'))
            {
            categorynm=jsonobj['result'][0].category;
            var fbcategoryresp={
              "speech": "This cannot be blank",
              "messages": [               
                {
                  "type": 0,
                  "speech":  "Your Selcted category is : "+ categorynm + "\n Your entered description is : " +  jsonobj['result'][0].short_description
                }
              ]
            }
              return res.json(fbcategoryresp);       
          }
          else{
            return res.json({
              followupEvent:{
                "name":"getincdetails",
                "data" : {
                  "category":"wrong input"
                }
              }
            })        
        }
         })
        } 
  });


app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});










