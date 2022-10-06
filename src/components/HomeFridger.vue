<template>
  <div class="fridger">
    <v-img
      src="@/assets/emoji-icon-fridge.png"
      class="door"
      :class="{'open': opened}"
      @mouseover="open"
    />
    <div class="indoor">
      <div v-for="i in emptyCount" :key="i" class="food" />
      <div v-for="food in foodStock" :key="food" class="food" >
        {{ food }}
      </div>
    </div>
  </div>
  <div class="d-flex w-50 pl-8 justify-center">
    <template v-if="opened">
      <template v-if="$store.getters.calory < 100">
        <v-btn v-if="foodStock.length >= 3" size="large" color="secondary" @click="eat" >
          밥먹기
        </v-btn>
        <v-btn v-else size="large" color="grey" disabled >
          냉장고가 비었음...
        </v-btn>
      </template>
      <template v-else>
        <v-btn size="large" color="grey" disabled >
          배가 부릅니다
        </v-btn>
      </template>
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { groceries } from '@/game-data'
import _ from 'lodash'

export default defineComponent({
  name: 'HomeFridger',

  data() {
    return {
      opened: false,
      foodStock: [],
    }
  },

  computed: {
    emptyCount() {
      const totalSlot = 18;
      return totalSlot - this.foodStock.length;
    },
  },

  methods: {
    open() {
      this.opened = true;

      if (!this.$store.getters.todoChecked.includes(1)) {
        this.$store.dispatch('checkTodo', 1);
      }
    },
    eat() {
      this.foodStock.splice(0, 3);
      this.$store.dispatch('cook', this.foodStock);
    },
  },

  created() {
    if (!this.$store.getters.todoChecked.includes(1)) {
      this.foodStock = _.sampleSize(groceries, 12);
      this.$store.commit('setFoodStock', this.foodStock);
    } else {
      this.foodStock = this.$store.getters.foodStock;
    }
  }
})
</script>

<style lang="scss" scoped>
.fridger {
  position: relative;
  margin: 40px auto 0 auto;
  width: 256px;
  .door{
    position: absolute;
    top: -8px;
    left: -91px;
    width: 456px;
    z-index: 1;
    max-height: none;
    max-width: none;
    opacity: 1;
    transition: opacity .5s;
    &.open{
      opacity: 0;
    }
  }
  .indoor{
    position: relative;
    margin: 0 38px;
    height: 420px;
    overflow-y: hidden;
    background-color: #d0f1f6;
    border: 4px solid #00ACC1;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .food {
      font-size: 48px;
      width: 57px;
      height: 69px;
      border-bottom: 4px solid #84d7e1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
