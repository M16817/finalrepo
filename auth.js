// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '737361746461603', // your App ID
        'clientSecret'  : 'e71ecb9ee8c1a8c770cf21b0d0283a9a', // your App Secret
        'callbackURL'   : 'https://mydemoflight.herokuapp.com/fb/callback', //http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'nW8gdRkaoc2m43XzUGA4zVAS0',
        'consumerSecret'    : 'RYT8vXXGRBBXodL5TBFsrKLz93Yo1QIHDkGWnmV9E4nJcdWypN',
        'callbackURL'       : 'https://mydemoflight.herokuapp.com/twt/callback'
    },

     'googleAuth' : {
         'clientID'      : '764670484091-ibj46k3nqemah8on4kb8l4vmqbjotu4b.apps.googleusercontent.com',
         'clientSecret'  : 'aN_vBm_e26XsmMUs10H-eCAg',
         'callbackURL'   : 'https://mydemoflight.herokuapp.com/ga/callback'
     }

};
