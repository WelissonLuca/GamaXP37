/*const rl = require('./interface');

rl.question('Você está gostando de POO?', response => {
  console.log(`Sua resposta foi ${response}`)
  rl.close();
});*/

const options = require('./data');
const MachineOptions = require('./controller/class/machine')
const User = require('./controller/class/user')

let usuario = new User({ opt: options, name: 'Welisson', selected: 'Pedra' }).game();

console.log(usuario)