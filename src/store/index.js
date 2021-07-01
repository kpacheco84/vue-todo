import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'Wake up', done: false, dueDate: '2020-10-16' },
      { id: 2, title: 'Code', done: false, dueDate: '2020-10-17' },
      { id: 3, title: 'Coffee', done: false, dueDate: null },
    ],
    snackbar: {
      show: false,
      text: '',
    },
  },
  mutations: {
    addTask(state, newTaskTitle) {
      console.log('add task')

      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      }

      state.tasks.push(newTask)
      //  (this.newTaskTitle = '')
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id)
    },
    updateTaskTitle(state, payload) {
      console.log(payload)
      let task = state.tasks.filter((task) => task.id === payload.id)[0]

      task.title = payload.title
    },
    updateTaskDueDate(state, payload) {
      console.log(payload)
      let task = state.tasks.filter((task) => task.id === payload.id)[0]

      task.dueDate = payload.dueDate
    },
    showSnackbar(state, text) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout)
    },
    hideSnackbar(state) {
      state.snackbar.show = false
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task added!')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id), commit('showSnackbar', 'Task Deleted')
    },
    updateTaskTitle({ commit }, payload) {
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Task Updated')
    },
    updateTaskDueDate({ commit }, payload) {
      commit('updateTaskDueDate', payload)
      commit('showSnackbar', 'Task Due Date Updated')
    },
  },
  getters: {},
})
