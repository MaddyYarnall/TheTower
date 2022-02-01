<template>
  <div class="col-md-3 mt-3 mx-4">
    <div class="card selectable eventcard">
      <div class="text-block">
        <h4 class="text-center">{{ towerEvent.name }}</h4>
        <p class="px-2">March 11 at the Ford Idaho Center</p>
        <p class="text-end px-2">200 Spots Remaining</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: { towerEvent: { type: Object, required: true } },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>