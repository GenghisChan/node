const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('broadcast', (num1, num2) => {
  console.log(num1 + num2)
})

eventEmitter.emit('broadcast', 1, 2);

class Person extends EventEmitter{
  constructor(name){
    super();
    this._name = name
  }

  get name(){
    return this._name
  }
}

let chris = new Person('chris');
let karla = new Person('karla')

chris.on('name', () => {
  console.log("My name is", chris.name)
})

karla.on('name', () => {
  console.log("My name is", karla.name)
})


chris.emit('name')
karla.emit('name')
