import express from 'express'
import { callAPI, addRecipe, getImg } from '../controllers/apiController.js'

export const apiRouter = express.Router()

apiRouter.post('/recipe', callAPI)
apiRouter.post('/addRecipe', addRecipe)
apiRouter.post('/getImg', getImg)