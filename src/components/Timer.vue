<template>
  <div class="timer-wrapper">
    <div class="block">
      <p>{{ days }}</p>
      <p>Days</p>
    </div>
    <div class="block">
      <p>{{ hours }}</p>
      <p>Hours</p>
    </div>
    <div class="block">
      <p>{{ minutes }}</p>
      <p>Minutes</p>
    </div>
    <div class="block">
      <p>{{ seconds }}</p>
      <p>Seconds</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      now: new Date()
    }
  },
  computed: {
    seconds() {
        return this.now.getSeconds();
    },
    minutes() {
        return this.now.getMinutes();
    },
    hours() {
        return this.now.getHours();
    },
    days() {
        return this.now.getDate();
    }
  },
  mounted() {
    setInterval(() => {
        this.now = new Date();
    },1000);
  }
}
</script>

<style scoped>
#timer-wrapper {

}

.block {
  display: inline-block;
  padding: 10px;
}
</style>
