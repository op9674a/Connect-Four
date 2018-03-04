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
    // .attr("src" ,"https://www.teacherswithapps.com/wp-content/uploads/2017/11/download-1.png");
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
      $(event.currentTarget).removeClass().addClass("Odd");
      const $playedOdd = [];
      const $trackPlayedOdd = $playedOdd.push($(event.currentTarget).hasClass("Odd"));
      console.log($playedOdd);
    }
    else if (clicks %2 === 0){
      $(event.currentTarget).empty();
      $(event.currentTarget).append($icon2);
      $(event.currentTarget).removeClass().addClass("Even");

      const $playedEven = [];
      const $trackPlayedEven = $playedEven.push($(event.currentTarget).hasClass("Even"));
      console.log($playedEven);
    }
    // const horizontalWin = () => {
    //   if ($("16").hasClass("Even") && $("17").hasClass("Even") && $("18").hasClass("Even") && $("19").hasClass("Even")){
    //     alert("Even wins!")
    //   }
    // }
    // horizontalWin();

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
// ROWS
const $row1 = [$squareArr[16], $squareArr[17], $squareArr[18], $squareArr[19]];

const $row2 = [$squareArr[12], $squareArr[13], $squareArr[14], $squareArr[15]];

const $row3 = [$squareArr[8], $squareArr[9], $squareArr[10], $squareArr[11]];

const $row4 = [$squareArr[4], $squareArr[5], $squareArr[6], $squareArr[7]];

const $row5 = [$squareArr[0], $squareArr[1], $squareArr[2], $squareArr[3]];

// COLUMNS
const $column1 = [$squareArr[0], $squareArr[4], $squareArr[8], $squareArr[12], $squareArr[16]];

const $column2 = [$squareArr[1], $squareArr[5], $squareArr[9], $squareArr[13], $squareArr[17]];

const $column3 = [$squareArr[2],$squareArr[6],$squareArr[10],$squareArr[14],$squareArr[18]];

const $column4 = [$squareArr[3],$squareArr[7],$squareArr[11],$squareArr[15],$squareArr[19]];

//DIAGONAL
const $diag1 = [$squareArr[0],$squareArr[5],$squareArr[10],$squareArr[15]];

const $diag2 = [$squareArr[3],$squareArr[6],$squareArr[9],$squareArr[12]];

const $diag3 = [$squareArr[4],$squareArr[9],$squareArr[14],$squareArr[19]];

const $diag4 = [$squareArr[7],$squareArr[10],$squareArr[13],$squareArr[16]];



});
  // console.log($squareArr[0]);
  // console.log($squareArr[1]);
