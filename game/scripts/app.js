//make board
//make token 1
//make token 2
//make array of squares
//check if is array since console will only return as object.
//access individual squares
//make array of played squares?
//check if played squares = win...somehow
const $squareArr=[];

$(() => {

  let clicks = 0;

  const placeIcon = (event) => {

    clicks ++;

    const $icon1 = $("<div>");
    $icon1.addClass("X").text("X");
    console.log($icon1);

    const $icon2 = $("<div>");
    $icon2.addClass("O").text("O");
    console.log($icon2);

    if (clicks %2 !== 0){
      $(event.currentTarget).empty();
      $(event.currentTarget).append($icon1);
    }
    else if (clicks %2 === 0){
      $(event.currentTarget).empty();
      $(event.currentTarget).append($icon2);
    }

};
const $board = $("<div>").addClass("board");
$("body").append($board);


    for (let i = 0; i <42; i++){
    const $square = $("<div>");
    $square.attr("id", 0+i);
    $square.addClass("square");
    $board.append($square);

    const $makeSquareArr = $squareArr.push($square);
    // console.log(typeof $squareArr);
    // const isSquareArr = $.isArray($squareArr);
    // console.log(isSquareArr)

  $square.one("click", placeIcon);
};
  console.log($squareArr[0]);
  console.log($squareArr[1]);
});
