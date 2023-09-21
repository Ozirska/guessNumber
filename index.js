let maxNum = prompt("Enter a max number");
let guess;
let attemps = 0;

while (isNaN(maxNum)) {
  maxNum = prompt("Enter a max number");
}

let generetedNum = Math.floor(Math.random() * Number(maxNum)) + 1;
console.log(generetedNum);

while (guess != generetedNum) {
  attemps += 1;
  guess = prompt("Guess the number");

  if (isNaN(guess)) {
    alert("It's not a valid answer");
    maxNum = prompt("Enter a max number");
  } else if (guess != generetedNum) {
    guess < generetedNum
      ? alert("The number should be higher")
      : alert("The number should be lower");
  }
}
alert(`Congratulation! You did ${attemps} attemps`);
