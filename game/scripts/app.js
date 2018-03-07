
$(() => {

const $oddArr = [];
const $evenArr = [];
//PLAYER 1
const checkColumnOdd = () => {

  const $oddInt = parseInt($(event.currentTarget).attr("id"));
  $oddArr.push($oddInt);

  if($oddArr[0] - 6 === $oddArr[1] && $oddArr[1] - 6 === $oddArr[2] && $oddArr[2] -6 === $oddArr[3]){
  announceOddWin();
  }
  else if ($oddArr[1] - 6 === $oddArr[2] && $oddArr[2] - 6 === $oddArr[3] && $oddArr[3] - 6 === $oddArr[4]){
    // alert("You're a good man Charlie Brown!");
  }
  else if ($oddArr[2] - 6 === $oddArr[3] && $oddArr[3] - 6 === $oddArr[4] && $oddArr[4] - 6 === $oddArr[5]){
    // alert("You're a good man Charlie Brown!");
  }
  else if ($oddArr[3] -6 === $oddArr[4] && $oddArr[4] -6 === $oddArr[5] && $oddArr[5] - 6 === $oddArr[6]){
    // alert("You're a good man Charlie Brown!");
  }

};

const checkRowOdd = () => {

  if($oddArr[0] + 1 === $oddArr[1] && $oddArr[1] + 1 === $oddArr[2] && $oddArr[2] +1 === $oddArr[3]){
  alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[0] - 1 === $oddArr[1] && $oddArr[1] - 1 === $oddArr[2] && $oddArr[2] -1 === $oddArr[3]){
    alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[1] + 1 === $oddArr[2] && $oddArr[2] + 1 === $oddArr[3] && $oddArr[3] +1 === $oddArr[4]){
  alert("You're a good man Charlie Brown!")
  }
  else if ($oddArr[1] - 1 === $oddArr[2] && $oddArr[2] - 1 === $oddArr[3] && $oddArr[3] -1 === $oddArr[4]){
  alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[2] + 1 === $oddArr[3] && $oddArr[3] + 1 === $oddArr[4] && $oddArr[4] +1 === $oddArr[5]){
    alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[2] - 1 === $oddArr[3] && $oddArr[3] - 1 === $oddArr[4] && $oddArr[4] -1 === $oddArr[5]){
    alert("You're a good man Charlie Brown!")
  }
};

const diagOddLeft = () => {
console.log("hi");

  if($oddArr[0] + 7 === $oddArr[1] && $oddArr[1] + 7 === $oddArr[2] && $oddArr[2] +7 === $oddArr[3]){
    alert("You're a good man Charlie Brown!");
  }
  else if($oddArr[0] - 7 === $oddArr[1] && $oddArr[1] - 7 === $oddArr[2] && $oddArr[2] -7 === $oddArr[3]){
    alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[1] + 7 === $oddArr[2] && $oddArr[2] + 7 === $oddArr[3] && $oddArr[3] +7 === $oddArr[4]){
  alert("You're a good man Charlie Brown!")
  }
  else if ($oddArr[1] - 7 === $oddArr[2] && $oddArr[2] - 7 === $oddArr[3] && $oddArr[3] -7 === $oddArr[4]){
  alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[2] + 7 === $oddArr[3] && $oddArr[3] + 7 === $oddArr[4] && $oddArr[4] +7 === $oddArr[5]){
    alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[2] - 7 === $oddArr[3] && $oddArr[3] - 7 === $oddArr[4] && $oddArr[4] -7 === $oddArr[5]){
    alert("You're a good man Charlie Brown!")
  }
};

const diagOddRight = () => {
console.log("hi");

  if($oddArr[0] + 5 === $oddArr[1] && $oddArr[1] + 5 === $oddArr[2] && $oddArr[2] +5 === $oddArr[3]){
    alert("You're a good man Charlie Brown!");
  }
  else if($oddArr[0] - 5 === $oddArr[1] && $oddArr[1] - 5 === $oddArr[2] && $oddArr[2] -5 === $oddArr[3]){
    alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[1] + 5 === $oddArr[2] && $oddArr[2] + 5 === $oddArr[3] && $oddArr[3] +5 === $oddArr[4]){
  alert("You're a good man Charlie Brown!")
  }
  else if ($oddArr[1] - 5 === $oddArr[2] && $oddArr[2] - 5 === $oddArr[3] && $oddArr[3] -5 === $oddArr[4]){
  alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[2] + 5 === $oddArr[3] && $oddArr[3] + 5 === $oddArr[4] && $oddArr[4] +5 === $oddArr[5]){
    alert("You're a good man Charlie Brown!")
  }
  else if($oddArr[2] - 5 === $oddArr[3] && $oddArr[3] - 5 === $oddArr[4] && $oddArr[4] -5 === $oddArr[5]){
    alert("You're a good man Charlie Brown!")
  }
};
//PLAYER TWO
const checkColumnEven = () => {

const $evenInt = parseInt($(event.currentTarget).attr("id"));
$evenArr.push($evenInt);

  if($evenArr[0] - 6 === $evenArr[1] && $evenArr[1] - 6 === $evenArr[2] && $evenArr[2] -6 === $evenArr[3]){
  alert("Snoopy wins!");
  }
  else if ($evenArr[1] - 6 === $evenArr[2] && $evenArr[2] - 6 === $evenArr[3] && $evenArr[3] - 6 === $evenArr[4]){
  console.log("Snoopy wins!");
  }
  else if ($evenArr[2] - 6 === $evenArr[3] && $evenArr[3] - 6 === $evenArr[4] && $evenArr[4] - 6 === $evenArr[5]){
  console.log("Snoopy wins!");
  }
  else if ($evenArr[3] -6 === $evenArr[4] && $evenArr[4] -6 === $evenArr[5] && $evenArr[5] - 6 === $evenArr[6]){
  console.log("Snoopy wins!");
  }
};

const checkRowEven = () => {

  if($evenArr[0] + 1 === $evenArr[1] && $evenArr[1] + 1 === $evenArr[2] && $evenArr[2] +1 === $evenArr[3]){
  console.log("Snoopy wins!");
  }
  else if($evenArr[0] - 1 === $evenArr[1] && $evenArr[1] - 1 === $evenArr[2] && $evenArr[2] -1 === $evenArr[3]){
  console.log("Snoopy wins!");
  }
  else if($evenArr[1] + 1 === $evenArr[2] && $evenArr[2] + 1 === $evenArr[3] && $evenArr[3] +1 === $evenArr[4]){
  console.log("Snoopy wins!");
  }
  else if ($evenArr[1] - 1 === $evenArr[2] && $evenArr[2] - 1 === $evenArr[3] && $evenArr[3] -1 === $evenArr[4]){
  console.log("Snoopy wins!");
  }
  else if($evenArr[2] + 1 === $evenArr[3] && $evenArr[3] + 1 === $evenArr[4] && $evenArr[4] +1 === $evenArr[5]){
  console.log("Snoopy wins!");
  }
  else if($evenArr[2] - 1 === $evenArr[3] && $evenArr[3] - 1 === $evenArr[4] && $evenArr[4] -1 === $evenArr[5]){
  console.log("Snoopy wins!");
  }
};

const diagEvenLeft = () => {
console.log("hi");

  if($evenArr[0] + 7 === $evenArr[1] && $evenArr[1] + 7 === $evenArr[2] && $evenArr[2] +7 === $evenArr[3]){
    alert("Snoopy wins!");
  }
  else if($evenArr[0] - 7 === $evenArr[1] && $evenArr[1] - 7 === $evenArr[2] && $evenArr[2] -7 === $evenArr[3]){
    alert("Snoopy wins!");
  }
  else if($evenArr[1] + 7 === $evenArr[2] && $evenArr[2] + 7 === $evenArr[3] && $evenArr[3] +7 === $evenArr[4]){
  alert("Snoopy wins!");
  }
  else if ($evenArr[1] - 7 === $evenArr[2] && $evenArr[2] - 7 === $evenArr[3] && $evenArr[3] -7 === $evenArr[4]){
  alert("Snoopy wins!");
  }
  else if($evenArr[2] + 7 === $evenArr[3] && $oddArr[3] + 7 === $evenArr[4] && $evenArr[4] +7 === $evenArr[5]){
    alert("Snoopy wins!");
  }
  else if($evenArr[2] - 7 === $evenArr[3] && $evenArr[3] - 7 === $evenArr[4] && $evenArr[4] -7 === $evenArr[5]){
    alert("Snoopy wins!");
  }
  else if($evenArr[3] + 7 === $evenArr[4] && $evenArr[4] + 7 === $evenArr[5] && $evenArr[5] +7 === $evenArr[6]){
    alert("Snoopy wins!");
  }
  else if($evenArr[3] - 7 === $evenArr[3] && $evenArr[3] - 7 === $evenArr[4] && $evenArr[4] -7 === $evenArr[5]){
    alert("Snoopy wins!");
  }
  else if($evenArr[4] + 7 === $evenArr[5] && $evenArr[5] + 7 === $evenArr[6] && $evenArr[6] +7 === $evenArr[7]){
    alert("Snoopy wins!");
  }
  else if($evenArr[4] - 7 === $evenArr[5] && $evenArr[5] - 7 === $evenArr[5] && $evenArr[6] -7 === $evenArr[7]){
        alert("Snoopy wins!");
  }
};

const diagEvenRight = () => {
console.log("hi");

  if($evenArr[0] + 5 === $evenArr[1] && $evenArr[1] + 5 === $evenArr[2] && $evenArr[2] +5 === $evenArr[3]){
    alert("Snoopy wins!");
  }
  else if($evenArr[0] - 5 === $evenArr[1] && $evenArr[1] - 5 === $evenArr[2] && $evenArr[2] -5 === $evenArr[3]){
    console.log("Snoopy wins!");
  }
  else if($evenArr[1] + 5 === $evenArr[2] && $evenArr[2] + 5 === $evenArr[3] && $evenArr[3] +5 === $evenArr[4]){
  alert("Snoopy wins!");
  }
  else if ($evenArr[1] - 5 === $evenArr[2] && $evenArr[2] - 5 === $evenArr[3] && $evenArr[3] -5 === $evenArr[4]){
  alert("Snoopy wins!");
  }
  else if($evenArr[2] + 5 === $evenArr[3] && $evenArr[3] + 5 === $evenArr[4] && $evenArr[4] +5 === $evenArr[5]){
    alert("Snoopy wins!");
  }
  else if($evenArr[2] - 5 === $evenArr[3] && $evenArr[3] - 5 === $evenArr[4] && $evenArr[4] -5 === $evenArr[5]){
    alert("Snoopy wins!");
  }
};


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


      checkColumnOdd();
      checkRowOdd();
      diagOddLeft();
      diagOddRight();


    }
    else if (clicks %2 === 0) {
       $(event.currentTarget).empty();
       $(event.currentTarget).append($icon2);
       $(event.currentTarget).addClass("Even");


       checkColumnEven();
       checkRowEven();
       diagEvenLeft();
       diagEvenRight();

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
      announceOddWin = () => {
        alert("Win");
      };


      });
