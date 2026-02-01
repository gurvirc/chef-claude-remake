import express from 'express'
import { callAPI, addRecipe } from '../controllers/apiController.js'

export const apiRouter = express.Router()

apiRouter.post('/recipe', callAPI)
apiRouter.post('/api', addRecipe)