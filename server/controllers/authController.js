import validator from 'validator'
import { getDBConnection } from '../db/db.js'
import bcrypt from 'bcryptjs'

export async function registerUser(req, res) {

    let { name, username, email, password } = req.body //validating that all fields have been filled out
    if(!name || !username || !email || !password){
        return res.status(400).json({error: 'All fields are required'})
    }

    //trim in case user adds extra whitespace 
    name = name.trim()
    username = username.trim()
    email = email.trim()

    //regex to test username is valid
    if(!/^[a-zA-Z0-9_-]{1,20}$/.test(username)){
        return res.status(400).json({error: 'Username must be 1–20 characters, using letters, numbers, _ or -.'})
    }
    
    //using validator package to see if valid email is provided
    if(!validator.isEmail(email)){
        res.status(400).json({error: 'Valid email is required'})
    }

    try {

        password = await bcrypt.hash(password, 10)
        



        const db = await getDBConnection()

        const emailExists= await db.get('SELECT * FROM user WHERE email = ? ', [email])
        const usernameExists = await db.get('SELECT * FROM user WHERE username = ? ', [username])

        if(emailExists || usernameExists){
            return res.status(400).json({error: 'Email or username alreader in use'})
        }

        const result= db.run('INSERT INTO user (name, username, email, name, password) VALUES (?, ?, ?, ?, ?)', [name, username, email, name, password])
        res.status(201).json({message: 'User succefully registered', name:`${user.name}`})//also return users name here

        //each insertions returns last id, use this to bind session id to specified user
        req.session.userId = result.lastID



    } catch (err){
        console.log('Registration error', err)
        res.status(500).json({error: 'Registration failed. Please try again'})
    }

}

export async function loginUser(req, res){
    let { username, password } = req.body
    username = username.trim()

    if(!username|| !password){
        return res.status(400).json({error: 'All fields required'})
    }

    try{
    
        const db = await getDBConnection()
        const user = await db.get(`SELECT * FROM user WHERE username = ?`, [username])

        if(!user){
            return res.status(400).json({error: 'Invalid credentials'})
        }
    

        const passwordMatch = await bcrypt.compare(password, user.password)

        if(!passwordMatch){
            return res.status(400).json({error: 'Invalid credentials'})
        }else{
            req.session.userId = user.id
            res.status(200).json({message: 'Logged in', name: `${user.name}`})
        }


    }catch(err){
        res.status(500).json({error: 'Login failed. Please try again'})
    }


}
