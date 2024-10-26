const express=require("express")
const router=express.Router()
const cors=require('cors')
const nodemailer =require("nodemailer")
require('dotenv').config();

const username = process.env.user;
const password = process.env.pass;

const app=express()
app.use(cors({
    origin: 'https://portfoliomonika.onrender.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
app.use(express.json())
app.use('/',router)
app.listen(8080,()=>{
    console.log("server running")
})

const contactEmail=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:username,
        pass:password
    }
})

contactEmail.verify((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Ready to Send")
    }
})

router.post('/contact',(req,res)=>{
    const name=req.body.firstName+req.body.lastName;
    const email=req.body.email;
    const phone=req.body.phone;
    const message=req.body.message;
    const mail={
        from:name,
        to:username,
        subject:"Contact Form Submission - Portfolio",
        html:`
        <p> Name:${name}</p>
        <p> Email:${email}</p>
        <p> Phone:${phone}</p>
        <p> Message:${message}</p>`
    };
    contactEmail.sendMail(mail,(error)=>{
        if(error){
            res.json(error)
        }else{
            res.json({code:200,status:"Message Sent"})
        }
    })
})