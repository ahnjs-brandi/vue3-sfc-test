<template>
  <v-card color="grey-darken-4" class="pa-2 d-flex" >
    <v-card
      v-for="location in locations"
      :key="location.id"
      class="px-4 py-3 ma-2"
      :class="{'bg-primary': here.id === location.id }"
      @click="goLocation(location)"
    >
      <span class="text-h4">
        {{ location.icon }}
      </span>
      <v-tooltip activator="parent" location="bottom">
        {{ location.name }}
      </v-tooltip>
    </v-card>
  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { locations } from '@/game-data'
import { Location } from '@/types'

export default defineComponent({
  name: 'LocationBox',

  data() {
    return {
      locations,
    }
  },

  computed: {
    here() {
      return this.$store.getters.here;
    }
  },

  methods: {
    goLocation(location: Location) {
      this.$store.dispatch('goLocation', location);
    }
  }
})
</script>
