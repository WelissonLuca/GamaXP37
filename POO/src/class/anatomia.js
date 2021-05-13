class Person{
  constructor(name, occupation, age){
    this._name = name
    this._occupation = occupation
    this._age = age
  }

  hello(name, occupation, age){
    if(occupation === "dev"){
      return `Fala ${occupation} seu nome é ${name} é você tem ${age} anos`
    } else{
      return `Fala seu nome é ${name} é você tem ${age} anos é sua profissão é ${occupation}`
    }
  }
}
const Pessoa = new Person;

module.exports = Pessoa;