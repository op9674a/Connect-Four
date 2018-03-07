
const $squareArr=[];



$(() => {
const check = () => {
  console.log("check");
  console.log($(event.currentTarget).hasClass(".Odd"));
  console.log($(event.currentTarget).attr("id"));


      console.log(parseInt($(event.currentTarget).attr("id")));
      console.log(parseInt($(event.currentTarget).attr("id")) + 1);
      console.log($("<div>"));
      
// if (parseInt($(event.currentTarget).attr("id").hasClass(".Odd") && parseInt($(event.currentTarget).attr("id")) + 1)).hasClass(".Odd")

  // console.log($(event.currentTarget).attr("id"));
  console.log($("#36").hasClass("Odd"));
//   if ($(event.currentTarget).attr("id")) && $(event.currentTarget).attr("id") + 1){
//   console.log("equal");
// }
};


  const $playedOdd = [];
  const $playedEven = [];

const columnWin = () => {
  console.log($playedOdd);
  let sum = 0;
  for (let i = 0; i < $playedOdd.length; i++){
    console.log("columnwin is working")
    console.log(sum += $playedOdd[i]);
  }
  return sum;
  console.log(sum);
};
// for (let i = 0; i < 4; i)
    // console.log(i);
    // console.log($playedOdd);
    // console.log($playedOdd[0]);
    // console.log($playedOdd);
    // console.log(($playedOdd).attr("id"));



  // if {
  //       every difference between i value is 6, alert win
  //     }

let clicks = 0;

const placeIcon = (event) => {
console.log("place icon is working");

  clicks ++;

  const $icon1 = $("<div>");
  $icon1.addClass("X");

  const $icon2 = $("<div>");
  $icon2.addClass("O");

  if (clicks %2 !== 0) {
      //get column
      //loop through
      // const $columnName = $(event.target).attr("class").replace("column", "")
      $(event.currentTarget).empty();
      $(event.currentTarget).append($icon1);
      $(event.currentTarget).addClass("Odd");


      let $trackPlayedOdd = $(event.currentTarget).attr("id");
      console.log($trackPlayedOdd);
      $playedOdd.push($trackPlayedOdd);
      console.log($playedOdd);
      columnWin();
  }
  else if (clicks %2 === 0) {
       $(event.currentTarget).empty();
       $(event.currentTarget).append($icon2);
       $(event.currentTarget).addClass("Even");
       // checkWin();
       let $trackPlayedEven = $(event.currentTarget).attr("id");
       console.log($trackPlayedEven);
       $playedEven.push($trackPlayedEven);
       console.log($playedEven);
     }

  columnWin();
check();
}
      const $board = $("<div>").addClass("board");
      $("body").append($board);

      for (let i = 0; i <42; i++){
        const $square = $("<div>");
        $square.attr("id", i);
        $square.addClass("column" + i%6).addClass("square");
        $board.append($square);
      };

$(".square").one("click", placeIcon);

});
//
// const $column0 = [$("div#0"), $("div#6"), $("#div#12"), $("div#18"), $("div#24"), $("div#30"), $("div#36")];
// const $column1 = [$("div#1"), $("div#7"), $("#div#13"), $("div#19"), $("div#25"), $("div#31"), $("div#37")];
// const $column2 = [$("div#2"), $("div#8"), $("#div#14"), $("div#20"), $("div#26"), $("div#32"), $("div#38")];
// const $column3 = [$("div#3"), $("div#9"), $("#div#15"), $("div#21"), $("div#27"), $("div#33"), $("div#39")];
// const $column4 = [$("div#4"), $("div#10"), $("#div#16"), $("div#22"), $("div#28"), $("div#34"), $("div#40")];
// const $column5 = [$("div#5"), $("div#11"), $("#div#17"), $("div#23"), $("div#29"), $("div#35"), $("div#41")];
//
// console.log($column0);
// console.log($column1);
// console.log($column2);
// console.log($column3);
// console.log($column4);
// console.log($column5);
//
// const columnsaArray = [$column0, $column1, $column2, $column3, $column4, $column5];
//
// console.log(columnsaArray);
//
// const $row0 = [$("div#36"), $("div#37"), $("div#38"), $("div#39"), $("div#40"), $("div#41")];
// const $row1 =[$("div#30"),$("div#31"),$("div#32"),$("div#33"),$("div#34"),$("div#35")];
// const $row2 = [$("div#24"),$("div#25"),$("div#26"),$("div#27"),$("div#28"),$("div#29")];
// const $row3 = [$("div#18"),$("div#19"),$("div#20"),$("div#21"),$("div#22"),$("div#23")];
// const $row4 = [$("#div#12"),$("#div#13"),$("#div#14"),$("#div#15"),$("#div#16"), $("#div#17")];
// const $row5 = [$("div#6"),$("div#7"),$("div#8"),$("div#9"),$("div#10"),$("div#11")];
// const $row6 = [$("div#0"),$("div#1"),$("div#2"),$("div#3"), $("div#4"),("div#5")];
//
// const rowsArray = [$row0, $row1, $row2, $row3, $row4, $row5, $row6];
//
// console.log(rowsArray);
// console.log($row0);
// console.log($row1);
// console.log($row2);
// console.log($row3);
// console.log($row4);
// console.log($row5);
// console.log($row6);
