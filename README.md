# Math Fun!
It's not really called that is it? Well, yes. This project is named Math Fun!
Math Fun! is a node based app that runs an express web server on port 3000. From there, you navigate to http://localhost:3000 in your web browser and bring up the single web page that serves as a basis for the operations.

### Installation

Math Fun! requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and start the server.

```sh
$ cd code-project-2
$ npm install -d
$ npm start
```
### Use 
```sh
1. input operand 1 and operand 2
2. select an operation (defaults to addition)
3. select a base (defaults to base 10)
4. select Math! button
5. Returns a value
6. Click Reset to reset the form
```
## Features

  - Incorporates the SENG560 JavaScript repo loated at https://github.com/Altiss/SENG560-Prog-Assign-1
  - No additional coding necessary to return a value
  - Provides operations for Base 10, Binary, Octal, and Hex
  - Can perform Addition, Subtraction, Multiplication, Division, Square Root, and Exponent operations

## Impressions
I found the SENG560 code to be easy to work with. The instructions were explained well, and I simply had to set up my option values to comply with the operation names used in the code (for example: 'add', 'subtract', 'multiply', etc.) so that I did not have to perform much in the way of custom coding.
My use of the code was completely black-box. I did not add or modify the code in any way. Now, that being said, my application is straightforward and does not provide a lot of additional features like going from one base to another. That is to say, if I wanted to take a binary and add it to a hex. That would require additional coding, and in this regard, I think the code could be improved upon in regards to reuse. I would have to modify each of the functions related to the operations as there is quite a bit of repetition within the code. However, if I wanted to add additional code bases, this would be remarkably easy. I think the code is designed well to add different, non-traditional bases.