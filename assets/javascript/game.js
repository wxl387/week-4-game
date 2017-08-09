$(document).ready(function() {
  
  var gemImage = ['assets/images/red.png', 'assets/images/blue.png', 'assets/images/yellow.png', 'assets/images/green.png'];

  //to generate 4 available number for crystal gem
  var numberOptions = [];
  
  //create a variable counting scores
  var counter = 0;
  var win = 0;
  var lose = 0;
  $("#goal").text(targetNum);
  $("#wins").text(win);
  $("#losses").text(lose);
  $("#totalScore").text(counter);
  reset();

  function randomNum(x, y) {
    return Math.floor(Math.random() * ( ( y - x ) + 1 ) + x );
  }

  //to define target value and display
  var targetNum = randomNum(19, 120);
  $(".numberToGuess").text(targetNum);


  function randomGemValue() {
    for (var i = 0; i < 4; i++) {
      var gemValue = randomNum(1, 12);
      numberOptions.push(gemValue);
    }
    console.log("cnm");
    console.log(numberOptions);
      
    //assign values to gem
    for (var i = 0; i < numberOptions.length; i++) {
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-crystalvalue', numberOptions[i]);
//      console.log(imageCrystal);
      imageCrystal.attr('src', gemImage[i]);
      imageCrystal.attr('alt', 'gemIcon');
      imageCrystal.addClass('crystal-image');
      $("#gemIcon").append(imageCrystal);
    }
  }

  function reset() {
    targetNum = randomNum(19, 120);
    numberOptions = [];
    randomGemValue();
    counter = 0;
    win = 0;
    lose = 0;
  }

  //on click function
  $(".crystal-image").on("click", function() {
      var crystalValue = ($(this).attr("data-crystalvalue"));
      console.log(crystalValue)
      crystalValue = parseInt(crystalValue);
      counter += crystalValue;
      $("#totalScore").text(counter);

      //update
      // alert("New score: " + counter);

      // document.querySelector('#wins').innerHTML = "Win: " + win;
      // document.querySelector('#losses').innerHTML = "Lose: " + lose;
      // document.querySelector('#goal').innerHTML = targetNum;
      // document.querySelector('#totalScore')innerHTML = "Your Total Score is: " + counter;
      
      if (counter === targetNum) {
        win++;
        alert("You win!");
        reset();
      }

      else if (counter >= targetNum) {
        lose++;
        alert("You lose!!");
        reset();
      }
  });
})






