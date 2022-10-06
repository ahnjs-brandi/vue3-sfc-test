<template>
  <v-container>
    <div class="my-16 text-center">
      <div class="text-h4 mb-12">THE VUE3 TEST</div>
      <v-row>
        <v-col v-for="ego in egos" :key="ego.name">
          <v-card
            class="py-8"
            :class="{'bg-primary': selectedEgo === ego }"
            @click="selectEgo(ego)"
          >
            <v-card-text>
              <div class="text-h1">
                {{ ego.icon }}
              </div>
              <div class="text-h6 mt-4">
                {{ ego.name }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="mt-12">
        <template v-if="!selectedEgo">
          <p class="text-h6">CHOOSE YOUR EGO</p>
        </template>
        <template v-else>
          <v-btn size="x-large" color="primary" @click="startGame">start</v-btn>
        </template>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Ego } from '@/types/index';
import { egos } from '@/game-data';

export default defineComponent({
  name: 'HomeView',

  data() {
    return {
      egos,
      selectedEgo: null,
    };
  },

  methods: {
    selectEgo(ego: Ego) {
      this.selectedEgo = ego;
    },
    startGame() {
      this.$store.commit('setEgo', this.selectedEgo);
      this.$store.dispatch('saveGame');

      this.$router.push('/game');
    },
  },
});
</script>
