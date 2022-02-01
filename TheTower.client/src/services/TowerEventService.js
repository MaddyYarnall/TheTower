import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class TowerEventService {
  async getEvents(query = '') {
    const res = await api.get('api/events/' + query)
    console.log(res.data)
    AppState.towerEvents = res.data
  }

  async getByTowerEventId(eventId) {
    const res = await api.get('api/events/' + eventId)
    AppState.activeEvent = res.data
  }

}

export const towerEventService = new TowerEventService