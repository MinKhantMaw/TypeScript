var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    // New public method to expose the private age property
    Animal.prototype.getAnimalAge = function () {
        return this.age;
    };
    Animal.prototype.getSpecies = function () {
        return this.species;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age, "Dog") || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    // New public method to access protected species property
    Dog.prototype.getDogSpecies = function () {
        return this.getSpecies();
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy", 3);
console.log(dog.getName()); // Accessible
console.log(dog.getAnimalAge()); // Accessing private age property
console.log(dog.bark(), "Hello"); // Accessible
console.log(dog.getDogSpecies()); // Accessing protected species property
var Human = /** @class */ (function () {
    function Human(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }
    Human.prototype.getName = function () {
        return "This is First Name ".concat(this.first, " & This is last Name  ").concat(this.last, " Age is ").concat(this.age);
    };
    return Human;
}());
// const person = new Human("John", "Doe", 12)
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(first, last, age) {
        return _super.call(this, first, last, age) || this;
    }
    return Person;
}(Human));
var person = new Person("Min ", "Khant ", 20);
console.log(person);
var MyClass = /** @class */ (function () {
    function MyClass() {
        this._myProperty = 0;
    }
    Object.defineProperty(MyClass.prototype, "myProperty", {
        get: function () {
            return this._myProperty;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value cannot be negative");
            }
            this._myProperty = value;
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
var myInstance = new MyClass();
console.log("Current Value: ".concat(myInstance.myProperty));
