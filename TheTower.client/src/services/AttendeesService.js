import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AttendeesService {
  async getAttendeesByEventId(eventId) {
    const res = await api.get('api/events/' + eventId + '/attendees')
    logger.log('attendees res', res.data)
    AppState.eventAttendees = res.data
  }

  async attendEvent(eventId) {
    const res = await api.post('api/events/' + eventId)
    logger.log('attended event', res.data)
  }
}

export const attendeesService = new AttendeesService