
const express = require("express");
const userRouter = express();
const connect= require("../utils/dbconnect");
const createResult = require("../utils/createResult");

var connection= connect();

userRouter.get("/", (request, response)=>{
    var query  = "select id, name, email, phone from user";
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

userRouter.get("/:id", (request, response)=>{
    var id = request.params.id;
    var query  = `select id, name, email, phone from user where id = ${id}`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});


userRouter.post("/", (request, response)=>{
    var {name, email, phone} = request.body;
    var query  = `insert into user (name, email, phone) values ('${name}', '${email}', '${phone}')`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

userRouter.put("/:id", (request, response)=>{
    var id = request.params.id;
    var {name, email, phone} = request.body;
    var query  = `update user set name='${name}', email='${email}', phone='${phone}' where id = ${id}`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

userRouter.delete("/:id", (request, response)=>{
    var id = request.params.id;
    var query  = `delete from user where id = ${id}`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

module.exports = userRouter