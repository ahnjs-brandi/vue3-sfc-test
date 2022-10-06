<template>
  <v-card
    color="grey-darken-4"
    class="pa-4 text-center"
  >
    <v-progress-circular
      :model-value="timeProgress"
      :size="120"
      :width="16"
      :rotate="180"
      color="primary"
      class="mb-3"
    >
      <span class="text-h5 font-weight-medium">
        {{ $moment(now).format('h:mm') }}
      </span>
      <span class="font-weight-bold" style="font-size: 10px">
        {{ $moment(now).format('A') }}
      </span>
    </v-progress-circular>

    <p class="text-body-2 mt-2">
      {{ $moment(now).locale("ko").format('YYYY년 M월 D일 dddd') }}
    </p>
  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TimeBox',

  computed: {
    now() {
      return this.$store.getters.now;
    },
    timeProgress() {
      const hours = this.$moment(this.now).get('hour');
      const minutes = this.$moment(this.now).get('minute');
      const totalMinutes = hours * 60 + minutes;
      const progress = Math.round(totalMinutes / 1440 * 100);
      return progress;
    }
  },

})
</script>
