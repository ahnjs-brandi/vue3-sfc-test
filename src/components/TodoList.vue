<template>
  <div class="text-h6">TODO LIST</div>
  <v-list bg-color="transparent">
    <v-list-item v-for="todo in todoList" :key="todo.title" >
      <template v-slot:prepend>
        <v-icon
          :icon="$store.getters.todoChecked.includes(todo.id) ? 'check_box' : 'check_box_outline_blank'"
        />
      </template>
      <v-list-item-title>
        {{ todo.title }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoList',

  computed: {
    todoList() { return this.$store.getters.todoList; },
  },
})
</script>
