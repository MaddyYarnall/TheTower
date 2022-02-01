import { Auth0Provider } from "@bcwdev/auth0provider";
import { attendeesService } from "../services/AttendeesService.js";
import BaseController from "../utils/BaseController.js";


export class AttendeesController extends BaseController {
  constructor() {
    super('api/attendees')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.attendEvent)
  }

  async attendEvent(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const attendEvent = await attendeesService.attendEvent(req.body)
      res.send(attendEvent)
    } catch (error) {
      next(error)
    }
  }


}