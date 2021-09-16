# Coder Academy - Workbook
## Assignment 1 - Term 3 (T3A1)


## Question 1
*Provides an extensive overview and description of a standard source control process*
Provide an overview and description of a standard source control process for a large project

Firstly, what is source control?
  * Taken directly from the Atlassian [documentation](https://www.atlassian.com/git/tutorials/what-is-version-control), source control and version control are two terms that are used interchangeably and should not be confused for separate systems. These terms are used to describe the process of both tracking and managing the changes that are made to software on a project. This process follows the same rules whether utilized on an individual level or all the way up to enterprise level. 
  * In other words, when utilizing source control, a team or individual can keep track of how they are changing code. Once at a stable point, with source control, they can either commit their changes or revert them without harming the overall project.

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

---
## Question 2
What are the most important aspects of quality software?
In no particular order, the most important aspects of quality software are:
  * Reliability
    * This is aspect that addresses consistency. For software to be considered reliable, it has to constantly produce the expected outcomes with few to no errors. Those errors that do get thrown should be expected and handled correctly through error handling on the part of the developer. The user should never be left scratching their head wondering if the code will work or not. 
  * Understandability 
    * As stated in Silas Reinagel's [article](https://www.silasreinagel.com/blog/2016/11/15/the-seven-aspects-of-software-quality/), high quality source code should always be both simple and obvious. That is not to say that the code should be dumbed down or inelegant, rather, a programmer who did not originally work on the code should be able to look at it and immediately or very quickly be able to understand it. 
  * Modifiability 
    * Source code should be written in a manner that allows for iteration and change at later stages without completely breaking that code's intended functionality. It should be possible to modify those parts of the code that are meant to be interacted with without running into numerous errors that have been caused by modification that are impossible to find. 
  * Usability
    * The source code that you develop should not require the user to have to go beyond your code in order to implement it. In other words, code should be written so that another developer can easily apply it to their own project without having to scour the internet in order to understand how to plug it into their work. 
  * Testability 
    * The source code you write must not only meet the standards of implementation, it should also come with prepared tests that allow a new adopter the ability to see how it is crashing if it fails to work. In addition, this testing should be set up in a manner that is easy to use. If your software is harder to test than it is to write, then you have most likely created a non-quality piece of work. 
  * Portability 
    * The source code that you write is is platform and operating system agnostic. Of course, there may be edge cases that require the development of software for a specific operating system. However, on the whole, it is best practice to write source code that can be ported to multiple operating systems and that can run on a range of hardware. Not only will this lead to higher quality software, it will also increase its chance of being adopted by more users. 
  * Efficiency
    * The idea here is that you want your software to put as little strain on the physical device and networks running it as possible. If your software is using a massive amount of memory to run, thereby slowing down other systems, then you are creating software that has not been designed with efficiency in mind. The bottom line is that efficient software is software that uses as little resources as possible while running. 
<br>

These elements combined together form the basis of software that is considered quality in industry. They should apply universally and, as a result, allow us to accurately compare work from a range of developers and understand whether or not that work will meet industry standards of quality. An important note to take from this is that a good software developer will understand whether or not certain aspects need more time and attention and which ones can be handled with speed. This understanding of the aspects of quality software and their relative importance to a project is an immensely important skill that allows for on time delivery of work in industry. 

--- 
## Question 3
Outline a standard high level structure for a MERN stack application and explain the components

*Shows almost flawless understanding of the high level structure of the app*

First things first, what is the MERN stack?
  * MERN stands for MongoDB, Express, React, and Node. These are all individual technologies that, when "stacked" or used in conjunction, allow for the creation of a 3-tier app (front end, back end, database). The real beauty of this whole system is that through the stack it is possible to create all of this solely through coding in Javascript.

In order to simplify the structural analysis of a MERN stack app, let's break it down into three parts:
  * Front End 
    * In simple terms, what the user actually sees.
    * in MERN stack front end is handled by React.js
      * React.js:
        * React is a JavaScript framework that allows for the creation of dynamic interfaces that can effectively and capably respond to user interaction. In essence, with react it is possible to utilize components built into the React framework that create a stunning visual interface. Once set up it can then be easily connected to data on the backend that will allow for actual functionality. 
  * Back End
    * Node.js
    * Express.js
  * Database
    * MongoDB





## Question 4
A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

Most practices in the IT industry that have staying power are those that have a set protocol that is repeatable and will provide similar levels of results through many iterations. Below are the 6 skillsets and knowledge that would most help a team deliver on a project, with some variation depending on the size of the project:

  1. Industry knowledge
      * In this specific scenario, industry knowledge isn't entirely necessary as the work has already been won. However, in most real-life cases, work or projects will be handed out to the the competitor who proves that they are the most equipped for delivering on the work desired by the client. In order to do this it is critical that team leaders who are writing proposals to win work or taking clients out for meetings are up-to-date with the latest industry trends and are capable of discussing and showing why their team is most suited to handle the project. Perhaps a new language or an update to a language has been pushed out that a client wants their work to be written in. Or perhaps standards have changed for methods of development. That list of potential changes is very long and proves why it is valuable to have members of the team who are more of the generalist skillset for this stage.
  2. Funding capture and networking
      * Again, not necessary for this scenario specifically but generally very important. This step falls just in line behind step 1 and the two could almost be merged together. Ideally, a team will be comprised of a varying group of individuals with different capabilities and weaknesses. Once work has been won, how is it going to be funded? Who will provide those funds in order to bring the ideas of the client into reality? While in most cases companies can handle small projects funding needs on their own, in many cases large projects require support from outside investors. And, while it remains true that you cannot buy your way to success, it will certainly help give your team access to resources that will allow them to deliver a project or piece of work that should exceed the expectations of the client. 
  3. Project management
      * Once the work has been won and funding is taken care of, the team will need to depend upon leadership to implement a project plan that will lead to successful delivery of work in a timely fashion. Industry standards indicate that agile methodolgy (described previously and referenced [here](https://plan.io/blog/what-is-agile-project-management/)) is the go to for project management. Having a project manager on the team certified in agile methodolgy is a huge benefit to any project as it will allow for proper setting and attainment of goals that will keep the whole team on track in regards to delivery. Each member of the team will be aware of what their specific tasks are and when they are required to be finished while not having to worry about the total project which would be a waste of their time andn reduce their efficiency. 
  4. Source control 
      * Once the implementation plan has been put in place, the lead designer can set up source control for the project. As mentioned in section one at the beginning of this work, source control is how leaders of a project can be sure to maintain the integrity of the source code until it is ready to be delivered to the client. The team lead in charge of administering and setting up source control for the project will now be able to decide which VCS (Version Control System) they want to use and who should have the ability to accept pull requests which will alter the actual working product rather than a local copy on an individual's machine. This leader will also be in charge of making sure that the team under them has working knowledge of the source control methods planned for the project and is aware of what they can and cannot alter as they work through their assigned roles from step 3. 
  5. Ability to create quality software
      * Returning back to the topic of quality software from section two, this is the stage of a project's lifecycle where this knowledge comes into play. Once all the red tape has been cut through and removed it will be time to actually start developing the software to be delivered to the small business. Agile practices alone won't stop developers from producing non-quality software and so it will be critical that each team member maintains a high level of expectations in relation to the code they are writing. If it does not abide by the 7 aspects of a quality piece of software laid out in section 2 then it most likely will lead to delivery of product that fails to meet the expectations of the client. These 7 aspects once more are: 
        * Reliability
        * Understandability 
        * Modifiability 
        * Usability
        * Testability
        * Portability
        * Efficiency
  6. maintainence of software post delivery
      * Finally, once the project has been delivered and the client is satisfied with what they paid for the developer then becomes responsible for making sure they can address and fix any issues that may arise later on. It is not enough to simply deliver a product. The team will have to be accountable for their work and be able to be called on to fix issues that arise in the production environment once the software is in the clients hands.

Are these 6 points the totallity of skills that make for a successful project delivery? Perhaps not. However, with these values instilled into a software companies' employees, it should be much easier to deliver a standout product and avoid the pitfalls that come with having a team that is unprepared for work in the real world.

## Question 5
With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges

ruby marketplace app

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

