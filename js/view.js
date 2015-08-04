
var GameView = function(game){
  this.colors = ["#6AF25D","#35203B","#F53CB3","#DB4105","#FFF71D","#1695A3","#8A0917","#00261C"]
}

GameView.prototype.displayInstructions = function(){
  alert("HELLO!");
}

GameView.prototype.clearBoard = function(){
  //FILL THIS OUT - CLEAN OUT THE PREVIOUS GAME
  this.clearInputArea();
  this.clearPegBoard();
};

GameView.prototype.displayGuess = function(guess,guessNum){
  var guessField = $("#guess-"+guessNum)
  for(i=0;i<4;i++){

    guessField.find("#peg-" + (i+1)).css("background-color",this.returnColor(guess[i]));
  };
};


GameView.prototype.updateResultPegs = function(matches,guessNum){
  console.log('yaaas')
  var directMatches = matches[0];
  var colorMatches = matches[1];
  var pegsToUpdate = directMatches + colorMatches;
  var resultField = $("result-"+guessNum);
  console.log(pegsToUpdate);
  //FUNCTION BELOW IS NOT WORKING FOR SOME REASON...
  // for(i=0; i < pegsToUpdate; i++){
  //   if (i > directMatches){
  //     guessField.find("#peg-" + (i+1)).css("background-color","black");
  //     console.log("BLACK");
  //   } else {
  //     guessField.find("#peg-" + (i+1)).css("background-color","gray");
  //     console.log("GRAY");
  //   };
  // };

};

GameView.prototype.returnColor = function(number){
  return this.colors[number]
}

GameView.prototype.clearInputArea = function(){
  $("#guess-input-board .color-option").remove();
};

GameView.prototype.clearPegBoard = function(){
  $("#guess-board .peg-input").css("background-color","#E1FFFD");
};
