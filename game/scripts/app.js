
$(() => {
//check class, id and value of chosen spot
const $oddArr = [];
const $evenArr = [];
  const checkColumn = () => {
//determine adjacent
//determine if 4
// if four adjacent spots have the same class announce win
//if difference in number values between each spot is 6, announce win
//get integer value of selected spot
console.log($(event.currentTarget));
const $oddInt = parseInt($(event.currentTarget).attr("id"));
console.log($(event.currentTarget).hasClass("Odd"));
// console.log($("<div>"));
console.log(parseInt($(event.currentTarget).attr("id")));
//get integer value of top adjacent
console.log(($(event.currentTarget).attr("id")) - 6);
console.log(parseInt($(event.currentTarget).attr("id")) - 6);
//get integer value of bottom adjacent
console.log(parseInt($(event.currentTarget).attr("id")) + 6);
//two top adjacent
console.log(parseInt($(event.currentTarget).attr("id")) - 12);
//two bottom adjacent
console.log(parseInt($(event.currentTarget).attr("id")) + 12);
//three top adjacent
console.log(parseInt($(event.currentTarget).attr("id")) - 18);
//three bottom adjacent
console.log(parseInt($(event.currentTarget).attr("id")) + 18);
//
$oddArr.push($oddInt);
console.log($oddArr);

const fourClicks = () => {
for (let i=0; i <$oddArr.length; i++){
// //   console.log($oddArr[0], $oddArr[1], $oddArr[2]);
// console.log($oddArr[i] ++);
console.log(i);
if (i > 0 && i%3===0){
  console.log("user clicked 4 times");
}
}
};

fourClicks();
  // if($oddArr[i] - 6 === $oddArr[i] +=1 && $oddArr[i] - 6 === $oddArr[i] && $oddArr[i] -6 === $oddArr[i]){
  //   console.log("win");
  // }
  // else if ($oddArr[1] - 6 === $oddArr[2] && $oddArr[2] - 6 === $oddArr[3] && $oddArr[3] - 6 === $oddArr[4]){
  //   console.log("win");
  // }
  // else if ($oddArr[2] - 6 === $oddArr[3] && $oddArr[3] - 6 === $oddArr[4] && $oddArr[4] - 6 === $oddArr[5]){
  //   console.log("win");
  // }
  // else if ($oddArr[3] -6 === $oddArr[4] && $oddArr[4] -6 === $oddArr[5] && $oddArr[5] - 6 === $oddArr[6]){
  //   console.log("win");
  // }
// }



// console.log($oddInt);
// console.log($oddInt[0]);
// console.log($oddInt[0]-6);
// console.log($oddInt[1]);
// console.log($oddInt[0] && $oddInt[1]);
//

// rowCheck
//get integer value of selected spot
// console.log(parseInt($(event.currentTarget).attr("id")));
// //get integer value of right adjacent
// console.log(parseInt($(event.currentTarget).attr("id")) + 1);
// //get integer value of left adjacent
// console.log(parseInt($(event.currentTarget).attr("id")) - 1);
// //integer value of right two adjacent
// console.log(parseInt($(event.currentTarget).attr("id")) + 2);
// //left two adjacent
// console.log(parseInt($(event.currentTarget).attr("id")) - 2);
// //three right adjacent
// console.log(parseInt($(event.currentTarget).attr("id")) + 3);
// // three left adjacent
// console.log(parseInt($(event.currentTarget).attr("id")) - 3);
//
//   if ($(event.currentTarget).attr("id") && ($(event.currentTarget).attr("id") + 1)){
//     console.log("yes clicked spot and next spot are being compared");
//   }
//
//   //compare adjacent elements
//
//
//
//   console.log($("<div>"));
//   console.log($("<div>").attr("id"));
//   console.log(parseInt($("<div>").attr("id")));
//   parseInt($("<div>").attr("id"));
//if two adjacent elements are equal, compare more
//if four adjacent elements are equal, announce win


};



// const columnWin = () => {
//   console.log($playedOdd);
//   for (let i = 0; i < $playedOdd.length; i++){
//     console.log("columnwin is working")
//   }
//
// };

    // console.log(i);
    // console.log($playedOdd);
    // console.log($playedOdd[0]);
    // console.log($playedOdd);
    // console.log(($playedOdd).attr("id"));

  let clicks = 0;

  const placeIcon = (event) => {
    console.log("place icon is working");

    clicks ++;

    const $icon1 = $("<div>");
    $icon1.addClass("X");

    const $icon2 = $("<div>");
    $icon2.addClass("O");

    if (clicks %2 !== 0) {
      console.log($(event.currentTarget));
      $(event.currentTarget).empty();
      $(event.currentTarget).append($icon1);
      $(event.currentTarget).addClass("Odd");

      // const $clickedOdd = $(event.currentTarget).attr("id");
      // console.log($(event.currentTarget));
      // console.log("clicked square num " + $clickedOdd);


      checkColumn();
      // checkRow();

    }

    else if (clicks %2 === 0) {
       $(event.currentTarget).empty();
       $(event.currentTarget).append($icon2);
       $(event.currentTarget).addClass("Even");

       // const $clickedEven = $(event.currentTarget).attr("id");
       // console.log("clicked square num " + $clickedEven);
       // $evenArr.push($clickedEven);
       // console.log("square num " + $clickedEven + " in evenArr");

       // checkColumn();
       // checkRow();
     }

   };
      const $board = $("<div>").addClass("board");
      $("body").append($board);
      console.log($board);

      for (let i = 0; i <42; i++){
        const $square = $("<div>");
        $square.attr("id", i);
        $square.addClass("square");
        $board.append($square);

        $square.one("click", placeIcon);

        }

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
