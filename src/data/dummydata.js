const notices = [
    {
        Id : 1,
        Author : 1,
        Title : "ooh crikey",
        Contents : "Watch out Grandma, here comes a lawnmower.",
        TimeStamp: new Date().getTime()
    },
    {
        Id : 2,
        Author : 1,
        Title : "ra ra ra",
        Contents : "Mower Liberation Front.",
        TimeStamp: new Date().getTime()
    },
    {
        Id : 3,
        Author : 2,
        Title : "Up the Irons",
        Contents : "Scream for me, Merthyr Tydfil.",
        TimeStamp: new Date().getTime()
    }
]

const users = [
    {
        Id : 1,
        Name : "Fred Bloggs"
    },
    {
        Id : 2,
        Name : "Dobbin"
    }
]

export default { notices, users };