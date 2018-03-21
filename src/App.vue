<template>
  <div id="app">
    <h1 class="header-text"><span>Project</span> GO LIVE in:</h1>
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

<style>
#app {
  display: block;
  width: 50%;
  margin: 300px auto 0;
  text-align: center;
  color: white;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
  font-size: 32px;
}

.header-text {
  font-weight: bold;
  font-size:
}

.header-text > span {
  color: red;
}
</style>
