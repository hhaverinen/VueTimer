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
      now: new Date(),
      d_day: new Date(2018,4,31)
    }
  },
  computed: {
    seconds() {
        return Math.floor(((this.d_day - this.now) / 1000) % 60);
    },
    minutes() {
        return Math.floor(((this.d_day - this.now) / (1000 * 60)) % 60);
    },
    hours() {
        return Math.floor(((this.d_day - this.now) / (1000 * 60 * 60)) % 24);
    },
    days() {
        return Math.floor((this.d_day - this.now) / (1000 * 60 * 60 * 24));
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
