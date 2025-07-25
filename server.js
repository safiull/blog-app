const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const services = [
    {id: 1, title: "E-Commerce", icon: 'fas fa-shopping-cart fa-stack-1x fa-inverse', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.z"},
    {id: 1, title: "Responsive Design", icon: 'fas fa-laptop fa-stack-1x fa-inverse', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.z"},
    {id: 1, title: "Web Security", icon: 'fas fa-lock fa-stack-1x fa-inverse', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.z"}
]

app.get('/', (req, res) => {
    res.render('index', {services});
});

app.listen(3000, () => {
    console.log("Server is running 1.");
});