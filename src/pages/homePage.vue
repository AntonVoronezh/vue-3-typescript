<template>
  <div v-if="isUserLogged">user is logged {{ getUser }}</div>
  <div v-else>
    <button @click="handleLoginClick" class="btn btnPrimary">fffff</button>
  </div>

  <br />
  <br />
  <br />

  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.name }}</p>
      <p>{{ user.isAdmin ? "+++" : "---" }}</p>
    </li>
  </ul>

  количсевто = {{ getAllUsers.length }}

  <div>
    {{ getUserById }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 3,
    };
  },
  methods: {
    handleLoginClick() {
      this.$store.dispatch("setUser", [123, 123]);
    },
  },
  computed: {
    isUserLogged() {
      return this.$store.getters.isUserLogged;
    },
    getAllUsers() {
      return this.$store.getters.getAllUsers;
    },
    getUser() {
      return this.$store.getters.getUser;
    },
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getUserById() {
      return this.$store.getters.getUserById(this.userId);
    },
  },
};
</script>
