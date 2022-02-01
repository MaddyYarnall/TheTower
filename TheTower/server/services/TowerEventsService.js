import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext'
class TowerEventsService {
  async getAll(query = {}) {
    const towerEvents = await dbContext.TowerEvents.find(query)
    return towerEvents
  }
  async getByCreatorId(creatorId) {
    const towerEvent = await dbContext.TowerEvents.find({ creatorId: creatorId }).populate('creator')
    if (!towerEvent) {
      throw new BadRequest('Invalid Creator ID!')
    }
    return towerEvent
  }
  async getByTowerEventsId(towerEventsId) {
    const towerEvent = await dbContext.TowerEvents.findById(towerEventsId).populate('creator')
    if (!towerEvent) {
      throw new BadRequest('Invalid TowerEvent ID!')
    }
    return towerEvent
  }
  async create(body) {
    const newTowerEvent = await dbContext.TowerEvents.create(body)
    return newTowerEvent
  }

  async edit(towerEventId, userId) {
    // FIXME userId is not a user id from the controller, its a body with a user id
    const towerEvent = await this.getByTowerEventsId(towerEventId)
    if (towerEvent.creatorId.toString() !== userId) {
      throw new BadRequest('Unable to edit/soft delete event')
    }
    // FIXME need to be able to edit everything but canceled here
    towerEvent.isCanceled = towerEvent.isCanceled || towerEvent.isCanceled
  }
  // TODO method for update

  async remove(towerEventId, userId) {
    const towerEvent = await this.getByTowerEventsId(towerEventId)
    if (towerEvent.creatorId.toString() !== userId) {
      throw new BadRequest('Unable to delete event')
    }
    // TODO run as an update where {isCanceled: true}
    // BAD NO DO await dbContext.TowerEvents.findOneAndRemove({ _id: towerEventId })
  }

}

export const towerEventsService = new TowerEventsService