$(document).ready(function() {
  
  var gemImage = ['assets/images/red.png', 'assets/images/blue.png', 'assets/images/yellow.png', 'assets/images/green.png'];

  //create a variable counting scores
  var counter = 0;
  var win = 0;
  var lose = 0; 
  $("#wins").text(win);
  $("#losses").text(lose);


  randomGemValue();
  reset();


  function randomNum(x, y) {
    return Math.floor(Math.random() * ( ( y - x ) + 1 ) + x );
  }

  function randomGemValue() {
    //to generate 4 available number for crystal gem
    var numberOptions = [];

    for (var i = 0; i < 4; i++) {
      var gemValue = randomNum(1, 12);
      numberOptions.push(gemValue);
    }
    console.log(numberOptions);
      
    for (var i = 0; i < numberOptions.length; i++) {
      var imageCrystal = $('<img>');
      imageCrystal.attr('data-crystalvalue', numberOptions[i]);
      imageCrystal.attr('src', gemImage[i]);
      imageCrystal.attr('alt', 'gemIcon');
      imageCrystal.addClass('crystal-image');
      $("#gemIcon").append(imageCrystal);
    }
  }

  function reset() {
    //to define target value and display
    var targetNum = randomNum(19, 120);
    $("#goal").text(targetNum);
    counter = 0;
    $("#totalScore").text(counter);
  
    //on click function
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        console.log(crystalValue)
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#totalScore").text(counter);

        if (counter === targetNum) {
          win++;
          $("#wins").text(win);
          alert("You win!");
          $('#gemIcon').empty();
          
          randomGemValue();
          reset();
        }

        else if (counter >= targetNum) {
          lose++;
          $("#losses").text(lose);
          alert("You lose!!");
          $('#gemIcon').empty();
          
          randomGemValue();
          reset();
        }
    });
  }
})






