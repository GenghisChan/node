// How to export modules

const sum = (one, two) => one + two
const PI = 3.14
class Person{
  constructor(){
    console.log('Person instance created!')
  }
}



module.exports = {sum, PI, Person};
