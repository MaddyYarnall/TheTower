import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class TowerEventService {
  async getEvents(query = '') {
    const res = await api.get('api/towerEvents/' + query)
    console.log(res.data)
    AppState.towerEvents = res.data
  }

}

export const towerEventService = new TowerEventService