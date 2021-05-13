const options = require('./data');
const User = require('./controller/class/user');

const jogar = new User({ opt: options }).game();

jogar;
