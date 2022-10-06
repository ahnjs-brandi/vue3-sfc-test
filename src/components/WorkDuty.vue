<template>
  <div class="d-flex align-center justify-space-around w-100">
    <div class="left">
      <div class="d-flex align-center flex-column">
        <v-img :src="require(`@/assets/emoji-icon-money-stack.png`)" contain :width="120" class="my-4 mx-16" />
      </div>
    </div>
    <div class="d-flex flex-column w-50">
      <template v-if="energy < 1">
        <span>피곤해서 일을 할수가 없습니다.</span>
      </template>
      <template v-else-if="calory < 1">
        <span>배가 고파서 일을 할수가 없습니다.</span>
      </template>
      <template v-else>
        <v-switch v-model="working" color="primary">
          <template v-slot:label>
            {{ working ? '일 하는중...' : '일 시작하기' }}
            <v-progress-circular
              v-show="working"
              :indeterminate="working"
              size="24"
              class="ml-2"
            />
          </template>
        </v-switch>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WorkDuty',

  data() {
    return {
      working: false,
    }
  },

  watch: {
    working() {
      if (this.working) {
        setTimeout(() => {
          this.$store.dispatch('work');
          this.working = false;
        }, 1000)
      }
    }
  },

  computed: {
    energy() {
      return this.$store.getters.energy;
    },
    calory() {
      return this.$store.getters.calory;
    }
  }
})
</script>

<style lang="scss" scoped>
.left {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  // .object {
  //   font-size: 120px;
  // }
}
</style>