import express from 'express'
import { recipeServices } from '../services/recipeService.js'
import { getDBConnection } from '../db/db.js' 
import { createApi } from 'unsplash-js';
import dotenv from 'dotenv'

export async function callAPI(req, res){

    try{
    const { ingredients } = req.body

    const recipe = await recipeServices(ingredients)

     return res.status(200).json({recipe})

    }catch(err){
        res.status(500).json({error: "Failed to generate recipe"})
    }
}

export async function addRecipe(req, res){

    console.log(req.body)
    const { title, description, servings, timeMinutes, difficulty, recipe, imgUrl } = req.body
    if(!title || !description || !servings || !timeMinutes || !difficulty || !recipe ||!imgUrl){
        return res.status(400).json({error: 'Missing some attributes'})
    }
    

    try{
    const userId= req.session.userId
    console.log('this is the session id', userId)
    const db= await getDBConnection()

    const result = await db.run(`INSERT INTO saved_recipes (userId, title, description, servings, time, difficulty, recipe, imgPath)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [userId, title, description, servings, timeMinutes, difficulty, recipe, imgUrl])

        return res.status(200).json({msg: 'recipe succesfully added'})

    }catch(err){
        console.log(err)
    }
}

export async function getImg(req, res){
    /*dotenv.config()
    const { title } = req.body
    const response = await fetch(
    `https://api.unsplash.com/photos/random?collections=1353633&query=${title}&count=1`,
    { headers: { Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}` } }
);
const data = await response.json();
const imgUrl = data[0]?.urls?.small || "";

res.status(200).json({imgUrl})


console.log(imgUrl)*/
const { title } = req.body
const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${title}&number=1&apiKey=${process.env.SPOONACULAR_API_KEY}`
);
const data = await response.json();
const imgUrl = data.results[0]?.image;

res.status(200).json(imgUrl)

}