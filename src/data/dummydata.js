const notices = [
    {
        id : 1,
        author : 1,
        title : "ooh crikey",
        contents : "Watch out Grandma, here comes a lawnmower.",
        timeStamp: new Date().getTime()
    },
    {
        id : 2,
        author : 1,
        title : "ra ra ra",
        contents : "Mower Liberation Front.",
        timeStamp: new Date().getTime()
    },
    {
        id : 3,
        author : 2,
        title : "Up the Irons",
        contents : "Scream for me, Merthyr Tydfil.",
        timeStamp: new Date().getTime()
    }
]

const users = [
    {
        id : 1,
        name : "Fred Bloggs"
    },
    {
        id : 2,
        name : "Dobbin"
    }
]

export default { notices, users };


/* interface (ish) -------------------------

import dummyData from './data/dummydata.js';
const notices = ref(dummyData.notices);
const users = ref(dummyData.users);

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

-------------------------------------------*/