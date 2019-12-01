const mysql = require("mysql");
const config = require("config")

function connect()
{
    var connection = mysql.createConnection({
        host : config.get("host"),
        user : config.get("user"),
        password : config.get("password"),
        database : config.get("database"),
        port : config.get("dbport")                                       //port forwarding
    });

    connection.connect();

    return connection;
}

module.exports= connect