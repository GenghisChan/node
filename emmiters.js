const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('broadcast', (num1, num2) => {
  console.log(num1 + num2)
})

eventEmitter.emit('broadcast', 1, 2);
