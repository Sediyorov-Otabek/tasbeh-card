// let student={
//     name:"Otabek",
//     age:"22",
// }
// // object - key value pairs
// console.log( student );
// console.log( student.age );
// let fruits = [ "apple", "banan", "ananas"]
// console.log( fruits);
// console.log( fruits[1]);
// array - index value pairs
// let array=["jhon", 15, true, null, {a:14}, [100,200],{addres:["Tashkent","Uzbekiston"]}]
// console.log(array[6].addres[1]);
const USERS = [
  {
    id: "a2sd1as1d32",
    username: "john32",
    name: "John",
    bio: "Algangan",
    followers: ["a2sd1as1d32", "a2sd1as1d32"],
    following: ["123asd132", "alsdhajosd156"],
    posts: [
      {
        url: "https://",
        title: "ayriliq",
        likes: [
          {
            id: "asdasdasd",
            name: "Saidaziz",
          },
          {
            id: "asdasdasd",
            name: "Akbarjon",
          },
        ],
        comments: [
          {
            id: "asdasd12",
            name: "Akbarjon",
            msg: "❤️❤️",
          },
          {
            id: "asdasd12",
            name: "Saidaziz",
            msg: "Nexia 2 legenda",
          },
        ],
      },
    ],
  },
];
console.log(USERS[0].posts[0].comments[1].msg);
let son= document.querySelector(".son");
let offset=0
function inc(){
offset++
son.innerHTML=offset
}
function dec(){
  offset--
  son.innerHTML=offset
}
function rest(){
  offset=0
  son.innerHTML=offset
}