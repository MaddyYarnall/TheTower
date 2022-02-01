<template>
  <button
    class="btn btn-outline-secondary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    + New Event
  </button>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel" class="neweventheader">
        Create A New Event!
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form @submit.prevent="createEvent()">
        <input
          type="text"
          placeholder="Event Name..."
          v-model="newEvent.name"
          required="true"
          class="border border-info border-2 m-3"
        />
        <input
          type="text"
          placeholder="Description..."
          v-model="newEvent.description"
          required="true"
          class="border border-info border-2 m-3"
        />
        <input
          type="datetime"
          placeholder="Date..."
          v-model="newEvent.startDate"
          required="true"
          class="border border-info border-2 m-3"
        />
        <input
          type="text"
          placeholder="Location..."
          v-model="newEvent.location"
          required="true"
          class="border border-info border-2 m-3"
        />
        <input
          type="number"
          min="1"
          placeholder="Capacity..."
          required="true"
          class="border border-info border-2 m-3"
        />
        <input
          type="text"
          placeholder="Image..."
          required="true"
          class="border border-info border-2 m-3"
        />
        <div>
          <button type="submit" class="btn btn-outline-info">
            Create Event!
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { towerEventService } from '../services/TowerEventService.js'
export default {
  setup() {
    const newEvent = ref({})
    const router = useRouter()
    return {
      newEvent,
      async createEvent() {
        try {
          const id = await towerEventService.createEvent(newEvent.value)
          router.push({
            name: 'TowerEvent',
            params: { id }
          })
        } catch (error) {

        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.neweventheader {
  color: black;
}
</style>