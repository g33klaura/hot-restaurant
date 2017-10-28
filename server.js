var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//initial objects:
var current = [
   
    {
        id:'1',
        name: 'Jane Q Public',
        phone: '407-555-5555',
        email: 'jane@public.me'
    }   
];

var waiting = [
   
    {
        id:'5',
        name: 'John Q Public',
        phone: '407-555-5556',
        email: 'john@public.me'
    }   
];
