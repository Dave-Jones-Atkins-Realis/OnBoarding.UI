<script setup>
import { ref } from 'vue';
import { notices as noticeData, users as userData } from './data/dummydata.js';

const notices = ref(noticeData);
const users = ref(userData);
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

    <div >
      app.vue header
    </div>
  </header>

  <main>
    app.vue main
  </main>
</template>

<style scoped>

</style>
