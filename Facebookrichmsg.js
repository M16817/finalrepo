var Client = require('node-rest-client').Client;

var client = new Client();

/*Code to get user name of end user  */ 



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

var fbgeneric = function fbgen() {
  var fbgen =
    {
      "speech": "",
      "messages": [
        {
          "platform": "facebook",
          "payload": {
            "facebook": {
              "attachment": {
                "type": "template",
                "payload": {
                  "template_type": "generic",
                  "elements": [
                    {
                      "title": "Smurfs: The Lost Village (2017)",
                      "image_url": "https://www.moovrika.com/ext/makeimg.php?tbl=movies&id=15666&img=1&type=image&movie=Smurfs+The+Lost+Village&fs=400",
                      "subtitle": "Smurfette attempts to find her purpose in the village. When she encounters a creature in the Forbidden Forest who drops a mysterious map, she sets off with her friends Brainy, Clumsy, and Hefty on an adventure to find the Lost Village before the evil wizard Gargamel does.",
                      "default_action": {
                        "type": "web_url",
                        "url": "https://www.moovrika.com/m/15666",
                        "webview_height_ratio": "tall"
                      },
                      "buttons": [
                        {
                          "title": "more info",
                          "type": "web_url",
                          "url": "https://www.moovrika.com/m/4082",
                          "webview_height_ratio": "tall"
                        },
                        {
                          "title": "View trailer",
                          "type": "web_url",
                          "url": "https://www.moovrika.com/m/4082",
                          "webview_height_ratio": "tall"
                        }
                      ]
                    },
                    {
                      "title": "Resident Evil: The Final Chapter (2017)",
                      "image_url": "https://www.moovrika.com/ext/makeimg.php?tbl=movies&id=4167&img=1&type=image&movie=Resident+Evil+The+Final+Chapter&fs=400",
                      "subtitle": "Resident Evil: The Final Chapter is an upcoming science fiction action horror film written and directed by Paul W. S. Anderson. It is the sequel to Resident Evil: Retribution (2012), and will be the sixth and final installment in the Resident Evil film series, which is very loosely based on the Capcom survival horror video game series Resident Evil.",
                      "default_action": {
                        "type": "web_url",
                        "url": "https://www.moovrika.com/m/4167",
                        "webview_height_ratio": "tall"
                      },
                      "buttons": [
                        {
                          "title": "more info",
                          "type": "web_url",
                          "url": "https://www.moovrika.com/m/4082",
                          "webview_height_ratio": "tall"
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    };
  return fbgen;
}
module.exports.fbgeneric = fbgeneric;


//list template 

var fblistresp = function fblist() {
  var resp =
    {
      "messages": [
        {
          "type": 4,
          "platform": "facebook",
          "payload": {
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
                      "image_url": "https://peterssendreceiveapp.ngrok.io/img/collection.png",
                      "buttons": [
                        {
                          "title": "View",
                          "type": "web_url",
                          "url": "https://peterssendreceiveapp.ngrok.io/collection"
                        }
                      ]
                    },
                    {
                      "title": "Classic White T-Shirt",
                      "subtitle": "See all our colors",
                      "image_url": "https://peterssendreceiveapp.ngrok.io/img/collection.png",
                      "buttons": [
                        {
                          "title": "View",
                          "type": "web_url",
                          "url": "https://peterssendreceiveapp.ngrok.io/collection"
                        }
                      ]
                    },
                    {
                      "title": "Classic Blue T-Shirt",
                      "image_url": "https://peterssendreceiveapp.ngrok.io/img/blue-t-shirt.png",
                      "subtitle": "100% Cotton, 200% Comfortable",
                      "buttons": [
                        {
                          "title": "Shop Now",
                          "type": "web_url",
                          "url": "https://peterssendreceiveapp.ngrok.io/shop?item=101"
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
        }
      ]
    }

  return resp;
}

module.exports.fblistresp = fblistresp;



//code for google list

var googlelist = function googlelist() {
  var glistresp =
    {
      "speech": "",
      "message": [
        {
          "type": "list_card",
          "platform": "google",
          "title": "Servicenowbot",
          "items": [
            {
              "optionInfo": {
                "key": "bookhotelbot",
                "synonyms": [
                  "this is hotel booking bot"
                ]
              },
              "title": "servicenow bot",
              "description": "this is service now bot",
              "image": {
                "url": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122013/untitled-1_86.png?itok=jqHZFAoG"
              }
            },
            {
              "optionInfo": {
                "key": "Cancel booking",
                "synonyms": [
                  "Select this for canceling"
                ]
              },
              "title": "Book Hotel",
              "description": "Select this for booking",
              "image": {
                "url": "http://www.clker.com/cliparts/Y/3/L/D/Z/R/simple-penguin-md.png"
              }
            }
          ]
        }
      ]
    }
    return glistresp;
  }

  module.exports.googlelist = googlelist;






  






