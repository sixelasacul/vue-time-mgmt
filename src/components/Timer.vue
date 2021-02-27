Each timer maintains their own interval for now. It's simpler this way than
passing events from the parent to the children. We may benefit from having
one central interval to power any timer.

<template>
  <div>
    <button v-on:click='onToggle'>{{ name }}</button>
    <p>{{ elapsedTime }}</p>
  </div>
</template>

<script>
import {formatTimer, initialTime, second} from '../utils/timer'
export default {
  name: 'Timer',
  props: {
    name: {
      type: String,
      required: true
    },
    isEnabled: {
      type: Boolean,
      required: true
    },
    onToggle: {
      type: Function,
      required: true
    },
    onTick: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      time: initialTime,
      interval: null
    }
  },
  created() {
    this.interval = setInterval(this.tick, second)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  computed: {
    elapsedTime() {
      return formatTimer(this.time)
    }
  },
  methods: {
    tick() {
      if(this.isEnabled) {
        this.time = this.time + second
        this.onTick(this.time)
      }
    }
  }
  
}
</script>

<style>

</style>