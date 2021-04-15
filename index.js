const express=require('express');
const bodyparser=require("body-parser");
const InitiateMongoServer =require("./config/db")
const user=require("./routes/user");

InitiateMongoServer();

const app = express();

const PORT=process.env.PORT || 3000;

app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user",user)

app.get('/',function(req,res){
    res.json(`welcome to login,signup api`);
});

 
app.listen(PORT,()=>{
    console.log(` app is live at ${PORT}`)
});