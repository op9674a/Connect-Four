//make board
//make token 1
//make token 2
//make array of squares
//check if is array since console will only return as object.
//access individual squares
//only allow square on lowest available space in column
//make array of played squares?
//check if played squares = win...somehow
const $squareArr=[];

$(() => {

  let clicks = 0;

  const placeIconBottomRow = (event) => {

    clicks ++;

    const $icon1 = $("<div>");
    $icon1.addClass("X").text("X");
    console.log($icon1);

    const $icon2 = $("<div>");
    $icon2.addClass("O").text("O");
    console.log($icon2);

    // if (true) {
    //
    // }
    if (clicks %2 !== 0){
      $(event.currentTarget).empty();
      $(event.currentTarget).append($icon1);
      $(event.currentTarget).removeClass().addClass("playedOdd");
      const $playedOdd = [];
      const $trackPlayedOdd = $playedOdd.push($(event.currentTarget).hasClass("playedOdd"));
      console.log($playedOdd);
    }
    else if (clicks %2 === 0){
      $(event.currentTarget).empty();
      $(event.currentTarget).append($icon2);
      $(event.currentTarget).removeClass().addClass("playedEven");

      const $playedEven = [];
      const $trackPlayedEven = $playedEven.push($(event.currentTarget).hasClass("playedEven"));
      console.log($playedEven);
    }
  };

const $board = $("<div>").addClass("board");
$("body").append($board);


    for (let i = 0; i <20; i++){
    const $square = $("<div>");
    $square.attr("id", 0+i);
    $square.addClass("square");
    $board.append($square);

    const $makeSquareArr = $squareArr.push($square);


  $square.one("click", placeIconBottomRow);


};
  // console.log($squareArr[0]);
  // console.log($squareArr[1]);



  const horizontalWin = () => {
  //   if playedSquares[] =
  }

});
