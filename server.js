// for creating a project
// mkdir blog-app
// cd blog-app
// npm init -y
// npm install express ejs express-ejs-layouts
// npx nodemon server.js

const express = require('express');
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

const services = [
    {id: 1, title: "E-Commerce", icon: 'fas fa-shopping-cart fa-stack-1x fa-inverse', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.z"},
    {id: 1, title: "Responsive Design", icon: 'fas fa-laptop fa-stack-1x fa-inverse', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.z"},
    {id: 1, title: "Web Security", icon: 'fas fa-lock fa-stack-1x fa-inverse', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.z"}
]

app.get('/', (req, res) => {
    res.render('web/index', {services});
});

app.get('/login', (req, res) => {
    res.render('auth/login', {layout: 'layouts/auth/index'});
})

app.listen(3000, () => {
    console.log("Server is running.");
});