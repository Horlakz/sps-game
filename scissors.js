function spsGame(yourChoice) {
    console.log('Human choice:', yourChoice.id);
  
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToSpsInt());
    console.log('Computer choice:', botChoice);
  
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    console.log(results);
  
    message = finalMessage(results); // ('message': 'You won!', 'color': 'green')
    console.log(message);
    spsFrontEnd(yourChoice.id, botChoice, message);
  }
  
  function randToSpsInt() {
    return Math.floor(Math.random() * 3);
  }
  
  function numberToChoice(number) {
    return ['stone', 'paper', 'scissors'][number]
  }
  
  function decideWinner(yourChoice, computerChoice) {
    var spsDatabase = {
      'stone' : {'scissors': 1, 'stone': 2, 'paper': 3},
      'scissors' : {'paper': 1, 'scissors':2, 'stone':3},
      'paper' : {'stone' : 1, 'paper' : 2, 'scissors' : 3},
    }
  
    var yourScore = spsDatabase[yourChoice][computerChoice]
    var computerScore = spsDatabase[computerChoice][yourChoice]
  
    return [yourScore, computerScore]
  }
  
  function finalMessage([yourScore, computerScore]) {
    if (yourScore === 3) {
      return {'message': 'You lost! Try again', 'color':'red' };
    } else if (yourScore === 2) {
      return {'message': 'Oops, you tied Try again', 'color':'yellow'};
    } else {
      return {'message': 'Congratulations! You Won', 'color':'green'};
    }
  }
  
  function spsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
      'stone': document.getElementById('stone').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src,
    }
  
    //let's remove all the images
    document.getElementById('stone').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
  
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
  
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow:0em 0.625em 3.125em rgba(0, 0, 256, 1); border-radius: 3rem;'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; 'font-size: 3.75rem; padding: 1.875rem;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow:0em 0.625em 3.125em rgba(256, 0, 0, 1); border-radius: 3rem;'>"
  
    document.getElementById('flexbox-sps').appendChild(humanDiv);
    document.getElementById('flexbox-sps').appendChild(messageDiv);
    document.getElementById('flexbox-sps').appendChild(botDiv);
  
  }
  