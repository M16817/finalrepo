// FB quick replies template

var fbquickreplies = function fbquickrepl(title, firstreply, secondreply) {
    var fbquickreplies =
        {
            "messages": [
                {
                    "type": 2,
                    "platform": "facebook",
                    "title": title,
                    "replies": [
                        firstreply,
                        secondreply
                    ]
                },
                {
                    "type": 0,
                    "speech": ""
                }
            ]
        }

    return fbquickreplies
}
module.exports.fbquickreplies = fbquickreplies;





//FB list template
var fblistresp = function fblist(title, subtitle, image_url, buttonTitle, buttonType, buttonUrl) {
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
                                            "title": title,
                                            "subtitle": subtitle,
                                            "image_url": image_url,
                                            "buttons": [
                                                {
                                                    "title": buttonTitle,
                                                    "type": buttonType,
                                                    "url": buttonUrl
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


//FB template for courosel


var fbcourosel = function fbcourosel(title, imageUrl, subtitle, buttonType, buttonUrl, buttonTitle) {
    var fbcourosel = {
        "messages": [
            {
                "type": 4,
                "platform": "facebook",
                "payload": {
                    "facebook": {
                        "attachment": {
                            "type": "template",
                            "payload": {
                                "template_type": "generic",
                                "elements": [
                                    {
                                        "title": title, // "Welcome!",
                                        "image_url": imageUrl, // "https://auto.ndtvimg.com/bike-images/colors/suzuki/intruder/suzuki-intruder-glass-sparkle-black.png?v=14",
                                        "subtitle": subtitle, // "We have the right hat for everyone.",
                                        "buttons": [
                                            {
                                                "type": buttonType, //"web_url",
                                                "url": buttonUrl, // "https://petersfancybrownhats.com",
                                                "title": buttonTitle // "View Website"
                                            }
                                            // {
                                            //     "type": buttonType, //  "postback",
                                            //     "title": buttonUrl // "Start Chatting",
                                            //     "payload": buttonPayload // "DEVELOPER_DEFINED_PAYLOAD"
                                            // }
                                        ]
                                    },
                                    {
                                        "title": "Welcome!",
                                        "image_url": "https://petersfancybrownhats.com/company_image.png",
                                        "subtitle": "We have the right hat for everyone.",
                                        "buttons": [
                                            {
                                                "type": "web_url",
                                                "url": "https://petersfancybrownhats.com",
                                                "title": "View Website"
                                            },
                                            {
                                                "type": "postback",
                                                "title": "Start Chatting",
                                                "payload": "DEVELOPER_DEFINED_PAYLOAD"
                                            }
                                        ]
                                    },
                                    {
                                        "title": "Welcome!",
                                        "image_url": "https://petersfancybrownhats.com/company_image.png",
                                        "subtitle": "We have the right hat for everyone.",
                                        "buttons": [
                                            {
                                                "type": "web_url",
                                                "url": "https://petersfancybrownhats.com",
                                                "title": "View Website"
                                            },
                                            {
                                                "type": "postback",
                                                "title": "Start Chatting",
                                                "payload": "DEVELOPER_DEFINED_PAYLOAD"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            {
                "type": 0,
                "speech": "Hi!"
            }
        ]
    }
    return fbcourosel
}
module.exports.fbcourosel = fbcourosel;


///////////////////////////////////card///////////////////////////////////

var fbcard = function fbcard(title, subtitle, imageUrl, buttonText, buttonPostback) {

    var fbcard = {
        "speech": "",
        "messages": [
            {
                "type": 1,
                "platform": "facebook",
                "title": title,
                "subtitle": subtitle,
                "imageUrl": imageUrl,
                "buttons": [
                    {
                        "text": buttonText,
                        "postback": buttonPostback
                    },
                    {
                        "text": "buttontext",
                        "postback": "postback"
                    }
                ]
            },
            {
                "type": 0,
                "speech": ""
            }
        ]
    }
    return fbcard;
}
module.exports.fbcard = fbcard;


var fbbuttons=function fbbuttonresponse(){
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
  return fbbuttonresponse
}
module.exports.fbbuttons = fbbuttons;