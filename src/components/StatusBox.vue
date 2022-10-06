<template>
  <div class="d-flex">
    <div>
      <div class="text-h2 mx-2 mt-4">{{ ego.icon }}</div>
      <div class="ma-2 text-center">{{ ego.name }}</div>
    </div>
    <div class="pl-4 flex-grow-1">
      <div class="text-caption mt-2">배고픔</div>
      <v-progress-linear
        :model-value="$store.getters.calory"
        :color="$store.getters.calory > 20 ? 'primary' : 'error'"
      />
      <div class="text-caption mt-2">체력</div>
      <v-progress-linear
        :model-value="$store.getters.energy"
        :color="$store.getters.energy > 20 ? 'primary' : 'error'"
      />
    </div>
  </div>

  <v-list density="compact" bg-color="grey-darken-4" class="mt-4">
    <v-list-item>
      <template v-slot:prepend>
        <span class="mr-4" style="font-size: 28px">💵</span>
      </template>
      <v-list-item-title>
        ${{ $filters.number(cash) }}
      </v-list-item-title>
    </v-list-item>
    <v-list-item>
      <template v-slot:prepend>
        <span class="mr-4" style="font-size: 28px">🪪</span>
      </template>
      <v-list-item-title>
        {{ jobLocation.name }} {{ job.title }}
      </v-list-item-title>
    </v-list-item>
    <v-list-item>
      <template v-slot:prepend>
        <span class="mr-4 my-n2" style="font-size: 28px">{{ vehicle.icon }}</span>
      </template>
      <v-list-item-title>
        {{ vehicle.speed }} Km/h
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { locations } from '@/game-data'

export default defineComponent({
  name: 'StatusBox',

  computed: {
    here() { return this.$store.getters.here; },
    ego() { return this.$store.getters.ego; },
    cash() { return this.$store.getters.cash; },
    job() { return this.$store.getters.job; },
    jobLocation() { return locations.find(l => l.id === this.job.location)},
    vehicle() { return this.$store.getters.vehicle; },
  }
})
</script>
