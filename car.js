class Car {
    // the constructor probably has a better formal definition but the way I think of it is that it is the blueprint declaration that is set up inside of a class. So essentially once the class is initialized, the constructor is how we specify what features each new instance of a car should have. You could pass many parameters here if you wanted each new instance to have a plethora of features. So, instead of just brand, you could have year, trim level, color, etc.
      constructor(brand) {
        // by invoking this.carname we are setting the brand of the car to equal the carname property so when we make a new instance of the car class and pass in hyundai as brand it will automatically be passed to this.carname and can then be used to display personalized messages rather than hardcoded responses which may not be relevant based off user input.  
        this.carname = brand;
      }
        // this is a continuation of the comment above. Here we see string interpolation utilized by the present function to return a custom string based of which car brand was initially passed in when the new car object is initialized and used for varying brands of car. 
      present() {
        return 'I have a ' + this.carname;
      }
    }
      // here the extends functionality is appended to the creation of a subclass that will inherit from the overarching or parent class; Car. 
    class Model extends Car {
      // the constructor is invoked once more with brand and a new parameter; mod. 
      constructor(brand, mod) {
        // since the original class declaration already used brand and set up its storage we only have to call the super method which will essentially pull the functionality from our parent class down to our subclass.
        super(brand);
        // since mod is new, the same process we went through in the above section with this.carname is done on mod. this.model will now store the mod parameter as it is passed in if this new subclass is used to initialize a new model.
        this.model = mod;
      }
      // in the show function something cool happens. Since we created present in the parent class, Car, it is possible to inherit and make use of those functions in subclasses of Car. So here we create a new function that returns an data interpolated string that not only now has access to this.model but also to the whole entire present function from above!! -- very cool. 
      show() {
        return this.present() + ', it was made in ' + this.model;
      }
    }
      // here a new variable is created called makes. It stores an array populated with three individual strings that are car brands. 
    let makes = ["Ford", "Holden", "Toyota"]
      // next, a new varibale is created called models. In it we use the Array.from() method that will coerce what is passed into it into an array. Inside the method we see the rules for how to populate the newly created array. Here we specify that we want the array to have 40 values stored within it. We're not done though. Right now there are just 40 undefined data types within the array. Next we pass in the rules of how to populate the array. Starting at 1980 the array will increment 1 value at a time ending at 2020. 
    let models = Array.from(new Array(40), (x,i) => i + 1980)
      // next we see a new function is created that takes two parameters (min and max) 
    function randomIntFromInterval(min,max) { // min and max included
      // then we utilize the Math.floor() method which will round down the returned value that is passed to it by the functions within the method parenthesis. Within the parenthesis we see Math.random is called. Math.random will return a number between the range of 0 and less than 1. Next we deal with order of operations. First we carry out (max - min + 1) in the order they appear, so max will have min subtracted from it and then 1 will be added to the result. Next the multiplication is carried out with the random decimal value returned from Math.random and finally min will be added to the result of that!
        return Math.floor(Math.random()*(max-min+1)+min);
    }
      // here a for loop is created that will iterate through the models array that was created three lines earlier. It is set up so that each individual element of the models array will be able to be worked on. 
    for (model of models) {
      // next we create two 
      make = makes[randomIntFromInterval(0,makes.length-1)]
      model = models[randomIntFromInterval(0,models.length-1)]
    
      mycar = new Model(make, model);
      console.log(mycar.show())
    }