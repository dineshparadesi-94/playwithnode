console.log("Hello There, I initialized Git");

let name = "Maisha";
let age = "20";
let hobbies = "Video Production";
age = 21;

const intro = (usrname,usrage,usrhobbies) => {
  return (
    'My name is, ' + usrname +
     ' my age is ' + usrage +
    ' and my hobby is ' + usrhobbies
  );
}
const add = (a,b) => a+b ;
console.log(add(1,2));

console.log(intro(name,age,hobbies));
