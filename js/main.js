const strings = [
  "Test string 1",
  "Test string 2",
  "Test string 3",
  "Test string 4",
  "Test string 5",
  "Test string 6",
  "Test string 7",
  "Test string 8",
  "Test string 9"
];

function displayRandomString() {
  const randomIndex = Math.floor(Math.random() * strings.length);
  const randomString = strings[randomIndex];
  document.getElementById("output").textContent = randomString;
}
