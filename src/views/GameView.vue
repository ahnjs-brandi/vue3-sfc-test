<template>
  <v-container fluid style="min-width: 1024px">
    <v-row>
      <v-col cols="3">
        <StatusBox />
        <TimeBox />
      </v-col>
      <v-col cols="6">
        <LocationBox />
        <IndoorBox />
      </v-col>
      <v-col cols="3">
        <TodoList />

        <pre>{{ $store.getters.state }}</pre>

      </v-col>
    </v-row>
    <div class="mt-12">
      <v-btn size="small" @click="restart">Restart</v-btn>
    </div>
  </v-container>

  <MovingModal />
  <MessageModal />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TimeBox from '@/components/TimeBox.vue'
import LocationBox from '@/components/LocationBox.vue'
import StatusBox from '@/components/StatusBox.vue'
import TodoList from '@/components/TodoList.vue'
import IndoorBox from '@/components/IndoorBox.vue'
import MovingModal from '@/components/MovingModal.vue'
import MessageModal from '@/components/MessageModal.vue'

export default defineComponent({
  name: 'GameView',

  components: {
    TimeBox,
    LocationBox,
    StatusBox,
    TodoList,
    IndoorBox,
    MovingModal,
    MessageModal,
  },

  data() {
    return {
      snackbar: true,
    }
  },

  methods: {
    restart() {
      this.$store.dispatch('restart');
    }
  }
})
</script>

