import express from 'express'
import cors from 'cors'
import { authRouter } from './routes/auth.js'

const app= express()
const PORT= 3000

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())//this is required to be able to access req.body params

app.use('/api/auth', authRouter)



app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
}).on('error', (err)=>{
    console.log('Failed to start server:', err)
})




