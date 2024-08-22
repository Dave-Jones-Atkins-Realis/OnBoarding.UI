<template>  
  <div class="full-width">
    <img src="./assets/OnBoarding.png" alt="Notice Board">
    <h1>OnBoarding App</h1>
  </div>

  <div class="column">
    <h2>Notices</h2>
    <ul>
      <li v-for="notice in notices" :key="notice.id">
        {{ notice.title }} by {{ findUserName(notice.authorId) }}
        <button @click="deleteNoticeById(notice.id)">Delete</button>
      </li>
    </ul>
    <div class="form-group">
      <label for="user">User</label>
      <select v-model="selectedUser" id="user" name="user">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <input v-model="newNoticeTitle" type="text" id="title" name="title">
    </div>
    <div class="form-group">
      <label for="newNoticeContent">Content</label>
      <input v-model="newNoticeContent" placeholder="New Notice Content">
      <button @click="addNotice">Add notice</button>
    </div>
  </div>

  <div class="column">
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button @click="deleteUserById(user.id)">Delete</button>
      </li>
    </ul>
    <input v-model="newUserName" placeholder="New User Name">
    <button @click="postUser">Add User</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const notices = ref([]);
const users = ref([]);
const newNoticeTitle = ref('');
const newNoticeContent = ref('');
const newUserName = ref('');
const selectedUser = ref('');
const error = ref(null);
const isLoading = ref(false);

const findUserName = (authorId) => {
  const user = users.value.find(user => user.id === authorId);
  return user ? user.name : 'Unknown';
};

const getNotices = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get('https://localhost:7109/api/posts/');
    notices.value = response.data;
  } catch (err) {
    console.error('Error fetching notices:', err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

const getUsers = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get('https://localhost:7109/api/users/');
    users.value = response.data;
  } catch (err) {
    console.error('Error fetching users:', err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

const postUser = async () => {
  if (!newUserName.value.trim()) {
    error.value = 'User name cannot be empty.';
    return;
  }
  isLoading.value = true;
  try {
    const createUserDto = { name: newUserName.value };
    const response = await axios.post('https://localhost:7109/api/users/', createUserDto);
    users.value.push(response.data); // Update users list
    newUserName.value = ''; // Clear input
  } catch (err) {
    console.error('Error posting user:', err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

const deleteUserById = async (id) => {
  isLoading.value = true;
  try {
    await axios.delete('https://localhost:7109/api/users/' + id);
    users.value = users.value.filter(user => user.id !== id); // Update users list
  } catch (err) {
    console.error('Error deleting user:', err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

const addNotice = async () => {
  if (!newNoticeTitle.value.trim() || !newNoticeContent.value.trim() || !selectedUser.value) {
    error.value = 'All fields are required.';
    return;
  }
  isLoading.value = true;
  try {
    const newNotice = {
      title: newNoticeTitle.value,
      content: newNoticeContent.value,
      authorId: selectedUser.value
    };
    const response = await axios.post('https://localhost:7109/api/posts/', newNotice);
    notices.value.push(response.data); // Update notices list
    newNoticeTitle.value = ''; // Clear input
    newNoticeContent.value = ''; // Clear input
  } catch (err) {
    console.error('Error adding notice:', err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getUsers();
  getNotices();
});
</script>

<style scoped>
  .full-width {
    width: 100%;
    background-color: #f1f1f1;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .full-width img {
    margin-right: 10px;
  }
  .column {
    float: left;
    width: 50%;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 1.5em;
    margin-top: 1em;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0.5em 0;
  }
  button {
    margin-left: 1em;
  }
  input {
    margin-right: 1em;
  }
</style>
