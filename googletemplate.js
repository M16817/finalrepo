const ActionsSdkApp = require('actions-on-google').DialogflowApp;

var googlesuggestion_chip = function googlesuggesion(textToSpeech,firstsuggestion,secondsuggestion,thirdsuggestion) {
    console.log('function called'); 
    var googlesuggesion = {
        "speech": "google assistant",
        "messages": [
            {
                "type": "simple_response",
                "platform": "google",
                "textToSpeech": textToSpeech
            },
            {
                "type": "suggestion_chips",
                "platform": "google",
                "suggestions": [
                    {
                        "title": firstsuggestion
                        //"postback": "DHCP"
                    },
                    {
                        "title": secondsuggestion
                        //"postback": "DNS"
                    },
                    {
                        "title": thirdsuggestion
                        // "postback": "IP"
                    }
                ]
            },
            {
                "type": 0,
                "speech": "this is service now bot"
            }
        ]

    };
    return googlesuggesion;
}
module.exports.googlesuggesion = googlesuggesion;
