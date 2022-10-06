<template>
  <div class="d-flex align-center justify-space-around w-100">
    <div class="left">
      <div class="object">{{ object.icon }}</div>
    </div>
    <div class="d-flex flex-column">
      <v-btn v-if="energy < 100" color="secondary" size="large" @click="sleep">
        잠자기
      </v-btn>
      <v-btn v-else color="grey" size="large" disabled>
        잘잤다..
      </v-btn>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { locationObjects } from '@/game-data'

export default defineComponent({
  name: 'HomeBed',

  data() {
    return {
      object: locationObjects.find(object => object.id === 2),
    }
  },

  computed: {
    energy() {
      return this.$store.getters.energy;
    },
  },

  methods: {
    sleep() {
      this.$store.dispatch('sleep');
    },
  },
})
</script>

<style lang="scss" scoped>
.left {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  .object {
    font-size: 120px;
  }
}
</style>