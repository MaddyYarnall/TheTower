<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="card p-5 mt-2 text-light shadow imgheader">
          <p>Reserve your spot at any event</p>
          <p>Skip the lines, no extra fees</p>
          <p>That's the power of Tower</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 p-2 mt-3 shadow thepages">
        <div class="pagenames d-flex justify-content-between text-center m-0">
          <p class="p-2 selectable">All</p>
          <p class="p-2 selectable">Concerts</p>
          <p class="p-2 selectable">Events</p>
          <p class="p-2 selectable">Expos</p>
          <p class="p-2 selectable">Sports</p>
          <p class="p-2 selectable">Conventions</p>
          <p class="p-2 selectable">Exhibits</p>
          <button class="btn btn-outline-secondary btn-small">
            + New Event
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <TowerEvent v-for="t in towerEvents" :key="t.id" :towerEvent="t" />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
  setup() {
    return {
      towerEvents: computed(() => AppState.towerEvents)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.imgheader {
  font-family: "Alegreya Sans", sans-serif;
  border-color: #09dcfb;
  background-image: url("https://images.unsplash.com/photo-1546707012-c46675f12716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80");
  background-position-y: 67%;
  background-position-x: 0%;
}

.thepages {
  background-color: #444444;
}

.eventcard {
  height: 30vh;
  width: 40vh;
  background-image: url("https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  border-color: #444444;
  border-width: 4px;
}

.eventcard:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

.text-block {
  position: absolute;
  bottom: 0px;
  // right: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  // padding-left: 20px;
  // padding-right: 20px;
}

.pagenames {
  color: #09dcfb;
}
</style>
