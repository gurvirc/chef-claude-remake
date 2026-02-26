import express from 'express'
import { callAPI, addRecipe, getImg, fetchRecipes, deleteRecipe } from '../controllers/apiController.js'

export const apiRouter = express.Router()

apiRouter.post('/recipe', callAPI)
apiRouter.post('/addRecipe', addRecipe)
apiRouter.post('/getImg', getImg)
apiRouter.post('/fetchRecipes', fetchRecipes)
apiRouter.delete('/deleteRecipe', deleteRecipe)