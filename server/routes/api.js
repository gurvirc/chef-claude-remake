import express from 'express'
import { callAPI } from '../controllers/apiController.js'

export const apiRouter = express.Router()

apiRouter.post('/recipe', callAPI)