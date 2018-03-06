// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '737361746461603', // your App ID
        'clientSecret'  : 'e71ecb9ee8c1a8c770cf21b0d0283a9a', // your App Secret
        'callbackURL'   : 'https://mydemoflight.herokuapp.com/callback', //http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

     'googleAuth' : {
         'clientID'      : '764670484091-ibj46k3nqemah8on4kb8l4vmqbjotu4b.apps.googleusercontent.com',
         'clientSecret'  : 'aN_vBm_e26XsmMUs10H-eCAg',
         'callbackURL'   : 'htthttps://mydemoflight.herokuapp.com/googlecallback'
     }

};
