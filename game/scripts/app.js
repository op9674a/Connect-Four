
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
  else if ($oddArr[0] + 6 === $oddArr[1] && $oddArr[1] + 6 === $oddArr[2] && $oddArr[2] + 6 === $oddArr[3]){
    announceOddWin();
  }
  else if ($oddArr[1] + 6 === $oddArr[2] && $oddArr[2] + 6 === $oddArr[3] && $oddArr[3] + 6 === $oddArr[4]){
    announceOddWin();
  }
  else if ($oddArr[1] - 6 === $oddArr[2] && $oddArr[2] - 6 === $oddArr[3] && $oddArr[3] - 6 === $oddArr[4]){
    announceOddWin();
  }
  else if ($oddArr[2] + 6 === $oddArr[3] && $oddArr[3] + 6 === $oddArr[4] && $oddArr[4] + 6 === $oddArr[5]){
    announceOddWin();
  }
  else if ($oddArr[2] - 6 === $oddArr[3] && $oddArr[3] - 6 === $oddArr[4] && $oddArr[4] - 6 === $oddArr[5]){
    announceOddWin();
  }
  else if ($oddArr[3] + 6 === $oddArr[4] && $oddArr[4] + 6 === $oddArr[5] && $oddArr[5] + 6 === $oddArr[6]){
    announceOddWin();
  }
  else if ($oddArr[3] -6 === $oddArr[4] && $oddArr[4] -6 === $oddArr[5] && $oddArr[5] - 6 === $oddArr[6]){
    announceOddWin();
  }
  else if ($oddArr[4] +6 === $oddArr[5] && $oddArr[5] +6 === $oddArr[6] && $oddArr[6] + 6 === $oddArr[7]){
    announceOddWin();
  }
  else if ($oddArr[4] -6 === $oddArr[5] && $oddArr[5] -6 === $oddArr[6] && $oddArr[6] - 6 === $oddArr[7]){
    announceOddWin();
  }
  else if ($oddArr[5] +6 === $oddArr[6] && $oddArr[6] +6 === $oddArr[7] && $oddArr[7] + 6 === $oddArr[8]){
    announceOddWin();
  }
  else if ($oddArr[5] -6 === $oddArr[6] && $oddArr[6] -6 === $oddArr[7] && $oddArr[7] - 6 === $oddArr[8]){
    announceOddWin();
  }
  else if ($oddArr[6] +6 === $oddArr[7] && $oddArr[7] +6 === $oddArr[8] && $oddArr[8] + 6 === $oddArr[9]){
    announceOddWin();
  }
  else if ($oddArr[6] -6 === $oddArr[7] && $oddArr[7] -6 === $oddArr[8] && $oddArr[8] - 6 === $oddArr[9]){
    announceOddWin();
  }
  else if ($oddArr[7] +6 === $oddArr[8] && $oddArr[8] +6 === $oddArr[9] && $oddArr[9] + 6 === $oddArr[10]){
    announceOddWin();
  }
  else if ($oddArr[7] -6 === $oddArr[8] && $oddArr[8] -6 === $oddArr[9] && $oddArr[9] - 6 === $oddArr[10]){
    announceOddWin();
  }
  else if ($oddArr[8] +6 === $oddArr[9] && $oddArr[9] +6 === $oddArr[10] && $oddArr[10] + 6 === $oddArr[11]){
    announceOddWin();
  }
  else if ($oddArr[8] -6 === $oddArr[9] && $oddArr[9] -6 === $oddArr[10] && $oddArr[10] - 6 === $oddArr[11]){
    announceOddWin();
  }
  else if ($oddArr[9] +6 === $oddArr[10] && $oddArr[10] +6 === $oddArr[11] && $oddArr[11] + 6 === $oddArr[12]){
    announceOddWin();
  }
  else if ($oddArr[9] -6 === $oddArr[10] && $oddArr[10] -6 === $oddArr[11] && $oddArr[11] - 6 === $oddArr[12]){
    announceOddWin();
  }
  else if ($oddArr[10] +6 === $oddArr[11] && $oddArr[11] +6 === $oddArr[12] && $oddArr[12] + 6 === $oddArr[13]){
    announceOddWin();
  }
  else if ($oddArr[10] -6 === $oddArr[11] && $oddArr[11] -6 === $oddArr[12] && $oddArr[12] - 6 === $oddArr[13]){
    announceOddWin();
  }
  else if ($oddArr[11] +6 === $oddArr[12] && $oddArr[12] +6 === $oddArr[13] && $oddArr[13] + 6 === $oddArr[14]){
    announceOddWin();
  }
  else if ($oddArr[11] -6 === $oddArr[12] && $oddArr[12] -6 === $oddArr[13] && $oddArr[13] - 6 === $oddArr[14]){
    announceOddWin();
  }
  else if ($oddArr[12] +6 === $oddArr[13] && $oddArr[13] +6 === $oddArr[14] && $oddArr[14] + 6 === $oddArr[15]){
    announceOddWin();
  }
  else if ($oddArr[12] -6 === $oddArr[13] && $oddArr[13] -6 === $oddArr[14] && $oddArr[14] - 6 === $oddArr[15]){
    announceOddWin();
  }
  else if ($oddArr[13] +6 === $oddArr[14] && $oddArr[14] +6 === $oddArr[15] && $oddArr[15] + 6 === $oddArr[16]){
    announceOddWin();
  }
  else if ($oddArr[13] -6 === $oddArr[14] && $oddArr[14] -6 === $oddArr[15] && $oddArr[15] - 6 === $oddArr[16]){
    announceOddWin();
  }
  else if ($oddArr[14] +6 === $oddArr[15] && $oddArr[15] +6 === $oddArr[16] && $oddArr[16] + 6 === $oddArr[17]){
    announceOddWin();
  }
  else if ($oddArr[14] -6 === $oddArr[15] && $oddArr[15] -6 === $oddArr[16] && $oddArr[16] - 6 === $oddArr[17]){
    announceOddWin();
  }
  else if ($oddArr[15] +6 === $oddArr[16] && $oddArr[16] +6 === $oddArr[17] && $oddArr[17] + 6 === $oddArr[18]){
    announceOddWin();
  }
  else if ($oddArr[15] -6 === $oddArr[16] && $oddArr[16] -6 === $oddArr[17] && $oddArr[17] - 6 === $oddArr[18]){
    announceOddWin();
  }
  else if ($oddArr[16] +6 === $oddArr[17] && $oddArr[17] +6 === $oddArr[18] && $oddArr[18] + 6 === $oddArr[19]){
    announceOddWin();
  }
  else if ($oddArr[16] -6 === $oddArr[17] && $oddArr[17] -6 === $oddArr[18] && $oddArr[18] - 6 === $oddArr[19]){
    announceOddWin();
  }
  else if ($oddArr[17] +6 === $oddArr[18] && $oddArr[18] +6 === $oddArr[19] && $oddArr[19] + 6 === $oddArr[20]){
    announceOddWin();
  }
  else if ($oddArr[17] -6 === $oddArr[18] && $oddArr[18] -6 === $oddArr[19] && $oddArr[19] - 6 === $oddArr[20]){
    announceOddWin();
  }
  else if ($oddArr[18] +6 === $oddArr[19] && $oddArr[19] +6 === $oddArr[20] && $oddArr[20] + 6 === $oddArr[21]){
    announceOddWin();
  }
  else if ($oddArr[18] -6 === $oddArr[19] && $oddArr[19] -6 === $oddArr[20] && $oddArr[20] - 6 === $oddArr[21]){
    announceOddWin();
  }
  else if ($oddArr[19] +6 === $oddArr[20] && $oddArr[20] +6 === $oddArr[21] && $oddArr[21] + 6 === $oddArr[22]){
    announceOddWin();
  }
  else if ($oddArr[19] -6 === $oddArr[20] && $oddArr[20] -6 === $oddArr[21] && $oddArr[21] - 6 === $oddArr[22]){
    announceOddWin();
  }
};

const checkRowOdd = () => {

  if($oddArr[0] -1 === $oddArr[1] && $oddArr[1] -1 === $oddArr[2] && $oddArr[2] -1 === $oddArr[3]){
    announceOddWin();
  }
  else if ($oddArr[0] + 1 === $oddArr[1] && $oddArr[1] + 1 === $oddArr[2] && $oddArr[2] + 1 === $oddArr[3]){
    announceOddWin();
  }
  else if ($oddArr[1] + 1 === $oddArr[2] && $oddArr[2] + 1 === $oddArr[3] && $oddArr[3] + 1 === $oddArr[4]){
    announceOddWin();
  }
  else if ($oddArr[1] -1 === $oddArr[2] && $oddArr[2] -1 === $oddArr[3] && $oddArr[3] -1 === $oddArr[4]){
    announceOddWin();
  }
  else if ($oddArr[2] +1 === $oddArr[3] && $oddArr[3] +1 === $oddArr[4] && $oddArr[4] +1 === $oddArr[5]){
    announceOddWin();
  }
  else if ($oddArr[2] -1 === $oddArr[3] && $oddArr[3] -1 === $oddArr[4] && $oddArr[4] -1 === $oddArr[5]){
    announceOddWin();
  }
  else if ($oddArr[3] +1 === $oddArr[4] && $oddArr[4] +1 === $oddArr[5] && $oddArr[5] +1 === $oddArr[6]){
    announceOddWin();
  }
  else if ($oddArr[3] -1 === $oddArr[4] && $oddArr[4] -1 === $oddArr[5] && $oddArr[5] -1 === $oddArr[6]){
    announceOddWin();
  }
  else if ($oddArr[4] +1 === $oddArr[5] && $oddArr[5] +1 === $oddArr[6] && $oddArr[6] +1 === $oddArr[7]){
    announceOddWin();
  }
  else if ($oddArr[4] -1 === $oddArr[5] && $oddArr[5] -1 === $oddArr[6] && $oddArr[6] -1 === $oddArr[7]){
    announceOddWin();
  }
  else if ($oddArr[5] +1 === $oddArr[6] && $oddArr[6] +1 === $oddArr[7] && $oddArr[7] +1 === $oddArr[8]){
    announceOddWin();
  }
  else if ($oddArr[5] -1 === $oddArr[6] && $oddArr[6] -1 === $oddArr[7] && $oddArr[7] -1 === $oddArr[8]){
    announceOddWin();
  }
  else if ($oddArr[6] +1 === $oddArr[7] && $oddArr[7] +1 === $oddArr[8] && $oddArr[8] +1 === $oddArr[9]){
    announceOddWin();
  }
  else if ($oddArr[6] -1 === $oddArr[7] && $oddArr[7] -1 === $oddArr[8] && $oddArr[8] -1 === $oddArr[9]){
    announceOddWin();
  }
  else if ($oddArr[7] +1 === $oddArr[8] && $oddArr[8] +1 === $oddArr[9] && $oddArr[9] +1 === $oddArr[10]){
    announceOddWin();
  }
  else if ($oddArr[7] -1 === $oddArr[8] && $oddArr[8] -1 === $oddArr[9] && $oddArr[9] -1 === $oddArr[10]){
    announceOddWin();
  }
  else if ($oddArr[8] +1 === $oddArr[9] && $oddArr[9] +1 === $oddArr[10] && $oddArr[10] +1 === $oddArr[11]){
    announceOddWin();
  }
  else if ($oddArr[8] -1 === $oddArr[9] && $oddArr[9] -1 === $oddArr[10] && $oddArr[10] -1 === $oddArr[11]){
    announceOddWin();
  }
  else if ($oddArr[9] +1 === $oddArr[10] && $oddArr[10] +1 === $oddArr[11] && $oddArr[11] +1 === $oddArr[12]){
    announceOddWin();
  }
  else if ($oddArr[9] -1 === $oddArr[10] && $oddArr[10] -1 === $oddArr[11] && $oddArr[11] -1 === $oddArr[12]){
    announceOddWin();
  }
  else if ($oddArr[10] +1 === $oddArr[11] && $oddArr[11] +1 === $oddArr[12] && $oddArr[12] +1 === $oddArr[13]){
    announceOddWin();
  }
  else if ($oddArr[10] -1 === $oddArr[11] && $oddArr[11] -1 === $oddArr[12] && $oddArr[12] -1 === $oddArr[13]){
    announceOddWin();
  }
  else if ($oddArr[11] +1 === $oddArr[12] && $oddArr[12] +1 === $oddArr[13] && $oddArr[13] +1 === $oddArr[14]){
    announceOddWin();
  }
  else if ($oddArr[11] -1 === $oddArr[12] && $oddArr[12] -1 === $oddArr[13] && $oddArr[13] -1 === $oddArr[14]){
    announceOddWin();
  }
  else if ($oddArr[12] +1 === $oddArr[13] && $oddArr[13] +1 === $oddArr[14] && $oddArr[14] +1 === $oddArr[15]){
    announceOddWin();
  }
  else if ($oddArr[12] -1 === $oddArr[13] && $oddArr[13] -1 === $oddArr[14] && $oddArr[14] -1 === $oddArr[15]){
    announceOddWin();
  }
  else if ($oddArr[13] +1 === $oddArr[14] && $oddArr[14] +1 === $oddArr[15] && $oddArr[15] +1 === $oddArr[16]){
    announceOddWin();
  }
  else if ($oddArr[13] -1 === $oddArr[14] && $oddArr[14] -1 === $oddArr[15] && $oddArr[15] -1 === $oddArr[16]){
    announceOddWin();
  }
  else if ($oddArr[14] +1 === $oddArr[15] && $oddArr[15] +1 === $oddArr[16] && $oddArr[16] +1 === $oddArr[17]){
    announceOddWin();
  }
  else if ($oddArr[14] -1 === $oddArr[15] && $oddArr[15] -1 === $oddArr[16] && $oddArr[16] -1 === $oddArr[17]){
    announceOddWin();
  }
  else if ($oddArr[15] +1 === $oddArr[16] && $oddArr[16] +1 === $oddArr[17] && $oddArr[17] +1 === $oddArr[18]){
    announceOddWin();
  }
  else if ($oddArr[15] -1 === $oddArr[16] && $oddArr[16] -1 === $oddArr[17] && $oddArr[17] -1 === $oddArr[18]){
    announceOddWin();
  }
  else if ($oddArr[16] +1 === $oddArr[17] && $oddArr[17] +1 === $oddArr[18] && $oddArr[18] +1 === $oddArr[19]){
    announceOddWin();
  }
  else if ($oddArr[16] -1 === $oddArr[17] && $oddArr[17] -1 === $oddArr[18] && $oddArr[18] -1 === $oddArr[19]){
    announceOddWin();
  }
  else if ($oddArr[17] +1 === $oddArr[18] && $oddArr[18] +1 === $oddArr[19] && $oddArr[19] +1 === $oddArr[20]){
    announceOddWin();
  }
  else if ($oddArr[17] -1 === $oddArr[18] && $oddArr[18] -1 === $oddArr[19] && $oddArr[19] -1 === $oddArr[20]){
    announceOddWin();
  }
  else if ($oddArr[18] +1 === $oddArr[19] && $oddArr[19] +1 === $oddArr[20] && $oddArr[20] +1 === $oddArr[21]){
    announceOddWin();
  }
  else if ($oddArr[18] -1 === $oddArr[19] && $oddArr[19] -1 === $oddArr[20] && $oddArr[20] -1 === $oddArr[21]){
    announceOddWin();
  }
  else if ($oddArr[19] +1 === $oddArr[20] && $oddArr[20] +1 === $oddArr[21] && $oddArr[21] +1 === $oddArr[22]){
    announceOddWin();
  }
  else if ($oddArr[19] -1 === $oddArr[20] && $oddArr[20] -1 === $oddArr[21] && $oddArr[21] -1 === $oddArr[22]){
    announceOddWin();
  }
};

const diagOddLeft = () => {

  if($oddArr[0] -7 === $oddArr[1] && $oddArr[1] -7 === $oddArr[2] && $oddArr[2] -7 === $oddArr[3]){
    announceOddWin();
  }
  else if ($oddArr[0] + 7 === $oddArr[1] && $oddArr[1] + 7 === $oddArr[2] && $oddArr[2] + 7 === $oddArr[3]){
    announceOddWin();
  }
  else if ($oddArr[1] + 7 === $oddArr[2] && $oddArr[2] + 7 === $oddArr[3] && $oddArr[3] + 7 === $oddArr[4]){
    announceOddWin();
  }
  else if ($oddArr[1] -7 === $oddArr[2] && $oddArr[2] -7 === $oddArr[3] && $oddArr[3] -7 === $oddArr[4]){
    announceOddWin();
  }
  else if ($oddArr[2] +7 === $oddArr[3] && $oddArr[3] +7 === $oddArr[4] && $oddArr[4] +7 === $oddArr[5]){
    announceOddWin();
  }
  else if ($oddArr[2] -7 === $oddArr[3] && $oddArr[3] -7 === $oddArr[4] && $oddArr[4] -7 === $oddArr[5]){
    announceOddWin();
  }
  else if ($oddArr[3] +7 === $oddArr[4] && $oddArr[4] +7 === $oddArr[5] && $oddArr[5] +7 === $oddArr[6]){
    announceOddWin();
  }
  else if ($oddArr[3] -7 === $oddArr[4] && $oddArr[4] -7 === $oddArr[5] && $oddArr[5] -7 === $oddArr[6]){
    announceOddWin();
  }
  else if ($oddArr[4] +7 === $oddArr[5] && $oddArr[5] +7 === $oddArr[6] && $oddArr[6] +7 === $oddArr[7]){
    announceOddWin();
  }
  else if ($oddArr[4] -7 === $oddArr[5] && $oddArr[5] -7 === $oddArr[6] && $oddArr[6] -7 === $oddArr[7]){
    announceOddWin();
  }
  else if ($oddArr[5] +7 === $oddArr[6] && $oddArr[6] +7 === $oddArr[7] && $oddArr[7] +7 === $oddArr[8]){
    announceOddWin();
  }
  else if ($oddArr[5] -7 === $oddArr[6] && $oddArr[6] -7 === $oddArr[7] && $oddArr[7] -7 === $oddArr[8]){
    announceOddWin();
  }
  else if ($oddArr[6] +7 === $oddArr[7] && $oddArr[7] +7 === $oddArr[8] && $oddArr[8] +7 === $oddArr[9]){
    announceOddWin();
  }
  else if ($oddArr[6] -7 === $oddArr[7] && $oddArr[7] -7 === $oddArr[8] && $oddArr[8] -7 === $oddArr[9]){
    announceOddWin();
  }
  else if ($oddArr[7] +7 === $oddArr[8] && $oddArr[8] +7 === $oddArr[9] && $oddArr[9] +7 === $oddArr[10]){
    announceOddWin();
  }
  else if ($oddArr[7] -7 === $oddArr[8] && $oddArr[8] -7 === $oddArr[9] && $oddArr[9] -7 === $oddArr[10]){
    announceOddWin();
  }
  else if ($oddArr[8] +7 === $oddArr[9] && $oddArr[9] +7 === $oddArr[10] && $oddArr[10] +7 === $oddArr[11]){
    announceOddWin();
  }
  else if ($oddArr[8] -7 === $oddArr[9] && $oddArr[9] -7 === $oddArr[10] && $oddArr[10] -7 === $oddArr[11]){
    announceOddWin();
  }
  else if ($oddArr[9] +7 === $oddArr[10] && $oddArr[10] +7 === $oddArr[11] && $oddArr[11] +7 === $oddArr[12]){
    announceOddWin();
  }
  else if ($oddArr[9] -7 === $oddArr[10] && $oddArr[10] -7 === $oddArr[11] && $oddArr[11] -7 === $oddArr[12]){
    announceOddWin();
  }
  else if ($oddArr[10] +7 === $oddArr[11] && $oddArr[11] +7 === $oddArr[12] && $oddArr[12] +7 === $oddArr[13]){
    announceOddWin();
  }
  else if ($oddArr[10] -7 === $oddArr[11] && $oddArr[11] -7 === $oddArr[12] && $oddArr[12] -7 === $oddArr[13]){
    announceOddWin();
  }
  else if ($oddArr[11] +7 === $oddArr[12] && $oddArr[12] +7 === $oddArr[13] && $oddArr[13] +7 === $oddArr[14]){
    announceOddWin();
  }
  else if ($oddArr[11] -7 === $oddArr[12] && $oddArr[12] -7 === $oddArr[13] && $oddArr[13] -7 === $oddArr[14]){
    announceOddWin();
  }
  else if ($oddArr[12] +7 === $oddArr[13] && $oddArr[13] +7 === $oddArr[14] && $oddArr[14] +7 === $oddArr[15]){
      announceOddWin();
  }
  else if ($oddArr[12] -7 === $oddArr[13] && $oddArr[13] -7 === $oddArr[14] && $oddArr[14] -7 === $oddArr[15]){
      announceOddWin();
  }
  else if ($oddArr[13] +7 === $oddArr[14] && $oddArr[14] +7 === $oddArr[15] && $oddArr[15] +7 === $oddArr[16]){
      announceOddWin();
  }
  else if ($oddArr[13] -7 === $oddArr[14] && $oddArr[14] -7 === $oddArr[15] && $oddArr[15] -7 === $oddArr[16]){
      announceOddWin();
  }
  else if ($oddArr[14] +7 === $oddArr[15] && $oddArr[15] +7 === $oddArr[16] && $oddArr[16] +7 === $oddArr[17]){
      announceOddWin();
  }
  else if ($oddArr[14] -7 === $oddArr[15] && $oddArr[15] -7 === $oddArr[16] && $oddArr[16] -7 === $oddArr[17]){
      announceOddWin();
  }
  else if ($oddArr[15] +7 === $oddArr[16] && $oddArr[16] +7 === $oddArr[17] && $oddArr[17] +7 === $oddArr[18]){
      announceOddWin();
  }
  else if ($oddArr[15] -7 === $oddArr[16] && $oddArr[16] -7 === $oddArr[17] && $oddArr[17] -7 === $oddArr[18]){
      announceOddWin();
  }
  else if ($oddArr[16] +7 === $oddArr[17] && $oddArr[17] +7 === $oddArr[18] && $oddArr[18] +7 === $oddArr[19]){
      announceOddWin();
  }
  else if ($oddArr[16] -7 === $oddArr[17] && $oddArr[17] -7 === $oddArr[18] && $oddArr[18] -7 === $oddArr[19]){
      announceOddWin();
  }
  else if ($oddArr[17] +7 === $oddArr[18] && $oddArr[18] +7 === $oddArr[19] && $oddArr[19] +7 === $oddArr[20]){
      announceOddWin();
  }
  else if ($oddArr[17] -7 === $oddArr[18] && $oddArr[18] -7 === $oddArr[19] && $oddArr[19] -7 === $oddArr[20]){
      announceOddWin();
  }
  else if ($oddArr[18] +7 === $oddArr[19] && $oddArr[19] +7 === $oddArr[20] && $oddArr[20] +7 === $oddArr[21]){
      announceOddWin();
  }
  else if ($oddArr[18] -7 === $oddArr[19] && $oddArr[19] -7 === $oddArr[20] && $oddArr[20] -7 === $oddArr[21]){
      announceOddWin();
  }
  else if ($oddArr[19] +7 === $oddArr[20] && $oddArr[20] +7 === $oddArr[21] && $oddArr[21] +7 === $oddArr[22]){
      announceOddWin();
  }
  else if ($oddArr[19] -7 === $oddArr[20] && $oddArr[20] -7 === $oddArr[21] && $oddArr[21] -7 === $oddArr[22]){
      announceOddWin();
  }
};

const diagOddRight = () => {

  if($oddArr[0] -5 === $oddArr[1] && $oddArr[1] -5 === $oddArr[2] && $oddArr[2] -5 === $oddArr[3]){
    announceOddWin();
  }
  else if ($oddArr[0] +5 === $oddArr[1] && $oddArr[1] +5 === $oddArr[2] && $oddArr[2] +5 === $oddArr[3]){
    announceOddWin();
  }
  else if ($oddArr[1] +5 === $oddArr[2] && $oddArr[2] +5 === $oddArr[3] && $oddArr[3] +5 === $oddArr[4]){
    announceOddWin();
  }
  else if ($oddArr[1] -5 === $oddArr[2] && $oddArr[2] -5 === $oddArr[3] && $oddArr[3] -5 === $oddArr[4]){
    announceOddWin();
  }
  else if ($oddArr[2] +5 === $oddArr[3] && $oddArr[3] +5 === $oddArr[4] && $oddArr[4] +5 === $oddArr[5]){
    announceOddWin();
  }
  else if ($oddArr[2] -5 === $oddArr[3] && $oddArr[3] -5 === $oddArr[4] && $oddArr[4] -5 === $oddArr[5]){
    announceOddWin();
  }
  else if ($oddArr[3] +5 === $oddArr[4] && $oddArr[4] +5 === $oddArr[5] && $oddArr[5] +5 === $oddArr[6]){
    announceOddWin();
  }
  else if ($oddArr[3] -5 === $oddArr[4] && $oddArr[4] -5 === $oddArr[5] && $oddArr[5] -5 === $oddArr[6]){
    announceOddWin();
  }
  else if ($oddArr[4] +5 === $oddArr[5] && $oddArr[5] +5 === $oddArr[6] && $oddArr[6] +5 === $oddArr[7]){
    announceOddWin();
  }
  else if ($oddArr[4] -5 === $oddArr[5] && $oddArr[5] -5 === $oddArr[6] && $oddArr[6] -5 === $oddArr[7]){
    announceOddWin();
  }
  else if ($oddArr[5] +5 === $oddArr[6] && $oddArr[6] +5 === $oddArr[7] && $oddArr[7] +5 === $oddArr[8]){
    announceOddWin();
  }
  else if ($oddArr[5] -5 === $oddArr[6] && $oddArr[6] -5 === $oddArr[7] && $oddArr[7] -5 === $oddArr[8]){
    announceOddWin();
  }
  else if ($oddArr[6] +5 === $oddArr[7] && $oddArr[7] +5 === $oddArr[8] && $oddArr[8] +5 === $oddArr[9]){
    announceOddWin();
  }
  else if ($oddArr[6] -5 === $oddArr[7] && $oddArr[7] -5 === $oddArr[8] && $oddArr[8] -5 === $oddArr[9]){
    announceOddWin();
  }
  else if ($oddArr[7] +5 === $oddArr[8] && $oddArr[8] +5 === $oddArr[9] && $oddArr[9] +5 === $oddArr[10]){
    announceOddWin();
  }
  else if ($oddArr[7] -5 === $oddArr[8] && $oddArr[8] -5 === $oddArr[9] && $oddArr[9] -5 === $oddArr[10]){
    announceOddWin();
  }
  else if ($oddArr[8] +5 === $oddArr[9] && $oddArr[9] +5 === $oddArr[10] && $oddArr[10] +5 === $oddArr[11]){
    announceOddWin();
  }
  else if ($oddArr[8] -5 === $oddArr[9] && $oddArr[9] -5 === $oddArr[10] && $oddArr[10] -5 === $oddArr[11]){
    announceOddWin();
  }
  else if ($oddArr[9] +5 === $oddArr[10] && $oddArr[10] +5 === $oddArr[11] && $oddArr[11] +5 === $oddArr[12]){
    announceOddWin();
  }
  else if ($oddArr[9] -5 === $oddArr[10] && $oddArr[10] -5 === $oddArr[11] && $oddArr[11] -5 === $oddArr[12]){
    announceOddWin();
  }
  else if ($oddArr[10] +5 === $oddArr[11] && $oddArr[11] +5 === $oddArr[12] && $oddArr[12] +5 === $oddArr[13]){
    announceOddWin();
  }
  else if ($oddArr[10] -5 === $oddArr[11] && $oddArr[11] -5 === $oddArr[12] && $oddArr[12] -5 === $oddArr[13]){
    announceOddWin();
  }
  else if ($oddArr[11] +5 === $oddArr[12] && $oddArr[12] +5 === $oddArr[13] && $oddArr[13] +5 === $oddArr[14]){
    announceOddWin();
  }
  else if ($oddArr[11] -5 === $oddArr[12] && $oddArr[12] -5 === $oddArr[13] && $oddArr[13] -5 === $oddArr[14]){
    announceOddWin();
  }
  else if ($oddArr[12] +5 === $oddArr[13] && $oddArr[13] +5 === $oddArr[14] && $oddArr[14] +5 === $oddArr[15]){
    announceOddWin();
  }
  else if ($oddArr[12] -5 === $oddArr[13] && $oddArr[13] -5 === $oddArr[14] && $oddArr[14] -5 === $oddArr[15]){
    announceOddWin();
  }
  else if ($oddArr[13] +5 === $oddArr[14] && $oddArr[14] +5 === $oddArr[15] && $oddArr[15] +5 === $oddArr[16]){
    announceOddWin();
  }
  else if ($oddArr[13] -5 === $oddArr[14] && $oddArr[14] -5 === $oddArr[15] && $oddArr[15] -5 === $oddArr[16]){
    announceOddWin();
  }
  else if ($oddArr[14] +5 === $oddArr[15] && $oddArr[15] +5 === $oddArr[16] && $oddArr[16] +5 === $oddArr[17]){
    announceOddWin();
  }
  else if ($oddArr[14] -5 === $oddArr[15] && $oddArr[15] -5 === $oddArr[16] && $oddArr[16] -5 === $oddArr[17]){
    announceOddWin();
  }
  else if ($oddArr[15] +5 === $oddArr[16] && $oddArr[16] +5 === $oddArr[17] && $oddArr[17] +5 === $oddArr[18]){
    announceOddWin();
  }
  else if ($oddArr[15] -5 === $oddArr[16] && $oddArr[16] -5 === $oddArr[17] && $oddArr[17] -5 === $oddArr[18]){
    announceOddWin();
  }
  else if ($oddArr[16] +5 === $oddArr[17] && $oddArr[17] +5 === $oddArr[18] && $oddArr[18] +5 === $oddArr[19]){
    announceOddWin();
  }
  else if ($oddArr[16] -5 === $oddArr[17] && $oddArr[17] -5 === $oddArr[18] && $oddArr[18] -5 === $oddArr[19]){
    announceOddWin();
  }
  else if ($oddArr[17] +5 === $oddArr[18] && $oddArr[18] +5 === $oddArr[19] && $oddArr[19] +5 === $oddArr[20]){
    announceOddWin();
  }
  else if ($oddArr[17] -5 === $oddArr[18] && $oddArr[18] -5 === $oddArr[19] && $oddArr[19] -5 === $oddArr[20]){
    announceOddWin();
  }
  else if ($oddArr[18] +5 === $oddArr[19] && $oddArr[19] +5 === $oddArr[20] && $oddArr[20] +5 === $oddArr[21]){
    announceOddWin();
  }
  else if ($oddArr[18] -5 === $oddArr[19] && $oddArr[19] -5 === $oddArr[20] && $oddArr[20] -5 === $oddArr[21]){
    announceOddWin();
  }
  else if ($oddArr[19] +5 === $oddArr[20] && $oddArr[20] +5 === $oddArr[21] && $oddArr[21] +5 === $oddArr[22]){
    announceOddWin();
  }
  else if ($oddArr[19] -5 === $oddArr[20] && $oddArr[20] -5 === $oddArr[21] && $oddArr[21] -5 === $oddArr[22]){
    announceOddWin();
  }
};
// //PLAYER TWO
const checkColumnEven = () => {

  const $evenInt = parseInt($(event.currentTarget).attr("id"));
  $evenArr.push($evenInt);

  if($evenArr[0] -6 === $evenArr[1] && $evenArr[1] -6 === $evenArr[2] && $evenArr[2] -6 === $evenArr[3]){
    announceEvenWin();
  }
  else if ($evenArr[0] +6 === $evenArr[1] && $evenArr[1] +6 === $evenArr[2] && $evenArr[2] +6 === $evenArr[3]){
    announceEvenWin();
  }
  else if ($evenArr[1] +6 === $evenArr[2] && $evenArr[2] +6 === $evenArr[3] && $evenArr[3] +6 === $evenArr[4]){
    announceEvenWin();
  }
  else if ($evenArr[1] -6 === $evenArr[2] && $evenArr[2] -6 === $evenArr[3] && $evenArr[3] -6 === $evenArr[4]){
    announceEvenWin();
  }
  else if ($evenArr[2] +6 === $evenArr[3] && $evenArr[3] +6 === $evenArr[4] && $evenArr[4] +6 === $evenArr[5]){
    announceEvenWin();
  }
  else if ($evenArr[2] -6 === $evenArr[3] && $evenArr[3] -6 === $evenArr[4] && $evenArr[4] -6 === $evenArr[5]){
    announceEvenWin();
  }
  else if ($evenArr[3] +6 === $evenArr[4] && $evenArr[4] +6 === $evenArr[5] && $evenArr[5] +6 === $evenArr[6]){
    announceEvenWin();
  }
  else if ($evenArr[3] -6 === $evenArr[4] && $evenArr[4] -6 === $evenArr[5] && $evenArr[5] -6 === $evenArr[6]){
    announceEvenWin();
  }
  else if ($evenArr[4] +6 === $evenArr[5] && $evenArr[5] +6 === $evenArr[6] && $evenArr[6] +6 === $evenArr[7]){
    announceEvenWin();
  }
  else if ($evenArr[4] -6 === $evenArr[5] && $evenArr[5] -6 === $evenArr[6] && $evenArr[6] -6 === $evenArr[7]){
    announceEvenWin();
  }
  else if ($evenArr[5] +6 === $evenArr[6] && $evenArr[6] +6 === $evenArr[7] && $evenArr[7] +6 === $evenArr[8]){
    announceEvenWin();
  }
  else if ($evenArr[5] -6 === $evenArr[6] && $evenArr[6] -6 === $evenArr[7] && $evenArr[7] -6 === $evenArr[8]){
    announceEvenWin();
  }
  else if ($evenArr[6] +6 === $evenArr[7] && $evenArr[7] +6 === $evenArr[8] && $evenArr[8] +6 === $evenArr[9]){
    announceEvenWin();
  }
  else if ($evenArr[6] -6 === $evenArr[7] && $evenArr[7] -6 === $evenArr[8] && $evenArr[8] -6 === $evenArr[9]){
    announceEvenWin();
  }
  else if ($evenArr[7] +6 === $evenArr[8] && $evenArr[8] +6 === $evenArr[9] && $evenArr[9] +6 === $evenArr[10]){
    announceEvenWin();
  }
  else if ($evenArr[7] -6 === $evenArr[8] && $evenArr[8] -6 === $evenArr[9] && $evenArr[9] -6 === $evenArr[10]){
    announceEvenWin();
  }
  else if ($evenArr[8] +6 === $evenArr[9] && $evenArr[9] +6 === $evenArr[10] && $evenArr[10] +6 === $evenArr[11]){
    announceEvenWin();
  }
  else if ($evenArr[8] -6 === $evenArr[9] && $evenArr[9] -6 === $evenArr[10] && $evenArr[10] -6 === $evenArr[11]){
    announceEvenWin();
  }
  else if ($evenArr[9] +6 === $evenArr[10] && $evenArr[10] +6 === $evenArr[11] && $evenArr[11] +6 === $evenArr[12]){
    announceEvenWin();
  }
  else if ($evenArr[9] -6 === $evenArr[10] && $evenArr[10] -6 === $evenArr[11] && $evenArr[11] -6 === $evenArr[12]){
    announceEvenWin();
  }
  else if ($evenArr[10] +6 === $evenArr[11] && $evenArr[11] +6 === $evenArr[12] && $evenArr[12] +6 === $evenArr[13]){
    announceEvenWin();
  }
  else if ($evenArr[10] -6 === $evenArr[11] && $evenArr[11] -6 === $evenArr[12] && $evenArr[12] -6 === $evenArr[13]){
    announceEvenWin();
  }
  else if ($evenArr[11] +6 === $evenArr[12] && $evenArr[12] +6 === $evenArr[13] && $evenArr[13] +6 === $evenArr[14]){
    announceEvenWin();
  }
  else if ($evenArr[11] -6 === $evenArr[12] && $evenArr[12] -6 === $evenArr[13] && $evenArr[13] -6 === $evenArr[14]){
    announceEvenWin();
  }
  else if ($evenArr[12] +6 === $evenArr[13] && $evenArr[13] +6 === $evenArr[14] && $evenArr[14] +6 === $evenArr[15]){
    announceEvenWin();
  }
  else if ($evenArr[12] -6 === $evenArr[13] && $evenArr[13] -6 === $evenArr[14] && $evenArr[14] -6 === $evenArr[15]){
    announceEvenWin();
  }
  else if ($evenArr[13] +6 === $evenArr[14] && $evenArr[14] +6 === $evenArr[15] && $evenArr[15] +6 === $evenArr[16]){
    announceEvenWin();
  }
  else if ($evenArr[13] -6 === $evenArr[14] && $evenArr[14] -6 === $evenArr[15] && $evenArr[15] -6 === $evenArr[16]){
    announceEvenWin();
  }
  else if ($evenArr[14] +6 === $evenArr[15] && $evenArr[15] +6 === $evenArr[16] && $evenArr[16] +6 === $evenArr[17]){
    announceEvenWin();
  }
  else if ($evenArr[14] -6 === $evenArr[15] && $evenArr[15] -6 === $evenArr[16] && $evenArr[16] -6 === $evenArr[17]){
    announceEvenWin();
  }
  else if ($evenArr[15] +6 === $evenArr[16] && $evenArr[16] +6 === $evenArr[17] && $evenArr[17] +6 === $evenArr[18]){
    announceEvenWin();
  }
  else if ($evenArr[15] -6 === $evenArr[16] && $evenArr[16] -6 === $evenArr[17] && $evenArr[17] -6 === $evenArr[18]){
    announceEvenWin();
  }
  else if ($evenArr[16] +6 === $evenArr[17] && $evenArr[17] +6 === $evenArr[18] && $evenArr[18] +6 === $evenArr[19]){
    announceEvenWin();
  }
  else if ($evenArr[16] -6 === $evenArr[17] && $evenArr[17] -6 === $evenArr[18] && $evenArr[18] -6 === $evenArr[19]){
    announceEvenWin();
  }
  else if ($evenArr[17] +6 === $evenArr[18] && $evenArr[18] +6 === $evenArr[19] && $evenArr[19] +6 === $evenArr[20]){
    announceEvenWin();
  }
  else if ($evenArr[17] -6 === $evenArr[18] && $evenArr[18] -6 === $evenArr[19] && $evenArr[19] -6 === $evenArr[20]){
    announceEvenWin();
  }
  else if ($evenArr[18] +6 === $evenArr[19] && $evenArr[19] +6 === $evenArr[20] && $evenArr[20] +6 === $evenArr[21]){
    announceEvenWin();
  }
  else if ($evenArr[18] -6 === $evenArr[19] && $evenArr[19] -6 === $evenArr[20] && $evenArr[20] -6 === $evenArr[21]){
    announceEvenWin();
  }
  else if ($evenArr[19] +6 === $evenArr[20] && $evenArr[20] +6 === $evenArr[21] && $evenArr[21] +6 === $evenArr[22]){
    announceEvenWin();
  }
  else if ($evenArr[19] -6 === $evenArr[20] && $evenArr[20] -6 === $evenArr[21] && $evenArr[21] -6 === $evenArr[22]){
    announceEvenWin();
  }
};


const checkRowEven = () => {

if($evenArr[0] -1 === $evenArr[1] && $evenArr[1] -1 === $evenArr[2] && $evenArr[2] -1 === $evenArr[3]){
    announceEvenWin();
  }
  else if ($evenArr[0] +1 === $evenArr[1] && $evenArr[1] +1 === $evenArr[2] && $evenArr[2] +1 === $evenArr[3]){
    announceEvenWin();
  }
  else if ($evenArr[1] +1 === $evenArr[2] && $evenArr[2] +1 === $evenArr[3] && $evenArr[3] +1 === $evenArr[4]){
    announceEvenWin();
  }
  else if ($evenArr[1] -1 === $evenArr[2] && $evenArr[2] -1 === $evenArr[3] && $evenArr[3] -1 === $evenArr[4]){
    announceEvenWin();
  }
  else if ($evenArr[2] +1 === $evenArr[3] && $evenArr[3] +1 === $evenArr[4] && $evenArr[4] +1 === $evenArr[5]){
    announceEvenWin();
  }
  else if ($evenArr[2] -1 === $evenArr[3] && $evenArr[3] -1 === $evenArr[4] && $evenArr[4] -1 === $evenArr[5]){
    announceEvenWin();
  }
  else if ($evenArr[3] +1 === $evenArr[4] && $evenArr[4] +1 === $evenArr[5] && $evenArr[5] +1 === $evenArr[6]){
    announceEvenWin();
  }
  else if ($evenArr[3] -1 === $evenArr[4] && $evenArr[4] -1 === $evenArr[5] && $evenArr[5] -1 === $evenArr[6]){
    announceEvenWin();
  }
  else if ($evenArr[4] +1 === $evenArr[5] && $evenArr[5] +1 === $evenArr[6] && $evenArr[6] +1 === $evenArr[7]){
    announceEvenWin();
  }
  else if ($evenArr[4] -1 === $evenArr[5] && $evenArr[5] -1 === $evenArr[6] && $evenArr[6] -1 === $evenArr[7]){
    announceEvenWin();
  }
  else if ($evenArr[5] +1 === $evenArr[6] && $evenArr[6] +1 === $evenArr[7] && $evenArr[7] +1 === $evenArr[8]){
    announceEvenWin();
  }
  else if ($evenArr[5] -1 === $evenArr[6] && $evenArr[6] -1 === $evenArr[7] && $evenArr[7] -1 === $evenArr[8]){
    announceEvenWin();
  }
  else if ($evenArr[6] +1 === $evenArr[7] && $evenArr[7] +1 === $evenArr[8] && $evenArr[8] +1 === $evenArr[9]){
    announceEvenWin();
  }
  else if ($evenArr[6] -1 === $evenArr[7] && $evenArr[7] -1 === $evenArr[8] && $evenArr[8] -1 === $evenArr[9]){
    announceEvenWin();
  }
  else if ($evenArr[7] +1 === $evenArr[8] && $evenArr[8] +1 === $evenArr[9] && $evenArr[9] +1 === $evenArr[10]){
    announceEvenWin();
  }
  else if ($evenArr[7] -1 === $evenArr[8] && $evenArr[8] -1 === $evenArr[9] && $evenArr[9] -1 === $evenArr[10]){
    announceEvenWin();
  }
  else if ($evenArr[8] +1 === $evenArr[9] && $evenArr[9] +1 === $evenArr[10] && $evenArr[10] +1 === $evenArr[11]){
    announceEvenWin();
  }
  else if ($evenArr[8] -1 === $evenArr[9] && $evenArr[9] -1 === $evenArr[10] && $evenArr[10] -1 === $evenArr[11]){
    announceEvenWin();
  }
  else if ($evenArr[9] +1 === $evenArr[10] && $evenArr[10] +1 === $evenArr[11] && $evenArr[11] +1 === $evenArr[12]){
    announceEvenWin();
  }
  else if ($evenArr[9] -1 === $evenArr[10] && $evenArr[10] -1 === $evenArr[11] && $evenArr[11] -1 === $evenArr[12]){
    announceEvenWin();
  }
  else if ($evenArr[10] +1 === $evenArr[11] && $evenArr[11] +1 === $evenArr[12] && $evenArr[12] +1 === $evenArr[13]){
    announceEvenWin();
  }
  else if ($evenArr[10] -1 === $evenArr[11] && $evenArr[11] -1 === $evenArr[12] && $evenArr[12] -1 === $evenArr[13]){
    announceEvenWin();
  }
  else if ($evenArr[11] +1 === $evenArr[12] && $evenArr[12] +1 === $evenArr[13] && $evenArr[13] +1 === $evenArr[14]){
    announceEvenWin();
  }
  else if ($evenArr[11] -1 === $evenArr[12] && $evenArr[12] -1 === $evenArr[13] && $evenArr[13] -1 === $evenArr[14]){
    announceEvenWin();
  }
  else if ($evenArr[12] +1 === $evenArr[13] && $evenArr[13] +1 === $evenArr[14] && $evenArr[14] +1 === $evenArr[15]){
    announceEvenWin();
  }
  else if ($evenArr[12] -1 === $evenArr[13] && $evenArr[13] -1 === $evenArr[14] && $evenArr[14] -1 === $evenArr[15]){
    announceEvenWin();
  }
  else if ($evenArr[13] +1 === $evenArr[14] && $evenArr[14] +1 === $evenArr[15] && $evenArr[15] +1 === $evenArr[16]){
    announceEvenWin();
  }
  else if ($evenArr[13] -1 === $evenArr[14] && $evenArr[14] -1 === $evenArr[15] && $evenArr[15] -1 === $evenArr[16]){
    announceEvenWin();
  }
  else if ($evenArr[14] +1 === $evenArr[15] && $evenArr[15] +1 === $evenArr[16] && $evenArr[16] +1 === $evenArr[17]){
    announceEvenWin();
  }
  else if ($evenArr[14] -1 === $evenArr[15] && $evenArr[15] -1 === $evenArr[16] && $evenArr[16] -1 === $evenArr[17]){
    announceEvenWin();
  }
  else if ($evenArr[15] +1 === $evenArr[16] && $evenArr[16] +1 === $evenArr[17] && $evenArr[17] +1 === $evenArr[18]){
      announceEvenWin();
  }
  else if ($evenArr[15] -1 === $evenArr[16] && $evenArr[16] -1 === $evenArr[17] && $evenArr[17] -1 === $evenArr[18]){
    announceEvenWin();
  }
  else if ($evenArr[16] +1 === $evenArr[17] && $evenArr[17] +1 === $evenArr[18] && $evenArr[18] +1 === $evenArr[19]){
    announceEvenWin();
  }
  else if ($evenArr[16] -1 === $evenArr[17] && $evenArr[17] -1 === $evenArr[18] && $evenArr[18] -1 === $evenArr[19]){
    announceEvenWin();
  }
  else if ($evenArr[17] +1 === $evenArr[18] && $evenArr[18] +1 === $evenArr[19] && $evenArr[19] +1 === $evenArr[20]){
    announceEvenWin();
  }
  else if ($evenArr[17] -1 === $evenArr[18] && $evenArr[18] -1 === $evenArr[19] && $evenArr[19] -1 === $evenArr[20]){
    announceEvenWin();
  }
  else if ($evenArr[18] +1 === $evenArr[19] && $evenArr[19] +1 === $evenArr[20] && $evenArr[20] +1 === $evenArr[21]){
    announceEvenWin();
  }
  else if ($evenArr[18] -1 === $evenArr[19] && $evenArr[19] -1 === $evenArr[20] && $evenArr[20] -1 === $evenArr[21]){
    announceEvenWin();
  }
  else if ($evenArr[19] +1 === $evenArr[20] && $evenArr[20] +1 === $evenArr[21] && $evenArr[21] +1 === $evenArr[22]){
    announceEvenWin();
  }
  else if ($evenArr[19] -1 === $evenArr[20] && $evenArr[20] -1 === $evenArr[21] && $evenArr[21] -1 === $evenArr[22]){
    announceEvenWin();
  }
};

const diagEvenLeft = () => {

  if($evenArr[0] -7 === $evenArr[1] && $evenArr[1] -7 === $evenArr[2] && $evenArr[2] -7 === $evenArr[3]){
    announceEvenWin();
  }
  else if ($evenArr[0] +7 === $evenArr[1] && $evenArr[1] +7 === $evenArr[2] && $evenArr[2] +7 === $evenArr[3]){
    announceEvenWin();
  }
  else if ($evenArr[1] +7 === $evenArr[2] && $evenArr[2] +7 === $evenArr[3] && $evenArr[3] +7 === $evenArr[4]){
    announceEvenWin();
  }
  else if ($evenArr[1] -7 === $evenArr[2] && $evenArr[2] -7 === $evenArr[3] && $evenArr[3] -7 === $evenArr[4]){
    announceEvenWin();
  }
  else if ($evenArr[2] +7 === $evenArr[3] && $evenArr[3] +7 === $evenArr[4] && $evenArr[4] +7 === $evenArr[5]){
    announceEvenWin();
  }
  else if ($evenArr[2] -7 === $evenArr[3] && $evenArr[3] -7 === $evenArr[4] && $evenArr[4] -7 === $evenArr[5]){
    announceEvenWin();
  }
  else if ($evenArr[3] +7 === $evenArr[4] && $evenArr[4] +7 === $evenArr[5] && $evenArr[5] +7 === $evenArr[6]){
    announceEvenWin();
  }
  else if ($evenArr[3] -7 === $evenArr[4] && $evenArr[4] -7 === $evenArr[5] && $evenArr[5] -7 === $evenArr[6]){
    announceEvenWin();
  }
  else if ($evenArr[4] +7 === $evenArr[5] && $evenArr[5] +7 === $evenArr[6] && $evenArr[6] +7 === $evenArr[7]){
    announceEvenWin();
  }
  else if ($evenArr[4] -7 === $evenArr[5] && $evenArr[5] -7 === $evenArr[6] && $evenArr[6] -7 === $evenArr[7]){
    announceEvenWin();
  }
  else if ($evenArr[5] +7 === $evenArr[6] && $evenArr[6] +7 === $evenArr[7] && $evenArr[7] +7 === $evenArr[8]){
    announceEvenWin();
  }
  else if ($evenArr[5] -7 === $evenArr[6] && $evenArr[6] -7 === $evenArr[7] && $evenArr[7] -7 === $evenArr[8]){
    announceEvenWin();
  }
  else if ($evenArr[6] +7 === $evenArr[7] && $evenArr[7] +7 === $evenArr[8] && $evenArr[8] +7 === $evenArr[9]){
    announceEvenWin();
  }
  else if ($evenArr[6] -7 === $evenArr[7] && $evenArr[7] -7 === $evenArr[8] && $evenArr[8] -7 === $evenArr[9]){
    announceEvenWin();
  }
  else if ($evenArr[7] +7 === $evenArr[8] && $evenArr[8] +7 === $evenArr[9] && $evenArr[9] +7 === $evenArr[10]){
    announceEvenWin();
  }
  else if ($evenArr[7] -7 === $evenArr[8] && $evenArr[8] -7 === $evenArr[9] && $evenArr[9] -7 === $evenArr[10]){
    announceEvenWin();
  }
  else if ($evenArr[8] +7 === $evenArr[9] && $evenArr[9] +7 === $evenArr[10] && $evenArr[10] +7 === $evenArr[11]){
    announceEvenWin();
  }
  else if ($evenArr[8] -7 === $evenArr[9] && $evenArr[9] -7 === $evenArr[10] && $evenArr[10] -7 === $evenArr[11]){
    announceEvenWin();
  }
  else if ($evenArr[9] +7 === $evenArr[10] && $evenArr[10] +7 === $evenArr[11] && $evenArr[11] +7 === $evenArr[12]){
    announceEvenWin();
  }
  else if ($evenArr[9] -7 === $evenArr[10] && $evenArr[10] -7 === $evenArr[11] && $evenArr[11] -7 === $evenArr[12]){
    announceEvenWin();
  }
  else if ($evenArr[10] +7 === $evenArr[11] && $evenArr[11] +7 === $evenArr[12] && $evenArr[12] +7 === $evenArr[13]){
    announceEvenWin();
  }
  else if ($evenArr[10] -7 === $evenArr[11] && $evenArr[11] -7 === $evenArr[12] && $evenArr[12] -7 === $evenArr[13]){
    announceEvenWin();
  }
  else if ($evenArr[11] +7 === $evenArr[12] && $evenArr[12] +7 === $evenArr[13] && $evenArr[13] +7 === $evenArr[14]){
    announceEvenWin();
  }
  else if ($evenArr[11] -7 === $evenArr[12] && $evenArr[12] -7 === $evenArr[13] && $evenArr[13] -7 === $evenArr[14]){
    announceEvenWin();
  }
  else if ($evenArr[12] +7 === $evenArr[13] && $evenArr[13] +7 === $evenArr[14] && $evenArr[14] +7 === $evenArr[15]){
    announceEvenWin();
  }
  else if ($evenArr[12] -7 === $evenArr[13] && $evenArr[13] -7 === $evenArr[14] && $evenArr[14] -7 === $evenArr[15]){
    announceEvenWin();
  }
  else if ($evenArr[13] +7 === $evenArr[14] && $evenArr[14] +7 === $evenArr[15] && $evenArr[15] +7 === $evenArr[16]){
    announceEvenWin();
  }
  else if ($evenArr[13] -7 === $evenArr[14] && $evenArr[14] -7 === $evenArr[15] && $evenArr[15] -7 === $evenArr[16]){
    announceEvenWin();
  }
  else if ($evenArr[14] +7 === $evenArr[15] && $evenArr[15] +7 === $evenArr[16] && $evenArr[16] +7 === $evenArr[17]){
    announceEvenWin();
  }
  else if ($evenArr[14] -7 === $evenArr[15] && $evenArr[15] -7 === $evenArr[16] && $evenArr[16] -7 === $evenArr[17]){
    announceEvenWin();
  }
  else if ($evenArr[15] +7 === $evenArr[16] && $evenArr[16] +7 === $evenArr[17] && $evenArr[17] +7 === $evenArr[18]){
    announceEvenWin();
  }
  else if ($evenArr[15] -7 === $evenArr[16] && $evenArr[16] -7 === $evenArr[17] && $evenArr[17] -7 === $evenArr[18]){
    announceEvenWin();
  }
  else if ($evenArr[16] +7 === $evenArr[17] && $evenArr[17] +7 === $evenArr[18] && $evenArr[18] +7 === $evenArr[19]){
    announceEvenWin();
  }
  else if ($evenArr[16] -7 === $evenArr[17] && $evenArr[17] -7 === $evenArr[18] && $evenArr[18] -7 === $evenArr[19]){
    announceEvenWin();
  }
  else if ($evenArr[17] +7 === $evenArr[18] && $evenArr[18] +7 === $evenArr[19] && $evenArr[19] +7 === $evenArr[20]){
    announceEvenWin();
  }
  else if ($evenArr[17] -7 === $evenArr[18] && $evenArr[18] -7 === $evenArr[19] && $evenArr[19] -7 === $evenArr[20]){
    announceEvenWin();
  }
  else if ($evenArr[18] +7 === $evenArr[19] && $evenArr[19] +7 === $evenArr[20] && $evenArr[20] +7 === $evenArr[21]){
    announceEvenWin();
  }
  else if ($evenArr[18] -7 === $evenArr[19] && $evenArr[19] -7 === $evenArr[20] && $evenArr[20] -7 === $evenArr[21]){
    announceEvenWin();
  }
  else if ($evenArr[19] +7 === $evenArr[20] && $evenArr[20] +7 === $evenArr[21] && $evenArr[21] +7 === $evenArr[22]){
    announceEvenWin();
  }
  else if ($evenArr[19] -7 === $evenArr[20] && $evenArr[20] -7 === $evenArr[21] && $evenArr[21] -7 === $evenArr[22]){
    announceEvenWin();
  }
};

const diagEvenRight = () => {

  if($evenArr[0] -5 === $evenArr[1] && $evenArr[1] -5 === $evenArr[2] && $evenArr[2] -5 === $evenArr[3]){
    announceEvenWin();
  }
  else if ($evenArr[0] +5 === $evenArr[1] && $evenArr[1] +5 === $evenArr[2] && $evenArr[2] +5 === $evenArr[3]){
    announceEvenWin();
  }
  else if ($evenArr[1] +5 === $evenArr[2] && $evenArr[2] +5 === $evenArr[3] && $evenArr[3] +5 === $evenArr[4]){
    announceEvenWin();
  }
  else if ($evenArr[1] -5 === $evenArr[2] && $evenArr[2] -5 === $evenArr[3] && $evenArr[3] -5 === $evenArr[4]){
    announceEvenWin();
  }
  else if ($evenArr[2] +5 === $evenArr[3] && $evenArr[3] +5 === $evenArr[4] && $evenArr[4] +5 === $evenArr[5]){
    announceEvenWin();
  }
  else if ($evenArr[2] -5 === $evenArr[3] && $evenArr[3] -5 === $evenArr[4] && $evenArr[4] -5 === $evenArr[5]){
    announceEvenWin();
  }
  else if ($evenArr[3] +5 === $evenArr[4] && $evenArr[4] +5 === $evenArr[5] && $evenArr[5] +5 === $evenArr[6]){
    announceEvenWin();
  }
  else if ($evenArr[3] -5 === $evenArr[4] && $evenArr[4] -5 === $evenArr[5] && $evenArr[5] -5 === $evenArr[6]){
    announceEvenWin();
  }
  else if ($evenArr[4] +5 === $evenArr[5] && $evenArr[5] +5 === $evenArr[6] && $evenArr[6] +5 === $evenArr[7]){
    announceEvenWin();
  }
  else if ($evenArr[4] -5 === $evenArr[5] && $evenArr[5] -5 === $evenArr[6] && $evenArr[6] -5 === $evenArr[7]){
    announceEvenWin();
  }
  else if ($evenArr[5] +5 === $evenArr[6] && $evenArr[6] +5 === $evenArr[7] && $evenArr[7] +5 === $evenArr[8]){
    announceEvenWin();
  }
  else if ($evenArr[5] -5 === $evenArr[6] && $evenArr[6] -5 === $evenArr[7] && $evenArr[7] -5 === $evenArr[8]){
    announceEvenWin();
  }
  else if ($evenArr[6] +5 === $evenArr[7] && $evenArr[7] +5 === $evenArr[8] && $evenArr[8] +5 === $evenArr[9]){
    announceEvenWin();
  }
  else if ($evenArr[6] -5 === $evenArr[7] && $evenArr[7] -5 === $evenArr[8] && $evenArr[8] -5 === $evenArr[9]){
    announceEvenWin();
  }
  else if ($evenArr[7] +5 === $evenArr[8] && $evenArr[8] +5 === $evenArr[9] && $evenArr[9] +5 === $evenArr[10]){
    announceEvenWin();
  }
  else if ($evenArr[7] -5 === $evenArr[8] && $evenArr[8] -5 === $evenArr[9] && $evenArr[9] -5 === $evenArr[10]){
    announceEvenWin();
  }
  else if ($evenArr[8] +5 === $evenArr[9] && $evenArr[9] +5 === $evenArr[10] && $evenArr[10] +5 === $evenArr[11]){
    announceEvenWin();
  }
  else if ($evenArr[8] -5 === $evenArr[9] && $evenArr[9] -5 === $evenArr[10] && $evenArr[10] -5 === $evenArr[11]){
    announceEvenWin();
  }
  else if ($evenArr[9] +5 === $evenArr[10] && $evenArr[10] +5 === $evenArr[11] && $evenArr[11] +5 === $evenArr[12]){
    announceEvenWin();
  }
  else if ($evenArr[9] -5 === $evenArr[10] && $evenArr[10] -5 === $evenArr[11] && $evenArr[11] -5 === $evenArr[12]){
    announceEvenWin();
  }
  else if ($evenArr[10] +5 === $evenArr[11] && $evenArr[11] +5 === $evenArr[12] && $evenArr[12] +5 === $evenArr[13]){
    announceEvenWin();
  }
  else if ($evenArr[10] -5 === $evenArr[11] && $evenArr[11] -5 === $evenArr[12] && $evenArr[12] -5 === $evenArr[13]){
    announceEvenWin();
  }
  else if ($evenArr[11] +5 === $evenArr[12] && $evenArr[12] +5 === $evenArr[13] && $evenArr[13] +5 === $evenArr[14]){
    announceEvenWin();
  }
  else if ($evenArr[11] -5 === $evenArr[12] && $evenArr[12] -5 === $evenArr[13] && $evenArr[13] -5 === $evenArr[14]){
    announceEvenWin();
  }
  else if ($evenArr[12] +5 === $evenArr[13] && $evenArr[13] +5 === $evenArr[14] && $evenArr[14] +5 === $evenArr[15]){
    announceEvenWin();
  }
  else if ($evenArr[12] -5 === $evenArr[13] && $evenArr[13] -5 === $evenArr[14] && $evenArr[14] -5 === $evenArr[15]){
    announceEvenWin();
  }
  else if ($evenArr[13] +5 === $evenArr[14] && $evenArr[14] +5 === $evenArr[15] && $evenArr[15] +5 === $evenArr[16]){
    announceEvenWin();
  }
  else if ($evenArr[13] -5 === $evenArr[14] && $evenArr[14] -5 === $evenArr[15] && $evenArr[15] -5 === $evenArr[16]){
    announceEvenWin();
  }
  else if ($evenArr[14] +5 === $evenArr[15] && $evenArr[15] +5 === $evenArr[16] && $evenArr[16] +5 === $evenArr[17]){
    announceEvenWin();
  }
  else if ($evenArr[14] -5 === $evenArr[15] && $evenArr[15] -5 === $evenArr[16] && $evenArr[16] -5 === $evenArr[17]){
    announceEvenWin();
  }
  else if ($evenArr[15] +5 === $evenArr[16] && $evenArr[16] +5 === $evenArr[17] && $evenArr[17] +5 === $evenArr[18]){
    announceEvenWin();
  }
  else if ($evenArr[15] -5 === $evenArr[16] && $evenArr[16] -5 === $evenArr[17] && $evenArr[17] -5 === $evenArr[18]){
    announceEvenWin();
  }
  else if ($evenArr[16] +5 === $evenArr[17] && $evenArr[17] +5 === $evenArr[18] && $evenArr[18] +5 === $evenArr[19]){
    announceEvenWin();
  }
  else if ($evenArr[16] -5 === $evenArr[17] && $evenArr[17] -5 === $evenArr[18] && $evenArr[18] -5 === $evenArr[19]){
    announceEvenWin();
  }
  else if ($evenArr[17] +5 === $evenArr[18] && $evenArr[18] +5 === $evenArr[19] && $evenArr[19] +5 === $evenArr[20]){
    announceEvenWin();
  }
  else if ($evenArr[17] -5 === $evenArr[18] && $evenArr[18] -5 === $evenArr[19] && $evenArr[19] -5 === $evenArr[20]){
    announceEvenWin();
  }
  else if ($evenArr[18] +5 === $evenArr[19] && $evenArr[19] +5 === $evenArr[20] && $evenArr[20] +5 === $evenArr[21]){
    announceEvenWin();
  }
  else if ($evenArr[18] -5 === $evenArr[19] && $evenArr[19] -5 === $evenArr[20] && $evenArr[20] -5 === $evenArr[21]){
    announceEvenWin();
  }
  else if ($evenArr[19] +5 === $evenArr[20] && $evenArr[20] +5 === $evenArr[21] && $evenArr[21] +5 === $evenArr[22]){
    announceEvenWin();
  }
  else if ($evenArr[19] -5 === $evenArr[20] && $evenArr[20] -5 === $evenArr[21] && $evenArr[21] -5 === $evenArr[22]){
    announceEvenWin();
  }
};

let clicks = 0;

const placeIcon = (event) => {

clicks ++;

const $icon1 = $("<div>");
$icon1.addClass("CharlieBrown");

const $icon2 = $("<div>");
$icon2.addClass("Snoopy");

  if (clicks %2 !== 0) {

    $(event.currentTarget).empty();
    $(event.currentTarget).append($icon1);

    checkColumnOdd();
    checkRowOdd();
    diagOddLeft();
    diagOddRight();

  }
  else if (clicks %2 === 0) {

    $(event.currentTarget).empty();
    $(event.currentTarget).append($icon2);

    checkColumnEven();
    checkRowEven();
    diagEvenLeft();
    diagEvenRight();
  }

};

const $board = $("<div>").addClass("board");
$("body").append($board);

  for (let i = 0; i <42; i++){
    const $square = $("<div>");
    $square.attr("id", i);
    $square.addClass("square");
    $board.append($square);
    $square.one("click", placeIcon);
  };

announceOddWin = () => {
  alert("You're a good man, Charlie Brown! You placed a winning piece! Click to reveal!");
};

announceEvenWin = () => {
  alert("Nice moves, Snoopy! You placed a winning piece! Click to reveal!");
};

});
