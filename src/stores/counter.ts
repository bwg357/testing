import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { TodoItem } from '@/types/TodoItem.type'

export const useCounterStore = defineStore('counter', () => {
  const ready = ref(false)
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function goReady() {
    ready.value = !ready.value
  }

  return { count, doubleCount, increment, goReady, ready }
})

export const useTodoListStore = defineStore('TodoList', {
  state: () => ({
    todoList: [],
    id: 0
  }),
  actions: {
    addTodo() {
      this.todoList.push()
    }
  }
})