class Animal {
    public name: string;
    private age: number;
    protected species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name
        this.age = age
        this.species = species
    }

    public getName(): string {
        return this.name
    }

    // New public method to expose the private age property
    public getAnimalAge(): number {
        return this.age
    }

    protected getSpecies(): string {
        return this.species
    }
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "Dog")
    }

    public bark(): void {
        console.log("Woof!")
    }

    // New public method to access protected species property
    public getDogSpecies(): string {
        return this.getSpecies()
    }
}

const dog = new Dog("Buddy", 3)
console.log(dog.getName());         // Accessible
console.log(dog.getAnimalAge());    // Accessing private age property
console.log(dog.bark(), "Hello");   // Accessible
console.log(dog.getDogSpecies());   // Accessing protected species property




class Human {
    private first: string
    public last: string
    protected age: number

    constructor(first: string, last: string, age: number) {
        this.first = first
        this.last = last
        this.age = age
    }

    getName(): string {
        return `This is First Name ${this.first} & This is last Name  ${this.last} Age is ${this.age}`
    }
}

// const person = new Human("John", "Doe", 12)

class Person extends Human {
    constructor(first: string, last: string, age: number) {
        super(first, last, age)
    }
}


const person = new Person("Min ", "Khant ", 20)
console.log(person);


class MyClass {
    private _myProperty: number = 0

    get myProperty(): number {
        return this._myProperty
    }

    set myProperty(value: number) {
        if (value < 0) {
            throw new Error("Value cannot be negative")
        }
        this._myProperty = value
    }
}


const myInstance = new MyClass()
console.log(`Current Value: ${myInstance.myProperty}`);
