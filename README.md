# fizz_buzz_js - Daniel

### Question 1

##### We are setting a changeble variable which we call `fizzBuzz`and setting that to fs, which, as it is required in the spec-helper file, I assume is an external library for doing something (manipulation, saving, etc ?) with files. Then we call a method (readFileSync) on it that uses that library to read (take instructions?) from a specific file in our code (the fizz-buzz.js file in the js folder under the src folder).

##### Next we set the above set variable, add an exporting method (I assume to export / save the answer to above mentioned file and set that function (read and write to the file) to a variable we call FizzBuzz. 


### Question 2

##### Beacuse we want it to be "globally" available to all test and not only locally avilable only to one test. 


### Question 3

##### == is a "loser" comparison and allows for evaluations where a number (e.g. 3) and  a string (e.g. "3") are compared. === is a strict comparison and will only allow if the comparision is absolutely right (e.g. 3 would not equal "3" in this case).


### Question 4

##### Any program (unless asynchronisation is used) is run line by line, that means that ones a function has been fullfilled, it will stop running. If we would start with the smaller number (e.g. 3) the function would be fullfilled and stop running and woudl never evaluate for e.g. 5. 


### Question 5

##### A unit test, tests that a specific method behaves the way it is expected to. A feature test is an automatic simulation of how the user would use the application.


### Question 6

##### When we run a test, we are expecting a certain outcome (which then makes the test 'pass'). Expectations is the line of code we write to tell the test what a "correct answer" should equate to. 

### Question 7

##### document.addEventListener('DOMContentLoaded) - here we are telling the browser to load the html into the DOM and then create a function (() => {})
##### let button = document.getElementById('button') - here we are setting a changeble variable (button) to equate to the button id we have crrated on the html. 
##### let displayDiv = document.getElementById('diplay_answer') - same as above
##### button.addEventListener('click') - here we are creating a nested function for the button and have it look for the 'click' movment
##### let value = document.getElementById('value').value - same as for the button variable. Not sure why we have .value at the end
##### let fizzBuzz = new fizzBuzz - here we create a new instance of the "fizzBuzz" class (I think...)
##### let result = fizzBuzz.check(value) - here we set a new variable (result) to evaluate the input number (value) and check that on our fizzBuzz function 
##### displayDv.innerHTML = result; - here we say that the browser should putpiut the resul of our variable result (e.g, fizz, buzz, fizzbuzz or the numnber) 


### Question 8

##### CDN gives you access to, in this case, a CSS framework, without having to install anything locally. Instead, you reference the source material via the CDN link. 