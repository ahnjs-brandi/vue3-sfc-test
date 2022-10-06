<template>
  <div class="d-flex align-center justify-space-around w-100">
    <div class="left">
      <div class="object">{{ object.icon }}</div>
    </div>
    <div class="d-flex flex-column">
      <div class="d-flex align-center" style="width: 200px">
        <v-img src="@/assets/emoji-icon-fridge.png" width="40px" />
        <v-progress-linear v-model="stockPercent" color="primary" />
      </div>
      <template v-if="fridgerAvailable">
        <v-btn
          v-for="n of fridgerAvailable / 3"
          :key="n"
          size="large"
          color="secondary"
          class="my-3"
          @click="buyFood(n)"
        >
          {{ n === fridgerAvailable / 3 ? '냉장고 채우기' :   `${n}일치 장보기` }}
          <template v-slot:prepend>
            <div class="price-phill">
              ${{ n * this.price }}
            </div>
          </template>
        </v-btn>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { locationObjects, groceries } from '@/game-data'
import _ from 'lodash'

export default defineComponent({
  name: 'ShoppingCart',

  data() {
    return {
      object: locationObjects.find(object => object.id === 3),
      price: 20,
    }
  },

  computed: {
    foodStock() {
      return this.$store.getters.foodStock;
    },
    fridgerAvailable() {
      return 18 - this.foodStock.length;
    },
    stockPercent() {
      return this.foodStock.length / 18 * 100;
    },
  },

  methods: {
    buyFood(day: number) {
      this.$store.dispatch('addFood', _.sampleSize(groceries, day * 3));
      this.$store.dispatch('spendCash', day * this.price);
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