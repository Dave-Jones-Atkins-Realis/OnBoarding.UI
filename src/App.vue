<script setup>
import { ref } from 'vue';
import dummyData from './data/dummydata.js';

const notices = ref(dummyData.notices);
const users = ref(dummyData.users);
const selectedNoticeId = ref(null);

const getUserName = (authorId) => {
  const user = users.value.find(user => user.Id === authorId);
  return user ? user.Name : 'Unknown';
};

const addNotice = (contents) => {
  let newNotice = {
    Id: notices.value.length + 1,
    Author: 2,
    Title: "New Notice Title",
    Contents: contents,
    TimeStamp: new Date().getTime()
  };
  notices.value.push(newNotice);
  console.log(contents);
  return true;
};

const deleteNoticeById = (id) => {
  const index = notices.value.findIndex(notice => notice.Id === id);
  if (index !== -1) {
    notices.value.splice(index, 1);
  }
  return true;
};
</script>

<template>
  <header>
    
  </header>

  <main>
    <div class="center-horizontally">
      
      <img src="./assets/OnBoarding.png" alt="Notice Board" >
      <h1>OnBoarding App</h1>
    </div>

    <ul>
      <li v-for="notice in notices" :key="notice.Id">
        {{notice}}
      </li>
    </ul>
    <select v-model="selectedNoticeId" id="notices">
      <option v-for="notice in notices" :key="notice.Id" :value="notice.Id">
        {{getUserName(notice.Author) + ': ' + notice.Title}}
      </option>  
    </select>
    <button @click="deleteNoticeById(selectedNoticeId)"> Remove</button>
    <button @click="addNotice('some content')"> Add</button>
  </main>
</template>

<style scoped>
  .center-horizontally {
      margin: 0 auto;
      width: 50%; /* Adjust as needed */
  }
</style>