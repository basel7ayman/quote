const strings = [
  `“Be yourself; everyone else is already taken.” <br>
  ― Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br>
  ― Marilyn Monroe`,
  `“So many books, so little time.” <br>
  ― Frank Zappa`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br>
  ― Albert Einstein`,
  `“A room without books is like a body without a soul.” <br>
  ― Marcus Tullius Cicero`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br>
  ― Bernard M. Baruch`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br>
  ― Dr. Seuss`
];

let lastIndex = -1; 

function displayRandomString() {
  let randomIndex = lastIndex;

  do {
    randomIndex = Math.floor(Math.random() * strings.length);
  } while (randomIndex === lastIndex);
  
  lastIndex = randomIndex;
  document.getElementById("output").innerHTML = strings[randomIndex];
}
