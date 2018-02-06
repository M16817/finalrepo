var http=require('http');
var express=require('express');
var bodyParser=require('body-Parser');

var app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

var portC=process.env.PORT || 3000;

app.post('/',function(req,res){
    if (req.body.action.result ==='network')
    {
        var facebookResponse={
            "speech": "",
            "displayText": "Your Incident has been raised",
            "data": {
              "facebook": {
                "attachment": {
                      "type": "template",
                      "payload": {
                      "template_type": "generic",
                      "elements": [
                        {
                          "title": "Select SubCategory",
                          "subtitle": '',
                          "buttons": [
                            {
                              "type": "postback",
                              "title": "CPU",
                              "payload": "CPU"
                            },
                            {
                              "type": "postback",
                              "title": "Keyboard",
                              "payload": "Keyboard"
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              },
          
            };
    
    return res.json(facebookResponse);
     
        }
    });

    app.listen(portC,function(){
        console.log('Port is listening at'+portC);
    })