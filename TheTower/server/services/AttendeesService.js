import { dbContext } from "../db/DbContext.js"
import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'

class AttendeesService {
  async attendEvent(newAttendee) {
    const attendEvent = await dbContext.Attendees.create(newAttendee)
    await attendEvent.populate('account', 'name picture')
    await attendEvent.populate('event')
    // find an event, change the capacity on that event, and save that event
    const event = await dbContext.TowerEvents.findById(newAttendee.eventId)
    if (event.capacity == 0) {
      throw new BadRequest('Capacity is full')
    }
    event.capacity -= 1
    await event.save()
    return attendEvent

  }

  //hello
  async getEventAttendees(eventId) {
    const attendees = await dbContext.Attendees.find({ eventId: eventId }).populate('account', 'name picture')
    return attendees
  }

  // async removeAttendee(userId, eventId){
  //   const attendee = await this.
  // }

}

export const attendeesService = new AttendeesService