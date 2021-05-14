class Person{
  #name;
  #age
  constructor({name, age}){
    this.#name = name
    this.#age = age
  }
  speak(){
    return console.log(`Seu nome é ${this.#name} é sua idade ${this.#age}`)
  }
  set name (string){
    this.#name = string
  }
  get name(){
    return this.#name
  }
  set age (number){
    this.#age = number
  }
  get age(){
    return this.#age
  }
}

class Employer extends Person{
  #codeLanguages
  constructor({ name, age, codeLanguages }){
    super({ name, age})
    this.#codeLanguages = codeLanguages
  }
  stack(){
    return console.log(` seu nome é ${this.name}  sua idade é ${this.age} e programa em ${this.#codeLanguages}`)
  }

}
module.exports = { Person, Employer}