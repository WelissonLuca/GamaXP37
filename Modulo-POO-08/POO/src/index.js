const objJS = require('./literals/objeto');
const objJSON = require('./literals/objeto.json')
const Pessoa = require('./class/anatomia');
const mariane = require('./class/gettersAndSetters');
//const Person = require('./class/metodoPublico')
const { Person, Employer}  = require('./class/metodoPrivado');



/*const welisson = new Person({
  name: 'Welisson',
  age: 22
})._name-*/
//console.log(objJS.getFinalPrice())
//console.log(objJSON.produto[0].name)
//console.log(Pessoa.hello('Welisson', 'dev', 30))
//console.log(mariane._name)
//console.log(welisson)

let maria = new Employer({
  name: 'Maria',
  age: 22,
  codeLanguages: 'Javascript'
})
console.log(maria.stack())