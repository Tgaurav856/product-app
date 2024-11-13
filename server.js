
const express=require("express");
const app=express();


require('dotenv').config();
const PORT=process.env.PORT||3000;


app.use(express.json());

const prod=require("./routes/prod");
app.use("api/v1",prod);

const dbConnect=require("./config/database");
dbConnect();

app.listen(PORT,()=>{
    console.log(`server started at port no ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("welcome");
})

