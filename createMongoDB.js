var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Db created");
    db.close();

})