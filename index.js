const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const chatbot = require('./routes/chatbot')

// View engine
app.set('view engine','ejs');

app.use(session({
    secret: "qualquercoisa", cookie: { maxAge: 30000000},
    saveUninitialized: true,
    resave: true
}))

app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Router

app.use("/", chatbot);

// End Router
app.listen(3000, () => {
    console.log("O servidor está rodando!")
})