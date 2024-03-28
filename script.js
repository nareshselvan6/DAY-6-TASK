// ! Task 1

// ! Question 1
/* a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
 a String representing the studio, and a String representing the rating as its arguments,
and sets the respective class properties to these values */

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
let object = new movie("Ironman", "Marvel studious", 7.9);
console.log(object.title, object.studio, object.rating);

// ! Question 2
/* b) The constructor for the class Movie will set the class property rating to "PG"
as default when no rating is provided.*/

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
let object2 = new Movie("Ironman", "Marvel studious");
console.log(object2.title, object2.studio, object2.rating);

//! Question 3
/* c) Write a method getPG, which takes an array of base type Movie as its argument,
 and returns a new array of only those movies in the input array with a rating of "PG".
  You may assume the input array is full of Movie instances. The returned array need not be full. */

  class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}
let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Kantara", "KRG Studios", "PG");
let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Moviee("veeram", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies);

//! Question 4
/* d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
 the studio “Eon Productions”, and the rating “PG­13” */
 class MOVIE {
  constructor(title,studio,rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
let object3 = new MOVIE("CasinoRoyale","Eon Productions","PG13");
console.log(object3.title, object3.studio, object3.rating);

// ! TASK2

//Convert the UML diagram to Typescript class. - use number for double

class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  toString() {
    return `Circle [radius = ${this._radius} , color = ${this._color}]`;
  }

  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle1 = new Circle(2, "green");
const circle2 = new Circle(5, "Yellow");

console.log(circle1.toString());
console.log("Area:", circle1.getArea());
console.log("Circumference:", circle1.getCircumference());

console.log(circle2.toString());
console.log("Area:", circle2.getArea());
console.log("Circumference:", circle2.getCircumference());

// ! TASK 3

// Question 1

// 3. write a person class to hold all the details

class person {
  constructor(name, address, city, phno) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.phno = phno;
  }
  personaldetails() {
    return `Name : ${this.name}
        Address: ${this.address}
        City: ${this.city}
        Phone:${this.phno}`;
  }
}
let object1 = new person("Tamilselvan", "pallavarm", "chennai", 9876543210);
console.log(object1.personaldetails());

// ! TASK 4

// Question 1

// 4.write a class to calculate the uber price

class Uberprice {
  constructor(baseFare, distance, costpermile) {
    this.baseFare = baseFare;
    this.distance = distance;
    this.costpermile = costpermile;
  }
  totalprice(){
    return this.baseFare + (this.distance * this.costpermile)
  }
}
let price = new Uberprice(7,50,10);
console.log(price.totalprice());

