// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

// Set up the server
app.use(cors());
app.use(bodyParser.json());

// Get comments
app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Post comments
app.post('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const comments = JSON.parse(data);
        const newComment = {
            id: comments.length + 1,