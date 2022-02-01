import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { towerEventsService } from "../services/TowerEventsService.js"
import { commentsService } from "../services/CommentsService.js";
import { attendeesService } from "../services/AttendeesService.js"

export class TowerEventsController extends BaseController {
  constructor() {
    super('api/events')
    this.router
      .get('/:eventId', this.getByEventId)
      .get('/:eventId/comments', this.getAllComments)
      .get('/:eventId/attendees', this.getEventAttendees)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:eventId', this.edit)
      .delete('/:eventId', this.remove)
  }
  async getEventAttendees(req, res, next) {
    try {
      const eventAttendees = await attendeesService.getEventAttendees(req.params.eventId)
      res.send(eventAttendees)
    } catch (error) {
      next(error)
    }
  }

  async getAllComments(req, res, next) {
    try {
      const comments = await commentsService.getAll({ eventId: req.params.eventId })
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const towerEvents = await towerEventsService.getAll(req.query)
      return res.send(towerEvents)
    } catch (error) {
      next(error)
    }
  }

  async getByEventId(req, res, next) {
    try {
      const towerEvent = await towerEventsService.getByTowerEventsId(req.params.eventId)
      return res.send(towerEvent)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const newTowerEvent = await towerEventsService.create(req.body)
      newTowerEvent.creator = req.userInfo
      return res.send(newTowerEvent)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const editedEvent = await towerEventsService.edit(req.params.eventId, req.body)
      res.send(editedEvent)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await towerEventsService.remove(req.params.eventId, req.userInfo.id)
      return res.send('Event was deleted')
    } catch (error) {
      next(error)
    }
  }
}