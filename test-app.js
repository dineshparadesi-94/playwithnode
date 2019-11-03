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

const addone = a => a+1;
console.log(addone(2));

const addrand = () => 2+3;
console.log(addrand());

console.log(intro(name,age,hobbies));

// A key-value pair is also called a "property" or a "field" of the object.
//creating objects

const person ={
  name:'dinesh',
  age:24,
  greet() {
    console.log('My name is ' + this.name);
  }
};
console.log(person);
person.greet();

//Arrays and Methods

const activities = ['Sports' , 'Dunebuggy'];
activities.push('Programming');
//for (let print of activities) {
//  console.log(print);
//}

//console.log(activities.map(newact => "The act is "+ activities));


const copyactvities = activities.slice();
console.log(copyactvities);

//spread operator
const copied = [activities];
console.log(copied);
const copiedwithspread = [...activities];
console.log(copiedwithspread);
