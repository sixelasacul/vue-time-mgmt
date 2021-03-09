Each timer maintains their own interval for now. It's simpler this way than
passing events from the parent to the children. We may benefit from having
one central interval to power any timer.

<template>
  <v-list-item-content>
    <v-list-item-title>
      {{ name }}
    </v-list-item-title>
    <v-list-item-subtitle>
      {{ elapsedTime }}
    </v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
import { formatTimer, initialTime, second } from "../utils/timer"
export default {
  name: "TimerItem",
  props: {
    name: {
      type: String,
      required: true
    },
    isEnabled: {
      type: Boolean,
      required: true
    },
    baseTime: {
      type: Number,
      required: false,
      default: initialTime
    },
    onToggle: {
      type: Function,
      required: false,
      default: () => {}
    },
    onTick: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      time: this.baseTime,
      interval: null
    }
  },
  computed: {
    elapsedTime() {
      return formatTimer(this.time)
    }
  },
  created() {
    this.interval = setInterval(this.tick, second)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    tick() {
      if (this.isEnabled) {
        this.time = this.time + second
        this.onTick(this.time)
      }
    }
  }
}
</script>

<style>
</style>