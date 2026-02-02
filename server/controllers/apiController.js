import express from 'express'
import { recipeServices } from '../services/recipeService.js'
import { getDBConnection } from '../db/db.js' 
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
    const { title, description, servings, timeMinutes, difficulty, recipe } = req.body
    if(!title || !description || !servings || !timeMinutes || !difficulty || !recipe){
        return res.status(400).json({error: 'Missing some attributes'})
    }
    res.status(200).json({title, description, servings, timeMinutes, difficulty, recipe})


    const db= await getDBConnection()
}

export async function getImg(req, res){
    dotenv.config()
    
}