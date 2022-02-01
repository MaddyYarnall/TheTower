import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .get('', this.getAll)
      .post('', this.create)
      .delete('/:commentId', this.remove)
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      // req.body.towerEventsId = req.params.towerEventsId
      const comment = await commentsService.create(req.body)
      comment.creator = req.userInfo
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await commentsService.remove(req.params.commentId, req.userInfo.id)
      return res.send('Comment has been deleted!')
    } catch (error) {
      next(error)
    }
  }

}