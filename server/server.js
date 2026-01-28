import express from 'express'
import cors from 'cors'
import { authRouter } from './routes/auth.js'
import session from 'express-session'
import dotenv from "dotenv";

dotenv.config();

const app= express()
const PORT= 3000
const secret = process.env.SPIRAL_SESSION_SECRET

app.use(cors({
    origin: 'http://localhost:5173',//where our react/vite is running
    credentials: true
}))
app.use(express.json())//this is required to be able to access req.body params
app.use(session({
    secret: secret, //a string or an array of string used to verify session id cookie to prevent tampering, if someone tries to change session id(hacker)
    resave: false, 
    saveUninitialized: false, //if true it would give every user even not logged in their own session
    cookie:{
        httpOnly:true, //prevents cross site scripting attacks
        secure: false, //allows cookie to be sent over http and not only https since were in developemnt
        sameSite: 'lax'
    }
}))

app.use('/api/auth', authRouter)



app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
}).on('error', (err)=>{
    console.log('Failed to start server:', err)
})




