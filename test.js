

// if (req.body.result.action == "makeincident") {
//   console.log('make incident called');
//   console.log(req.body.result);
//   var cat = req.body.result.contexts[0].parameters.Category;
//   console.log(cat);

//   if (req.body.result.contexts[0].parameters.Category == '' && req.body.result.parameters.subcategory != '') {
//     var Networkcategory = '';
//     var desc = req.body.result.resolvedQuery;

//     for (i = 0; i < subcat.Network.length; i++) {
//       if (req.body.result.parameters.subcategory == subcat.Network[i]) {
//         console.log('set cat as network');
//         Networkcategory = 'Network'
//         break;
//       }
//     }

//     if (req.body.result.parameters.severity === '') {
//       console.log('severity msg nodejs');
//       return res.json({
//         "followupEvent": {
//           "name": "set-severity",
//           "data": {
//             "Description": desc,
//             "category": Networkcategory,
//             "subcategory": req.body.result.parameters.subcategory,
//             "severity": "severity"
//           }
//         }
//       })
//     }

//     incident.logIncident(desc, req.body.result.parameters.severity, Networkcategory, req.body.result.parameters.subcategory, function (err, resu) {

//       var resagent = "Your incident has been created with incident number:" + success + ".Note it down for further enquiry.";

//       return res.json({
//         speech: resagent,
//         displayText: resagent,
//         source: ''
//       });
//     }
//   }

//   //   incident.chatLog(req.body.result.parameters.subcategory, 'Please Enter Description', req.body.sessionId);

//   else {


//     console.log("else part called");
//     // incident.chatLog(userdes, 'Please Enter Severity as High, low or medium', req.body.sessionId);
//     //incident.logIncident(userdes, req.body.result.parameters.severity, cat, req.body.result.parameters.subcategory, function (err, resu) {

//     var success = 'INC2323'; //resu["result"]["number"];
//     var resagent = "Your incident has been created with incident number:" + success + ".Note it down for further enquiry.";

//     // incident.chatLog(req.body.result.parameters.severity, resagent, req.body.sessionId);

//     incident.logIncident(req.body.result.resolvedQuery, req.body.result.parameters.severity, Networkcategory, req.body.result.parameters.subcategory, function (err, resu) {

//       var resagent = "Your incident has been created with incident number:" + success + ".Note it down for further enquiry.";


//       return res.json({
//         speech: resagent,
//         displayText: resagent,
//         source: ''
//       });
//     })
//   }
// }
