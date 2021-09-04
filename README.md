# Coder Academy - Workbook
## Assignment 1 - Term 3 (T3A1)


## Question 1
*Provides an extensive overview and description of a standard source control process*
Provide an overview and description of a standard source control process for a large project

Firstly, what is source control?
  * Taken directly from the Atlassian [documentation](https://www.atlassian.com/git/tutorials/what-is-version-control), source control and version control are two terms that are used interchangeably and should not be confused for separate systems. These terms are used to describe the process of both tracking and managing the changes that are made to software on a project. This process follows the same rules whether utilized on an individual level or all the way up to enterprise level. 
  * In other words, when utilizing source control, a team or individual can keep track of how they are changing code and once at a stable point, with source control, they can either commit their changes or revert them without harming the overall project.

So, how should version control be conceptualized? 
  * The best way to think of version or source control is to imagine that it is the basic outlines of a process or protocol that leads to more efficient and safer working when it comes to source code. By following these basic outlines, a team utilizing source control methods can protect their work from being permanently altered or damaged without consent or design.
  * In order to bring version control to the general public and make it more user friendly, several Version Control Systems have been developed.  
    * Version Control Systems (VCS) came about in the wake of the source control movement and make source control methods more readily available. These come in many forms and one of the most common out in the wild is Git. Besides Git, there are many others that are used by different groups based off preference.
  * breaking these concepts down further, imagine that source control is a garden full of plants bearing fruits of all kinds and the VCS is a guidebook on how to properly tend and maintain that garden.


Now that the basic definition of the term and its different forms of reference are covered, let's dive into the process of using source control on a large project (while remaining VCS agnositc to limit the confusion that may arise from use of specific terms that may work in one system but not another). 
1. Project initiation.
    * In the earliest stage of a project, it falls to the leader or PM to establish the basic rules of source control that will be adhered to until the work is finished and the project delivered to the customer.
    * Here the PM will create a main branch which functions as the universal and 'real' version of the project.
    * The team will be informed of the rules and protocols when it comes to attempting to manipulate this branch.
    * Administrators will be assigned who will be in charge of controlling how the team modifies the main branch.
    <br>
2. localization of tasks.
    * At this stage inidivudals who have been assigned jobs in relation to the source code will copy or clone a version of that code to their local machine. 
      * This step is the first in the group of benefits that come with source control. Each team member is copying a version of the code to a branch on their local machine rather than working on the main branch itself. They are protecting the integrity of the source code while allowing themselves free reign to change and add whatever they see fit. 
3. Submission of personal work against main branch. 
    * Once team members have completed their assigned work they will then submit their work to the main branch through a push from their local machine. 
      * This push stage is still separate from the main branch. Any changes made to the source code locally are still 'locked' within an environment that can be reviewed by admins before being made official against the main branch of work. 
4. Review of changes and officiating of pull request.
    * Any changes will be reviewed once pushed to the remote repository that stores the source code separately from all local environtments. 
    * The push made in step three will lead to an admin recieving a pull request which will indicate the changes being made to source code. From here the admin is responsible for confirming or denying changes.
    * If the work done by a team member on their local machine is appropriate, their push request that registers as a pull request on the part of the admin will be accepted and all changes will be made official and merged into the main branch. 
    * If admins have done their due dilligence, the main branch will be updated with all changes made.
5. Updating local machines with most recent changes.
    * Once changes are made to the main branch, it is best practice that anyone involved on the project whose work may be affected by those changes pull them to their local machine. This will save any redundancies arising from teammates completing a task that has already been finished. 
Steps 1-5 will be repeated until the project is ready for delivery. Immediately, it should be clear to see how valuable the version control process is for projects that require collaboration as it limits the potentiallity for human error and maintains high levels of integrity for source code.






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

