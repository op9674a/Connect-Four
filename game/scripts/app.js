
// have board of 42 spots
//on click only allow placeIcon on lowest available space in column..somehow
//if below event.currentTarget is empty (how?), placeIcon there
//////have columns, have rows
//make array of played squares?
//check if played squares = win...somehow
//check for win after each click
// horizontal
// vertical
// diagonal
//alert if win status

const $boardArr = new Array(42);
for (i = 0; i < 6; i++) {
  $boardArr[i] = new Array(6);
  for (j = 0; j < 7; j++) {
    $boardArr[i][j] = ['row' + i + ',' + 'column' + j ];
  }
};
console.log($boardArr);

const $squareArr=[];

$(() => {

let clicks = 0;

    const placeIcon = (event) => {

    clicks ++;

    const $icon1 = $("<div>");
    $icon1.addClass("X").text("X");
      // console.log($icon1);

    const $icon2 = $("<div>");
    $icon2.addClass("O").text("O");
      // console.log($icon2);

        // if ($(event.currentTarget) !== lowest available spot {
        //   place Token on lowest available spot
        // }

    if (clicks %2 !== 0) {
    $(event.currentTarget).empty();
    $(event.currentTarget).append($icon1);
    $(event.currentTarget).removeClass().addClass("Odd");

    const $playedOdd = [];
    const $trackPlayedOdd = $playedOdd.push($(event.currentTarget).hasClass("Odd"));
    console.log($playedOdd + "odd");
    }
    else if (clicks %2 === 0){
    $(event.currentTarget).empty();
    $(event.currentTarget).append($icon2);
    $(event.currentTarget).removeClass().addClass("Even");

    const $playedEven = [];
    const $trackPlayedEven = $playedEven.push($(event.currentTarget).hasClass("Even"));
    console.log($playedEven + "even");
    }
  };

    const $board = $("<div>").addClass("board");
    $("body").append($board);

    for (let i = 0; i <42; i++){
    const $square = $("<div>");
    $square.attr("id", 0+i);
    $square.addClass("square");
    $board.append($square);
    $("body").append($board);

    $square.one("click", placeIcon);
};
});
