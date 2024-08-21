<template>  
  <div class="center-horizontally">
    <img src="./assets/OnBoarding.png" alt="Notice Board" >
    <h1>OnBoarding App</h1>
  </div>
  <div>
    <h2>Notices</h2>
    <ul>
      <li v-for="notice in notices" :key="notice.id">
        {{ notice.title }} by {{ getUserName(notice.authorId) }}
        <button @click="deleteNoticeById(notice.id)"> Delete </button>
      </li>
    </ul>
    <input v-model="newNoticeContent" placeholder="New Notice Content" />
    <button @click="addNotice(newNoticeContent)" :disabled="true"> Add notice </button>
  </div>

  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button @click="deleteUserById(user.id)"> Delete </button>
      </li>
    </ul>
    <input v-model="newUserName" placeholder="New User Name" />
    <button @click="addUser(newUserName)" :disabled="true"> Add User </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
/*
import dummyData from './data/dummydata.js';
const notices = ref(dummyData.notices);
const users = ref(dummyData.users);
*/
const notices = ref([]);
const users = ref([]);
const newNoticeContent = ref('');
const newUserName = ref('');

const getUserName = (authorId) => {
  const user = users.value.find(user => user.id === authorId);
  return user ? user.name : 'Unknown';
};

const addNotice = (textContent) => {
  let newNotice = {
    id: notices.value.length + 1,
    authorId: 2,
    title: "New Notice Title",
    content: textContent,
    timeStamp: new Date().getTime()
  };
  notices.value.push(newNotice);
};

const addUser = (userName) => {
  let newUser = {
    id: users.value.length + 1,
    name: userName
  };
  users.value.push(newUser);
};

/*
const deleteNoticeById = (id) => {
  const index = notices.value.findIndex(notice => notice.id === id);
  if (index !== -1) {
    notices.value.splice(index, 1);
  }
};

const deleteUserById = (id) => {
  const index = users.value.findIndex(user => user.id === id);
  if (index !== -1) {
    users.value.splice(index, 1);
  }
};
*/

const error = ref(null);

const getNotices = async () => {
  try {
    const response = await axios.get('https://localhost:7109/api/posts/');
    notices.value = response.data;
  } catch (err) {
    console.error('Error fetching notices:', err);
    error.value = err;
  }
};
const getUsers = async () => {
  try {
    const response = await axios.get('https://localhost:7109/api/users/');
    users.value = response.data;
  } catch (err) {
    console.error('Error fetching users:', err);
    error.value = err;
  }
};
/*
const postUser = async () => {
  try {
    const newPost = { id: 7, name: 'Elvis' };
    const response = await axios.post('https://localhost:7109/api/users/', newPost);
    console.log(response.data);
  } catch (err) {
    console.error('Error posting data:', err);
    error.value = err;
  }
};*/

const deleteUserById = async (id) => {
  try {
    const response = await axios.delete('https://localhost:7109/api/users/' + id);
    console.log(response.data);
  } catch (err) {
    console.error('Error deleting data:', err);
    error.value = err;
  }
};

// lifecycle hook can't be async, despite calling async fetch()
onMounted(() => {
  getUsers();
  getNotices();
});
</script>

<style scoped>
  .center-horizontally {
    margin: 0 auto;
    width: 50%; /* Adjust as needed */
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
