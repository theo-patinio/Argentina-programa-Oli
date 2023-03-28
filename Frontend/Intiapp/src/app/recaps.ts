const username: string | number = 'cintura_de_avispa23';
const sum = (a: number, b:number) => {
    return a + b;
}
sum(14, 2);

class Persona {
    private age: number;
    lastname: string;

    constructor(age: number, lastname: string){
        this.age = age;
        this.lastname = lastname;
    }
}

const abejita = new Persona(23, 'maia');
abejita.lastname;


class Person {
    constructor(public age: number, public lastname: string){}
};
const abeja = new Person(23, 'maria');
abeja.age;

abejita.lastname
NaN
