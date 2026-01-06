import express from 'express'
import cors from 'cors'

const app= express()
const PORT= 3000

app.use(cors())



app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
}).on('error', (err)=>{
    console.log('Failed to start server:', err)
})




