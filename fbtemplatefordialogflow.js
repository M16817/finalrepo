/*for list template in dialog flow custom payload

{
    "facebook": {
    
      "attachment":{
        "type":"template",
        "payload":{
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
  */