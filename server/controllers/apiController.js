import express from 'express'
import { recipeServices } from '../services/recipeService.js'

export async function callAPI(req, res){

    try{
    const { ingredients } = req.body

    const recipe = await recipeServices(ingredients)

     return res.status(200).json({recipe})

    }catch(err){
        res.status(500).json({error: "Failed to generate recipe"})
    }
}