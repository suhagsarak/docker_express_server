const express =  require("express");
const app = express();
const productRouter= require("./routes/products");
const categoryRouter= require("./routes/category");
const userRouter= require("./routes/user");
const config = require("config");

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);

app.get('/', (request, response) => {
    console.log(request);
    response.send('<h1>Welcome to server</h1>');
})

app.listen(config.get("serport"), ()=>{
    console.log("Server listening on "+ config.get("host")+":"+ config.get("serport") +
    "\nCalling database on "+ config.get("host")+":"+ config.get("dbport"));
});