import express from 'express'

import { PostModel } from '../models/postModel.js'

const router = express.Router()

/**
 * @description create a new post
 * @param {Request} req - express request object
 * @param {Response} res - express response object
 */
router.post('/', async (req, res) => {
  try {
    if (!req.body.content) {
      return res.status(400).json({
        message: 'content is required',
      })
    }

    const newPost = {
      content: req.body.content,
    }

    const post = await PostModel.create(newPost)

    return res.status(200).send(post)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

/**
 * @description get all posts
 * @param {Request} req - express request object
 * @param {Response} res - express response object
 */
router.get('/', async (req, res) => {
  try {
    const posts = await PostModel.find({})

    return res.status(200).json({
      data: posts,
      count: posts.length,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
