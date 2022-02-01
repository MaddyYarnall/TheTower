import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AttendeesService {
  async getAttendeesByEventId(eventId) {
    const res = await api.get('api/events/' + eventId + '/attendees')
    logger.log('attendees res', res.data)
    AppState.eventAttendees = res.data
  }

  async attendEvent(newAttendee) {
    logger.log('eventId in attend', newAttendee)
    const res = await api.post('api/attendees', newAttendee)
    logger.log('attended event', res.data)
  }
}

export const attendeesService = new AttendeesService