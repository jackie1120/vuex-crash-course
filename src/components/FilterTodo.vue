<template>
  <div>
    <h3>Filter</h3>
    <select v-model="limit" @change="filterTodo(limit)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodo",
  data() {
    return {
      limit: 200
    };
  },
  methods: mapActions(["filterTodo"])
};
</script>

<style scoped>
div {
  text-align: left;
}
select {
  border: 1px solid #41b883;
  padding: 10px;
}
</style>
