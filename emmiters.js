const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('broadcast', () => {
  console.log('Broadcasting ...')
})

eventEmitter.emit('broadcast')
