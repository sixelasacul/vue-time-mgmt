<template>
  <v-card>
    <v-list>
      <v-subheader>Manage Timers</v-subheader>
      <v-list-item
        v-for="timer in list"
        :key="timer"
      >
        <v-list-item-title>{{ timer }}</v-list-item-title>
        <v-btn
          outlined
          color="secondary"
          class="mx-4"
        >
          Edit
        </v-btn>
        <v-btn
          outlined
          color="danger"
          class="mx-4"
        >
          Remove
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn
          outlined
          color="primary"
        >
          Add
        </v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "TimersMgmt",
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>