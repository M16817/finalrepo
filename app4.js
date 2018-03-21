if (req.body.result.action === 'create-incident') {

    console.log("action create incident called");
    console.log(req.body.result.resolvedQuery);
    console.log(req.body.result.fulfillment.messages[0].title);

    severity = req.body.result.parameters.entityseverity;
    desc = req.body.result.resolvedQuery; //req.body.result.parameters.Description;
    subcategory = req.body.result.parameters.entitysubcategory;
    category = req.body.result.parameters.entitycategory;

    req.body.result.parameters.Description=desc;

    console.log('severity ' + req.body.result.parameters.entityseverity);
    console.log('subcategory ' + req.body.result.parameters.entitysubcategory);
    console.log('category ' + req.body.result.parameters.entitycategory);

    console.log('Description1 ' + desc);
    console.log('Description2 ' + req.body.result.parameters.Description);

    if(req.body.result.parameters.entitycategory===''){
      console.log('Hi entitycategory');
    }

    if(req.body.result.parameters.entitysubcategory ===''){
      console.log('Hi entitysubcategory');
    }
    
    if(req.body.result.parameters.entityseverity ===''){
      console.log('Hi entityseverity');
    }
   
    if(category===''){
      console.log('catgeory msg nodejs');
      return res.json(
        {
          "speech": "",
          "messages": [
            
            {
              "type": 2,
              "platform": "facebook",
              "title": "Please choose category",
              "replies": [
                "Network",
                "Hardware",
                "Software"
              ]
            }
          ]
        }
      )
    }

    if(subcategory===''){
      console.log('subcatgeory msg nodejs');
      return res.json(
        {
          "speech": "",
          "messages": [
            
            {
              "type": 1,
              "platform": "facebook",
              "title": "Please choose sub category",
              "imageUrl": "https://tekslate.com/wp-content/uploads/2014/11/online-servicenow-training.png",
              "buttons": [
                {
                  "text": "DHCP",
                  "postback": "DHCP"
                },
                {
                  "text": "DNS",
                  "postback": "DHCP"
                },
                {
                  "text": "VPN",
                  "postback": "DHCP"
                }
              ]
            }
          ]
        }
      )
    }

    if (severity === '') {
      console.log('severity msg nodejs');
      // return res.json(
      //   {
      //     "speech": "Enter incident urgency as High Medium or Low",
      //     "messages": [
      //       {
      //         "type": 0,
      //         "speech": "Enter incident urgency as High Medium or Low"
      //       }
      //     ]
      //   }
      // )

      return res.json({
        "followupEvent": {
          "name": "incident-urgency",
          "data": {
            "Description": desc,
            "category":category,
            "subcategory":subcategory,
            "severity":severity  
          }
        }
      })
    }

    if (category!='' && subcategory!='' && severity!='') {
      
      console.log('new incident created...');

       firstapp.logIncident(desc, severity, category, subcategory, function (err, res2) {

        incident = res2["result"]["number"];

        var resagent = 'Incident created successfully ' + '<br>Keep this incident no ' + incident + ' as a future reference';

        console.log('request are' + resagent);

        firstapp.chatLogToFile(req.body.result.resolvedQuery, resagent, req.body.sessionId);

        return res.json({
          "followupEvent": {
            "name": "incident-msg",
            "data": {
              "incident": incident
  
            }
          }
        });

      });


    }

    firstapp.chatLogToFile(req.body.result.resolvedQuery, req.body.result.fulfillment.messages[0].title, req.body.sessionId);
   // firstapp.chatlogToPgDB(req.body.result.resolvedQuery, req.body.result.fulfillment.messages[0].title, req.body.sessionId);
   // firstapp.chatlogToMgDB(req.body.result.resolvedQuery, req.body.result.fulfillment.messages[0].title, req.body.sessionId);
  }