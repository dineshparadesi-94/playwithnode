console.log("Hello There, I initialized Git");

const name = "Maisha";
let age = "20";
let hobbies = "Video Production";
age = 6.5;

function intro(usrname,usrage,usrhobbies) {
  return (
    'My name is, ' + usrname +
     ' my age is ' + usrage +
    ' and my hobby is ' + usrhobbies
  );
}

console.log(intro(name,age,hobbies));
