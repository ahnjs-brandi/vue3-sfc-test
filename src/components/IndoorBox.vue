<template>
  <v-card class="bg-grey-darken-4 pa-4 mt-4">
    <div class="text-h5 mb-4">{{ here.name }}</div>

    <div class="d-flex mx-n2">
      <v-card
        v-for="object in objects"
        :key="object.id"
        class="px-4 py-3 ma-2"
        :class="{'bg-primary': selected === object.id}"
        @click="select(object)"
      >
        <template v-if="object.src">
          <v-img :src="require(`@/assets/${object.src}`)" contain :width="object.width" />
        </template>
        <template v-else>
          <span class="text-h4">{{ object.icon }}</span>
        </template>
        <v-tooltip activator="parent" location="bottom">
          {{ object.name }}
        </v-tooltip>
      </v-card>

      <v-card
        v-if="here.id === job.location && here.id > 1"
        class="ma-2 coin-icon"
        :class="{'bg-primary': selected === 100}"
        @click="this.selected = 100"
      >
        <v-img :src="require(`@/assets/emoji-icon-money-stack.png`)" contain :width="42" />
        <v-tooltip activator="parent" location="bottom">
          일하기
        </v-tooltip>
      </v-card>
    </div>

    <div class="d-flex align-center pb-8">
      <HomeFridger v-if="selected === 1" />
      <HomeBed v-if="selected === 2" />
      <ShoppingCart v-if="selected === 3" />
      <FindJob v-if="selected === 4" />
      <WorkDuty v-if="selected === 100" />
      <FoodCourt v-if="selected === 5" />
    </div>

  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { locationObjects } from '@/game-data'
import { LocationObject } from '@/types'
import HomeFridger from '@/components/HomeFridger.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import HomeBed from '@/components/HomeBed.vue'
import FindJob from '@/components/FindJob.vue'
import WorkDuty from '@/components/WorkDuty.vue'
import FoodCourt from '@/components/FoodCourt.vue'

export default defineComponent({
  name: 'IndoorBox',

  components: {
    HomeFridger,
    HomeBed,
    ShoppingCart,
    FindJob,
    WorkDuty,
    FoodCourt
  },

  data() {
    return {
      selected: null,
    }
  },

  watch: {
    here() {
      this.selected = null;
    }
  },

  computed: {
    here() {
      return this.$store.getters.here;
    },
    objects() {
      return locationObjects.filter(object => object.location === this.here.id)
    },
    job() {
      return this.$store.getters.job;
    }
  },

  methods: {
    select(object: LocationObject) {
      this.selected = object.id;
    },
  },
})
</script>

<style lang="scss" scoped>
.coin-icon {
  padding: 8px 12px 12px 12px;
}
</style>
