var Client = require('node-rest-client').Client;

var client = new Client();

// var args={headers:
//            { 'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
//              'cache-control': 'no-cache',
//              authorization: 'Basic MzMyMzg6YWJjMTIz',
//              'content-type': 'application/json' },
//           body:
//            { short_description: "",
//              caller_id: 'Pourab Karchaudhuri',
//              urgency: "" ,
//              comments: 'Chatbot Testing' },
//           json: true };


// var getIncident=  client.get("https://dev18442.service-now.com/api/now/v1/table/incident?number=INC0012038",args
// ,function (data, response)
//  {
//     // parsed response body as js object 

//   var obj=JSON.stringify(data);
//    console.log(obj);
//     //console.log(data);
//     // raw response 
//    // console.log(response);
// });


//code for boarding pass

//  { 
//   "facebook": {
//     "attachment": {
//       "type": "template",
//       "payload": {
//         "template_type": "airline_boardingpass",
//         "intro_message": "You are checked in.",
//         "locale": "en_US",
//         "boarding_pass": [
//           {
//             "passenger_name": "SMITH\/NICOLAS",
//             "pnr_number": "CG4X7U",
//             "seat": "74J",            
//             "logo_image_url": "https:\/\/www.example.com\/en\/logo.png",
//             "header_image_url": "https:\/\/www.example.com\/en\/fb\/header.png",
//             "qr_code": "M1SMITH\/NICOLAS  CG4X7U nawouehgawgnapwi3jfa0wfh",
//             "above_bar_code_image_url": "https:\/\/www.example.com\/en\/PLAT.png",
//             "auxiliary_fields": [
//               {
//                 "label": "Terminal",
//                 "value": "T1"
//               },
//               {
//                 "label": "Departure",
//                 "value": "30OCT 19:05"
//               }
//             ],
//             "secondary_fields": [
//               {
//                 "label": "Boarding",
//                 "value": "18:30"
//               },
//               {
//                 "label": "Gate",
//                 "value": "D57"
//               },
//               {
//                 "label": "Seat",
//                 "value": "74J"
//               },
//               {
//                 "label": "Sec.Nr.",
//                 "value": "003"
//               }
//             ],
//             "flight_info": {
//               "flight_number": "KL0642",
//               "departure_airport": {
//                 "airport_code": "JFK",
//                 "city": "New York",
//                 "terminal": "T1",
//                 "gate": "D57"
//               },
//               "arrival_airport": {
//                 "airport_code": "AMS",
//                 "city": "Amsterdam"
//               },
//               "flight_schedule": {
//                 "departure_time": "2016-01-02T19:05",
//                 "arrival_time": "2016-01-05T17:30"
//               }
//             }
//           }
//         ]
//       }
//     }
// }
// }


//generic template

// "message":{
//   "attachment":{
//     "type":"template",
//     "payload":{
//       "template_type":"generic",
//       "elements":[
//          {
//           "title":"Welcome!",
//           "image_url":"https://petersfancybrownhats.com/company_image.png",
//           "subtitle":"We have the right hat for everyone.",
//           "buttons":[
//             {
//               "type":"web_url",
//               "url":"https://petersfancybrownhats.com",
//               "title":"View Website"
//             },{
//               "type":"postback",
//               "title":"Start Chatting",
//               "payload":"DEVELOPER_DEFINED_PAYLOAD"
//             }              
//           ]      
//         }
//       ]
//     }
//   }


//list template 

var fblistresp = function fblist() {
  var resp =
    {
      "facebook": {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "list",
            "top_element_style": "compact",
            "elements": [
              {
                "title": "Classic T-Shirt Collection",
                "subtitle": "See all our colors",
                "image_url": "https://www.w3schools.com/howto/img_fjords.jpg",
                "buttons": [
                  {
                    "title": "View",
                    "type": "web_url",
                    "url": "https://www.w3schools.com/howto/img_fjords.jpg"
                  }
                ]
              },
              {
                "title": "Classic White T-Shirt",
                "subtitle": "See all our colors"
              },
              {
                "title": "Classic Blue T-Shirt",
                "image_url": "https://www.w3schools.com/howto/img_fjords.jpg",
                "subtitle": "100% Cotton, 200% Comfortable",
                "buttons": [
                  {
                    "title": "Shop Now",
                    "type": "web_url",
                    "url": "https://www.w3schools.com/howto/img_fjords.jpg"
                  }
                ]
              }
            ],
            "buttons": [
              {
                "title": "View More",
                "type": "postback",
                "payload": "payload"
              }
            ]
          }
        }
      }
    }
    return resp;
}

module.exports.fblistresp=fblistresp;







