<template>
  <div class="about text-center text-light">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h3 class="yoevents mx-3">Your Created Events</h3>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center mx-4 my-4">
      <div class="col-md-4">
        <div class="card yourevent">
          <div class="text-block">
            <h3 class="text-center">The Event</h3>
            <p class="p-2">March 11th, 2022 at the Ford Idaho Center</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card yourevent2">
          <div class="text-block">
            <h3 class="text-center">The Event</h3>
            <p class="p-2">March 11th, 2022 at the Ford Idaho Center</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card yourevent3">
          <div class="text-block">
            <h3 class="text-center">The Event</h3>
            <p class="p-2">March 11th, 2022 at the Ford Idaho Center</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

.about {
  font-family: "Alegreya Sans", sans-serif;
}

.yoevents {
  color: #09dcfb;
  font-family: "Alegreya Sans", sans-serif;
}

.yourevent {
  height: 30vh;
  width: 40vh;
  background-image: url("https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  border-color: #444444;
  border-width: 4px;
}

.yourevent:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

.yourevent2 {
  height: 30vh;
  width: 40vh;
  background-image: url("https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  border-color: #444444;
  border-width: 4px;
}

.yourevent2:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

.yourevent3 {
  height: 30vh;
  width: 40vh;
  background-image: url("https://images.unsplash.com/photo-1550184658-ff6132a71714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1389&q=80");
  background-size: cover;
  border-color: #444444;
  border-width: 4px;
}

.yourevent3:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

.text-block {
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
}
</style>
