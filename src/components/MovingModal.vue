<template>
  <v-dialog v-model="open" transition="dialog-bottom-transition" persistent>
    <v-card :min-width="400" class="d-flex align-center justify-center pb-16" color="grey-lighten-2">
      <div class="d-flex flex-column align-center">
        <div class="icon">
          {{ $store.getters.vehicle.icon }}
        </div>
        <v-progress-linear :model-value="progress" color="secondary" />
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MovingModal',

  watch: {
    open() {
      this.progress = 0;

      if(this.open) {
        this.moving();
      }
    }
  },

  data() {
    return {
      progress: 0,
    }
  },

  computed: {
    open() {
      return this.$store.getters.movingModal;
    }
  },

  methods: {
    moving() {
      const interval = setInterval(() => {
        this.progress += 4;

        if (this.progress >= 100) {
          clearInterval(interval);
          this.close();
        }
      }, 100);
    },
    close() {
      setTimeout(() => {
        this.$store.commit('setMovingModal', false);
      }, 200);
    }
  },

})
</script>

<style lang="scss" scoped>
.icon {
  font-size: 120px;
  transform: scale(-1, 1);
}
</style>