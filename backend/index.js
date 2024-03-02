import express from 'express'
import { PORT, url } from './config.js'

import mongoose from 'mongoose'
import cors from 'cors'

import postRoute from './routes/postRoute.js'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  console.log(req)
  return res.status(243).send('Welcome!')
})

app.use('/posts', postRoute)

mongoose
  .connect(url)
  .then(() => {
    app.listen(PORT, () => console.log('connected!'))
  })
  .catch((error) => {
    console.log(error)
  })
