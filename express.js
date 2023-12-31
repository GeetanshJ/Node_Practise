// Request (req):
// The req object represents the HTTP request and contains information about the request,
// such as the URL, parameters, headers, and more. Middleware functions and route handlers
//  receive the req object as the first parameter


// Response (res):
// The res object represents the HTTP response and is used to send a response back to the client.
// It includes methods for sending data, setting headers, and ending the response. Middleware functions
// and route handlers receive the res object as the second parameter.

// Middleware:
// Middleware functions are functions that have access to the req, res, and next parameters.
// They can perform tasks, modify the request or response objects, or end the request-response cycle.
// Middleware functions can be used globally for all routes or locally for specific routes.

var app = require("express")();

app.set("view engine","ejs");

app.use((req, res, next) => {
    console.log("hello from middleware");
    next();
});

app.use((req, res, next) => {
    console.log("hello from middleware 2");
    next();
});

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.get("/profile/:user", function (req, res) {
    //colon ke baad vale ko params kehte ha like here it is user
    res.send(`hello from ${req.params.user} `);
});

app.listen(5000);
