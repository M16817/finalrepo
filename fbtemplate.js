// FB quick replies template

var fbquickreplies = function fbquickrepl(title, subtitle, imageUrl, buttonText, buttonPostback) {
    var fbquickreplies =
        {
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
                            "text": "DNS",
                            "postback": "DNS"
                        }
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


var fbcourosel = function fbcourosel() {
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
                                        "title": "Welcome!",
                                        "image_url": "https://auto.ndtvimg.com/bike-images/colors/suzuki/intruder/suzuki-intruder-glass-sparkle-black.png?v=14",
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

var fbcard = function fbcard() {

    var fbcard = {
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
                        "text": "IP Address",
                        "postback": "IP Address"
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


