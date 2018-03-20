var sql = require("seriate");
var express=require('express');
var app= express();
// Change the config settings to match your
// SQL Server and database
var config = {
    "server": "HEX-MUM1-LAP051\MSSQLEXPRESS",
    "user": "sa",
    "password": "pass@123",
    "database": "SampleDB"
};

sql.setDefaultConfig( config );

app.get('/',function(req,res){
  sql.execute( {
    query: "select * from employee"
} ).then( function( results ) {
   res.send( results );
}, function( err ) {
    console.log( err );
} );
})


    app.listen(1234);