<template>
  <div class="d-flex align-center justify-space-around w-100">
    <div class="left">
      <div class="d-flex align-center flex-column">
        <div class="object">{{ object.icon }}</div>
        <div>{{ object.name }}</div>
      </div>
    </div>
    <div class="d-flex flex-column w-50">
      <v-card v-for="recruit in recruits" :key="recruit.id" class="my-2 w-100">
        <v-card-title>{{ recruit.title }}</v-card-title>
        <v-card-text>
          <p>{{ recruit.description }}</p>
          <p>시급 ${{ recruit.pay }}</p>
          <v-btn size="small" color="secondary" class="mt-4" @click="getJob(recruit.id)">
            지원하기
          </v-btn>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { locationObjects, jobs } from '@/game-data'

export default defineComponent({
  name: 'FindJob',

  data() {
    return {
      object: locationObjects.find(object => object.id === 4),
    }
  },

  computed: {
    recruits() {
      return jobs.filter(job => job.location === this.object.targetLocation);
    },
  },

  methods: {
    getJob(id: number) {
      this.$store.dispatch('getJob', id);
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