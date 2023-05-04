const express=require('express');
const port=process.env.port || 3000;
const app=express();
const path=require('path');
const hbs=require('hbs');
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended: false}));
app.use(express.static(mypublic));
app.set("view engine","hbs");
hbs.registerPartials(mypartials)
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb+srv://monug1513:monu123@work.eqglgeu.mongodb.net/test');
// console.log("data connected");
}
const kittySchema = new mongoose.Schema({
    ProductName:String,
    ProductDetails:String,
    Productdetails:String,
    Price:String,
    Category:String,
    photo:String

  });
const Kitten = mongoose.model('Kitten', kittySchema);
app.get("/",async(req,res)=>{
var Category="Male"
const data=await Kitten.find({Category}).limit(4)
Category="female"
const mydata=await Kitten.find({Category}).limit(4)
Category="kid"
const kiddata=await Kitten.find({Category})
Category="mobile"
const mobile=await Kitten.find({Category}).limit(4)
res.render("index",{data,mydata,kiddata,mobile})
});


app.get("/men",(req,res)=>{
res.render("men")
})



app.get("/women",async(req,res)=>{
Category="female"
const mydata=await Kitten.find({Category})
res.render("women",{mydata})
})

app.get("/kid",(req,res)=>{
    res.render("kid")
})

app.get("/mobile",(req,res)=>{
    res.render("mobile")
})


app.get("/product/:id",async(req,res)=>{
const id=req.params.id
const data=await Kitten.findById(id)
res.render("product",data)
})





app.listen(port,(req,res)=>{
console.log("Running on port 3000")



})
