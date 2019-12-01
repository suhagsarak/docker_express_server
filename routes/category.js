
const express = require("express");
const categoryRouter = express();
const connect= require("../utils/dbconnect");
const createResult = require("../utils/createResult");

var connection= connect();

categoryRouter.get("/", (request, response)=>{
    var query  = "select id, title, description from category";
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

categoryRouter.get("/:id", (request, response)=>{
    var id = request.params.id;
    var query  = `select id, title, description from category where id = ${id}`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

categoryRouter.post("/", (request, response)=>{
    var {title, description} = request.body;
    var query  = `insert into category (title, description) values ('${title}', '${description}')`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

categoryRouter.put("/:id", (request, response)=>{
    var id = request.params.id;
    var {title, description} = request.body;
    var query  = `update category set title='${title}', description='${description}' where id = ${id}`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

categoryRouter.delete("/:id", (request, response)=>{
    var id = request.params.id;
    var query  = `delete from category where id = ${id}`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

module.exports = categoryRouter