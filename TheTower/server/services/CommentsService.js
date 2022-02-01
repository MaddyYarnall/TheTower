import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext.js'

class CommentsService {
  async remove(commentId, userId) {
    const comment = await dbContext.Comments.findById(commentId)
    if (comment.creatorId.toString() !== userId) {
      throw new BadRequest('unable to delete comment!')
    }
    await dbContext.Comments.findOneAndRemove({ _id: commentId })
  }
  async create(body) {
    const comment = await dbContext.Comments.create(body)
    return comment
  }

  async getAll(query = {}) {
    const comments = await dbContext.Comments.find(query).populate('creator', 'name picture')
    return comments
  }

}

export const commentsService = new CommentsService