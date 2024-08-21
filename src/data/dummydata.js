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

// capitalised members!
// postman suggests the api versions are lowercase
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