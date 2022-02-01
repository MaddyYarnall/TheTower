<template>
  <div class="container-fluid">
    <NewEventForm />
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <img :src="towerEvent.coverImg" alt="Event Image" class="coverimg" />
          <h2>{{ towerEvent.name }}</h2>
          <h5>{{ towerEvent.startDate }} {{ towerEvent.location }}</h5>
          <p>{{ towerEvent.description }}</p>
          <div>
            <button class="btn btn-outline-dark" @click="attendEvent()">
              Attend Event!
            </button>
          </div>
        </div>
      </div>
      <div class="text-light">Attendees:</div>
      <div v-for="a in attendees" :key="a.id">
        <img :src="a.account.picture" alt="" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
import { towerEventService } from '../services/TowerEventService.js'
import { AppState } from '../AppState.js'
import { attendeesService } from '../services/AttendeesService.js'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        await towerEventService.getByTowerEventId(route.params.id)
        await attendeesService.getAttendeesByEventId(route.params.id)
      } catch (error) {
        Pop.toast(error.messaage, "ERROR!")
        logger.log(error)
      }
    })
    return {
      towerEvent: computed(() => AppState.activeEvent),
      attendees: computed(() => AppState.eventAttendees),

      async attendEvent() {
        try {
          await attendeesService.attendEvent({ eventId: route.params.id })
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.coverimg {
  max-height: 200px;
  max-width: 100%;
}
</style>