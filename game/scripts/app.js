//make board
//make token 1
//make token 2

const spots = [
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
  // [],
];

//check if is array since console will only return as object, this took forever to figure out though Im sure it was mentioned in class. cool.
console.log(typeof spots);
const isSpotsArr = $.isArray(spots);
console.log(isSpotsArr);

$(() => {

  let clicks = 0;

  const changeIcon = (event) => {

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

// const $boardArr = [];

  const $board = $("<div>").addClass("board");
  $("body").append($board);
  // $boardArr.push($board);
  console.log(typeof $board);
  // console.log($("div"));
  // console.log($("div").eq(2).eq(0));
  // console.log(typeof $("div").eq(2).eq(0));
  // const isBoardArr = $.isArray($boardArr);
  // console.log(isBoardArr);
  // console.log($boardArr);
  // console.log($boardArr[0]);
  // console.log(($boardArr[0][0]));


    for (let i = 0; i <42; i++){
    const $square = $("<div>")
    $square.attr("id",  1+i);
    $square.addClass("square");
    $board.append($square);
    console.log(typeof $square);

  // const $squareArr = [];
  // $squareArr.push($square);
  // const isSquareArr = $.isArray($squareArr);
  // console.log(isSquareArr);
  // console.log($squareArr);
  // console.log($squareArr[0]);
  // console.log($squareArr[0][1]);






    //
    // $boardArr.push($square);
    // console.log($boardArr);
    // console.log(typeof $square);
    // const isArr = $.isArray($boardArr);
    // console.log(isArr);




    $square.one("click", changeIcon);
  }
});
