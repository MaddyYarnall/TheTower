import { reactive } from 'vue'

const towerEvent = {
  name: 'Luke Bryan Concert',
  description: 'See Luke Bryan LIVE while he preforms some of his most popular songs!',
  capacity: 200,
  date: 'March 11, 2021',
  location: 'Ford Idaho Center',
  imgUrl: 'https://s.abcnews.com/images/US/luke-bryan-gty-er-191007_hpMain_16x9_992.jpg'
}

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  towerEvents: [towerEvent, towerEvent, towerEvent]
})
