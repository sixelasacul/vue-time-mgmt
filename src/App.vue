<template>
  <v-app>
    <v-app-bar
      app
      flat
      outlined
      rounded=""
    >
      <v-app-bar-title> Time Management </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card
          outlined
          rounded
        >
          <timers-list :list="timers" />
          <v-dialog
            v-model="dialog"
            max-width="800"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                elevation="0"
                absolute
                bottom
                right
                color="secondary"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
            </template>
            <timers-mgmt :list="timers" />
          </v-dialog>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TimersList from './components/TimersList.vue'
import TimersMgmt from './components/TimersMgmt.vue'

export default {
  name: "App",
  components: {
    TimersMgmt,
    TimersList
  },
  data: function () {
    return {
      timers: ["In Team Meeting", "In Development", "Not Working", "Helping"],
      dialog: false
    }
  },
  methods: {}
}
</script>

<style>
</style>
