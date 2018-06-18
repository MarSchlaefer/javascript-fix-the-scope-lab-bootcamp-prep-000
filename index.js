var animal = 'dog'

function myAnimal() {
    return animal 
}

function yourAnimal() {
<<<<<<< HEAD
  animal = 'cat'
  return animal
=======
  return function myAnimal() {
    return animal
  }
>>>>>>> 7f487a3d64c6e1a8144e1dc48ce30b85642fe1ad
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
