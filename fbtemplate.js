

var fblistresp = function fblist(title,subtitle,image_url,buttonTitle,buttonType,buttonUrl) {
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