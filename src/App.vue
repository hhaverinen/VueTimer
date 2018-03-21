<template>
  <div id="app">
    <Timer date="May 31, 2019"/>
  </div>
</template>

<script>
import Timer from './components/Timer.vue'

export default {
  name: 'App',
  components: {
    Timer
  }
}
</script>

<style scoped>
#app {

}
</style>
