<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div
        class="todo"
        v-for="todo in allTodos"
        :key="todo.id"
        :class="{'is-complete': todo.completed}"
        @dblclick="updateTodo(todo)"
      >
        <span>{{ todo.title }}</span>
        <span @click="deleteTodo(todo)" class="fas fa-trash-alt todo-delete"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
    updateTodo(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.$store.dispatch("updateTodo", updatedTodo);
    }
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
.todo {
  background: #41b883;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  position: relative;
}
.is-complete {
  background: #0c86d8;
}
.todo-delete {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 5px;
  height: 5px;
  display: inline-block;
}
</style>
