import express from 'express'
import { callAPI, addRecipe, getImg, fetchRecipes } from '../controllers/apiController.js'

export const apiRouter = express.Router()

apiRouter.post('/recipe', callAPI)
apiRouter.post('/addRecipe', addRecipe)
apiRouter.post('/getImg', getImg)
apiRouter.post('/fetchRecipes', fetchRecipes)