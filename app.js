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


    if (req.body.result.action ==='network')
    { 
      var facebookResponse={
    "speech": "This cannot be blank",
    "messages": [
      // {
      //   "type": 0,
      //   "platform": "facebook",
      //   "speech": ""
      // },
      {
        "type": 2,
        "platform": "facebook",
        "title": "select one subcategory",
        "replies": [
          "DHCP",
          "DNS",
          "IP",
          "SUB NETWORK"
        ]
      },
      {
        "type": 0,
        "speech": "Hi !!!! this is servicenow bot how may i help you?? Please select below one option"
      }
    ]
  }
    return res.json(facebookResponse);
  
  };




   /*  if (req.body.result.action ==='network')
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
              "text": "DHCP",
              "postback": ""
            },
            {
              "text": "DNS",
              "postback": ""
            },
            {
              "text": "IP",
              "postback": ""
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
*/

  if (req.body.result.action ==='hardware')
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



if (req.body.result.action ==='software')
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
        "postback": ""
      },
      {
        "text": "OS",
        "postback": ""
      },
      {
        "text": "Software Install",
        "postback": ""
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
       if(req.body.result.action=== 'network.network-custom'){
        // =req.body.contexts.parameters.desc
        var desc1=req.body.result.contexts[0].parameters.desc;
        var severity=req.body.result.contexts[0].parameters.severity;
        firstapp.logIncident(desc1, severity,function(err,resu)
        {
          success=resu["result"]["number"];
        
          var resagent='Your incident id is generated with Incident number : '+success + ' ' +desc1;
          console.log('request are'+resagent);
           return res.json({
             speech:resagent,
             displayText: resagent,
             source:'Service now'
                     });
        });

   
      }

  });


app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
















// var Client = require('node-rest-client').Client;
 
// var client = new Client(); 
// // direct way

// var args={
//             headers:
//            { 'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
//              'cache-control': 'no-cache',
//              authorization: 'Basic MzMyMzg6YWJjMTIz',
//              'content-type': 'application/json' },
//           body:
//            { short_description: "",
//              caller_id: 'Pourab Karchaudhuri',
//              urgency: "" ,
//              comments: 'Chatbot Testing' },
//           json: true 
//         };

// var getIncident=  client.get("https://dev18442.service-now.com/api/now/v1/table/incident?number=INC0000001",args
// ,function (data, response)
//  {
//     // parsed response body as js object 
//   // console.log(JSON.stringify(response));
// })

































// var firstapp=require('./app2.js');
// var success="";


// var request = require('http');
// var express=require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var portC = process.env.PORT || 3000;
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());



//    app.post('/',function(req,res){ 

//     if (req.body.action.result ==='network')
//     {
//         var facebookResponse={

//           "speech": "",
//       "messages": [
//         {
//           "type": 1,
//           "platform": "facebook",
//           "title": "Service now",
//           "subtitle": "Service now",
//           "imageUrl": "https://assets.kpmg.com/content/dam/kpmg/images/2015/07/US-strategic-alliance-servicenow.jpg/jcr:content/renditions/cq5dam.web.1200.630.jpg",
//           "buttons": [
//             {
//               "text": "DHCP",
//               "postback": ""
//             },
//             {
//               "text": "DNS",
//               "postback": ""
//             },
//             {
//               "text": "IP",
//               "postback": ""
//             }
//           ]
//         },
//         {
//           "type": 0,
//           "speech": ""
//         }
//       ]

            
//    };
  
//     return res.json(facebookResponse);
//   }
 

    //  if(req.body.result.action=== 'createinstance'){
    //     firstapp.logIncident('Incident 56310','',function(err,res)
    //     {
    //       console.log(res["result"]["number"]);
    //       success=res["result"]["number"];
    //     });
    //     console.log('Received the request & it is:::'+JSON.stringify(req.body));

    //   var resagent='Your incident id is generated with Incident number : '+success;
    //  console.log('request are'+resagent);
    //   return res.json({
    //     speech:resagent,
    //     displayText: resagent,
    //     source:'Service now'
    //             });
    //   } 

    
   // });


// app.listen(portC, function(){
//     console.log('AGENT is running my app on  PORT: ' + portC);
// });
















// var Client = require('node-rest-client').Client;
 
// var client = new Client(); 
// // direct way

// var args={
//             headers:
//            { 'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
//              'cache-control': 'no-cache',
//              authorization: 'Basic MzMyMzg6YWJjMTIz',
//              'content-type': 'application/json' },
//           body:
//            { short_description: "",
//              caller_id: 'Pourab Karchaudhuri',
//              urgency: "" ,
//              comments: 'Chatbot Testing' },
//           json: true 
//         };

// var getIncident=  client.get("https://dev18442.service-now.com/api/now/v1/table/incident?number=INC0000001",args
// ,function (data, response)
//  {
//     // parsed response body as js object 
//   // console.log(JSON.stringify(response));
// })





