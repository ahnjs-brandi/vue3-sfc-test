<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  created () {
    this.$store.dispatch('loadGame');
  },
})
</script>

<style lang="scss">
body {
  user-select: none;
}
.v-btn .v-btn__content {
  margin-top: 2px;
}
.price-phill {
  background: #1a50a0;
  padding: 4px 8px;
  border-radius: 1rem;
  font-size: 14px;
}
</style>
