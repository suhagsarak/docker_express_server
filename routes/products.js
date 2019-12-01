
const express = require("express");
const productRouter = express();
const connect= require("../utils/dbconnect");
const createResult = require("../utils/createResult");

var connection= connect();

productRouter.get("/", (request, response)=>{
    var query  = "select id, title, description, price from product";
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

productRouter.get("/:id", (request, response)=>{
    var id = request.params.id;
    var query  = `select id, title, description, price from product where id = ${id}`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});


productRouter.post("/", (request, response)=>{
    var {title, description, price} = request.body;
    var query  = `insert into product (title, description, price) values ('${title}', '${description}', '${price}')`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

productRouter.put("/:id", (request, response)=>{
    var id = request.params.id;
    var {title, description} = request.body;
    var query  = `update product set title='${title}', description='${description}', price='${price}' where id = ${id}`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

productRouter.delete("/:id", (request, response)=>{
    var id = request.params.id;
    var query  = `delete from product where id = ${id}`;
    connection.query(query, (error, result)=>{
    response.send(JSON.stringify(createResult(error, result)));
    });
});

module.exports= productRouter