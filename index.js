const express = require('express')
const app = express()

const port =process.env.PORT || 5000;

const recipe= require('./data/recipe.json');
const category = require('./data/category.json')

app.get('/',(req,res) =>{
    res.send('Cooking in running')
})
app.get('/recipe',(req,res) =>{
    res.send(recipe);
})
app.get('/category',(req, res)=>{
    res.send(category)
})

app.listen(port , () =>{
    console.log(`Cooking is continue at port: ${port}`)
})