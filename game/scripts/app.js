$(() => {

const $player1Arr = [];
const $player2Arr = [];

let clicks = 0;

const playerMove = (event) => {

clicks ++;

const $player1 = $("<div>");
$player1.addClass("CharlieBrown");

const $player2 = $("<div>");
$player2.addClass("Snoopy");


  if (clicks %2 !==0) {

    $(event.currentTarget).empty();
    $(event.currentTarget).append($player1);    
    
    
    const $player1spot = parseInt($(event.currentTarget).attr("id"));
    $player1Arr.push($player1spot);
    console.log("player1: " + $player1Arr);
    
    checkColumnPlayer1();
    checkRowPlayer1();
    diagLeftPlayer1();
    diagRightPlayer1();

  }
  else if (clicks %2 === 0) {

    $(event.currentTarget).empty();
    $(event.currentTarget).append($player2);

    const $player2spot = parseInt($(event.currentTarget).attr("id"));
    $player2Arr.push($player2spot);
    console.log("player2: " + $player2Arr);

    checkColumnEven();
    checkRowEven();
    diagEvenLeft();
    diagEvenRight();
  }

};

const checkColumnPlayer1 = () => {

  //sort all player 1 spots from low to high
  let player1ColArr = $player1Arr.sort((a,b)=>a-b)
  console.log("player1spots " + player1ColArr);

  //#this gives first four of array
  // let combo = player1ColArr.slice(0, 4)
  //group every 4 numbers into an array
  let combo = player1ColArr.slice(0, 4)

  console.log("this is combo " + combo)

  //check if difference between each number is 6
 let difference = [];
  for (let i = 0; i < combo.length - 1; i++) {
    const diff = (combo[i + 1]) - (combo[i]);
    difference.push(diff);
    console.log('this is diff' + diff);
  }
 
  console.log('this is difference ' + difference); 
  console.log('this is length of difference' + difference.length);
  //if length of difference is 3 then calculate
  if (difference.length === 3){
      //if yes announce win
let result = difference.every((num) => {
  return num == 6;
})
  
console.log(result);
console.log("WIN");
  }

 




  //else

  //push every 5th number into previous array

  //check if difference between each number is 6
    
  // for (let i = 0; i < player1ColArr.length; i++) {
  //   console.log(player1ColArr[i])
  // }
    

    // return result
 

  // newArr = player1ColArr.unshift()
  // console.log("unshift" + newArr)
  // player1ColArr.slice(0,3)
  // player1ColArr.shift();


  // if any 4 consecutive numbers have a difference of 6, announce win
// let sortFn = $player1Arr.compareNumeric(a,b)
//   if (a[a.length - 6] === b[b.length - 6]) return 0;


  // let checkWinArr = $player1Arr.filter(id =>
  //   id %6);
  
  // console.log ("this is check" + checkWinArr)

  // if (checkWinArr.forEach() %6){
  //   player1Win();
  // }

//     }
}


const $board = $("<div>").addClass("board");
$("body").append($board);

  for (let i = 0; i <42; i++){
    const $spot = $("<div>");
    $spot.attr("id", i);
    $spot.addClass("spot");
    $board.append($spot);
    $spot.one("click", playerMove);
  };



const player1Win = () => {
  console.log ("player 1")
  alert("You're a good man, Charlie Brown! You placed a winning piece! Click to reveal!");
};

const $playAgain = $(".playAgain");
	$("#playAgain").click(function(){document.location.reload(true);
	});

const player2Win = () => {
  alert("Nice moves, Snoopy! You placed a winning piece! Click to reveal!");
};

});
