//make board
//make token 1
//make token 2
console.log("Hello");
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

  const $board = $("<div>").addClass("board");
  $("body").append($board);

    for (let i = 0; i <42; i++){
    const $square = $("<div>").addClass("square");
    $board.append($square);



    $square.one("click", changeIcon);
  }
});
