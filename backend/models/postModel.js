import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export const PostModel = mongoose.model('Post', postSchema)
