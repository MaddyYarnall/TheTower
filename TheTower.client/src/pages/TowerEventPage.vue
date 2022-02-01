<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <p>Testing the card</p>
          <p>the event</p>
          <p>The event description</p>
        </div>
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
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        await towerEventService.getByTowerEventId(route.params.id)
      } catch (error) {
        Pop.toast(error.messaage, "ERROR!")
        logger.log(error)
      }
    })
    return {
      towerEvent: computed(() => AppState.activeEvent)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>