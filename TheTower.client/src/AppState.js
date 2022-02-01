import { reactive } from 'vue'

const towerEvent = {
  name: 'Dummy test data for testings'
}

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  towerEvents: [towerEvent, towerEvent, towerEvent]
})
