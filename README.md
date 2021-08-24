# Coder Academy - Workbook
## Assignment 1 - Term 3 (T3A1)


## Question 1
Provide an overview and description of a standard source control process for a large project

*Provides an extensive overview and description of a standard source control process*





## Question 2
What are the most important aspects of quality software?

*List discuss and demonstrate 6 software quality characteristics.*




## Question 3
Outline a standard high level structure for a MERN stack application and explain the components

*Shows almost flawless understanding of the high level structure of the app*




## Question 4
A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

*Effectively describes a range of skills and knowledge required by IT workers to complete a quality web development project*




## Question 5
With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges

*Effectively describes a range of skills and knowledge used to complete a project.*




## Question 6
With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature

*Evaluates effectiveness of knowledge and skills accurately, providing examples, and providing an insightful improvement on each skill*



## Question 7
Explain control flow, using an examples from the JavaScript programming language

*Provides a thorough explanation of control flow in programminG*




## Question 8
Explain type coercion, using examples from the JavaScript programming language

*Provides a thorough explanation of type coercion in programming*




## Question 9
Explain data types, using examples from the JavaScript programming language

*Provides a thorough explanation of data types in programming*




## Question 10
Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language

*Demonstrates an extensive ability to manipulate arrays*





## Question 11
Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language

*Demonstrates an extensive ability to manipulate objects*




## Question 12
Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language

*Demonstrates an extensive ability to manipulate JSO*






## Question 13
For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes

*Demonstrates an extensive ability to recognise functions, ranges and classes*

```js

// Write notes

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it was made in ' + this.model;
  }
}

let makes = ["Ford", "Holden", "Toyota"]
let models = Array.from(new Array(40), (x,i) => i + 1980)

function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (model of models) {

  make = makes[randomIntFromInterval(0,makes.length-1)]
  model = models[randomIntFromInterval(0,makes.length-1)]

  mycar = new Model(make, model);
  console.log(mycar.show())
}
```






Notes with release:

Due: 23rd of September 2021

More than one example is best

Q13 is worth double marks

