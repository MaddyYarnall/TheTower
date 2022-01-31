<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="text-light text-center p-4 dafooter">©Tower Inc. 2022</div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.dafooter {
  background-color: #303030;
}

main {
  background-color: #303030;
}
</style>
