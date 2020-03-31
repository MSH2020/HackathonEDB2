

class IceCream {
  constructor(flavor, numSprinkles) {
    this.flavor = flavor;
    this.numSprinkles = numSprinkles;
  }
};

ice1 = IceCream("Chocolate", 13);         // value of 23
ice2 = IceCream("Vanillla", 0);           // value of 5
ice3 = IceCream("Strawberry", 7);        // value of 17
ice4 = IceCream("Plain", 18);             // value of 18
ice5 = IceCream("ChocolateChip", 3);      // value of 8

//sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23
//sweetestIcecream([ice3, ice1]) ➞ 23
//sweetestIcecream([ice3, ice5]) ➞ 17

function sweetestIcecream(arr) { 
  // Converting flavor strings to numerical values of flavor points
  var points = [];

  arr.forEach(element => {
    if (element.flavor = "Plain") {
      points.push (0) ;
    } else if (element.flavor = "Vanillla") {
      points.push (5) ;
    } else if (element.flavor = "ChocolateChip" ) {
      points.push (5) ;
    } else if (element.flavor = "Strawberry") {
      points.push (10) ;
    } else if (element.flavor = "Chocolate") {
      points.push (10) ;
    } else { console.log ("Error. Unknown flavor or a typo.")
  } 
  );

  // Adding sprinkles points:
  arr.forEach(element => {
    points[i] += element.numSprinkles;
  }

  // Sorting the array as offered on https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort3
  sorting = (points) => points.sort(function(a, b){return a - b})

  console.log ( points[0]);
  return ( points[0] );  
  }


  ice1.flavor



  console.log (sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
  return (sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
  }