var request = require('request');
function abc (callback) {

    console.log("User profile");
    var options = {
      method: 'GET',
      url: 'https://graph.facebook.com/me',
      qs: { access_token : 'EAALWyUke73EBAEPmTecXQ6B7jB9Ex9O7POfW4oaoSRoMHpyawNM9uEiA2x489q0ZAYp7AFUvpFYBBU7glcNZAL4uWDWguoPPsF57Cjc0DxgcdJNxgBwWBLDCQ0I3LccKaH2fZC849O4Nx73jF4ARNyGnKfoMgsn9fHjfY61YoFnkxAbJQTpLuf0KgIiGprJUOPjqHdSTwZDZD'}
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
     
      callback(null, body);
    });
  }


  abc(function(err,res){
console.log(res);
  })
 