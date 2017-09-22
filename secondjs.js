

// 1.0  Given the following variables
var days = 5;
var fullTime = false;



// 1.1  Write an if statement to determine if lesson is full time.
//      Part time lesson consists of 8 days.
// 1.2  To create an if statement, write:
//      if(days < 8){ ...code to fill...  }
// 1.3  To changee fullTime to true, in the if statement within the { curly braces } write:
//      fullTime = true;
// 1.4  Print the value of fullTime in the console by writing after 1.2:
//      console.log(fullTime);
// WRITE THE CODE FOR STEP 1 BELOW THIS LINE:

if (days < 8) {
    fulltime = true;
}
console.log(fulltime);


var favDrink = "Red Wine";
var order = "Whisky"
var rightChoice;


function determineFavDrink(order) {
    var rightchoice = false;
    if(order =="Red Wine") {
        rightChoice = true;
    }else{
        rightchoice = false;
    }
    console.log(rightchoice)
    return rightchoice
}
determineFavDrink (order)