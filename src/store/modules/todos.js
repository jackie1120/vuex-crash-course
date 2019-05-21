import axios from "axios";

//import axios from 'axios'

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  addTodo(state, todo) {
    state.todos.unshift(todo);
  },
  delete(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  update(state, updatedTodo) {
    let index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    state.todos.splice(index, 1, updatedTodo);
  }
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get("http://jsonplaceholder.typicode.com/todos");
    commit("setTodos", res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post("http://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    });
    commit("addTodo", res.data);
  },
  async deleteTodo({ commit }, todo) {
    await axios.delete(`http://jsonplaceholder.typicode.com/todos/${todo.id}`);
    commit("delete", todo.id);
  },
  async filterTodo({ commit }, limit) {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("setTodos", res.data);
  },
  async updateTodo({ commit }, updatedTodo) {
    const res = await axios.put(
      `http://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
      updatedTodo
    );
    commit("update", res.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
