

class IceCream {
  constructor(flavor, numSprinkles) {
    this.flavor = flavor;
    this.numSprinkles = numSprinkles;
  }
};

// Data from the task:
ice1 = new IceCream("Chocolate", 13);         // value of 23
ice2 = new IceCream("Vanillla", 0);           // value of 5
ice3 = new IceCream("Strawberry", 7);        // value of 17
ice4 = new IceCream("Plain", 18);             // value of 18
ice5 = new IceCream("ChocolateChip", 3);      // value of 8

// Examples from the task:
//sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23
//sweetestIcecream([ice3, ice1]) ➞ 23
//sweetestIcecream([ice3, ice5]) ➞ 17

function sweetestIcecream(arr) { 
  // Converting flavor strings to numerical values of flavor points
  var points = [];
  arr.forEach(flavorPointsAssignment);

  function flavorPointsAssignment (IceCream) {
    if (IceCream.flavor = "Plain") {
    points.push (0) ;
    } else if (IceCream.flavor = "Vanillla") {
    points.push (5) ;
    } else if (IceCream.flavor = "ChocolateChip" ) {
    points.push (5) ;
    } else if (IceCream.flavor = "Strawberry") {
    points.push (10) ;
    } else if (IceCream.flavor = "Chocolate") {
    points.push (10) ;
    } else { console.log ("Error. Unknown flavor or a typo.")
    } 
  }

  // Adding sprinkles points. It's an arrow function, isn't it:
  var i;
  sprinklesPointsAssignment = (IceCream)  => points[i] += IceCream.numSprinkles;
  arr.forEach(sprinklesPointsAssignment);
  

  // Sorting the array as offered on https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort3
  sorting = (points) => points.sort(function(a, b){return a - b});

  return ( points[0] );  
  }

// Trying the function:
console.log (sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
 