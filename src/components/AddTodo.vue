<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit="submitForm">
      <input type="text" v-model="title" placeholder="Add todo ......">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submitForm(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  border: 1px solid #41b883;
  padding: 10px;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  border: 1px solid #41b883;
  color: white;
  cursor: pointer;
}
</style>
