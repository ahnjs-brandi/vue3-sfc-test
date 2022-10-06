<template>
  <v-dialog v-model="modal.open">
    <v-card
      :min-width="400"
      class="pa-8"
      color="d-flex flex-column align-center"
    >
      <div v-if="modal.icon" class="icon">
        {{ modal.icon }}
      </div>
      <div v-if="modal.title">
        {{ modal.title }}
      </div>
      <div v-if="modal.message" class="mb-4">
        {{ modal.message }}
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessageModal',

  computed: {
    modal() {
      return this.$store.getters.messageModal;
    }
  },
})
</script>

<style lang="scss" scoped>
.icon {
  font-size: 80px;
}
</style>