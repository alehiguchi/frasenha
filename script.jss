const words = ["cat", "dog", "mouse", "table", "house"];
const numWordsSelect = document.getElementById("numWords");
const separatorSelect = document.getElementById("separator");
const generateBtn = document.getElementById("generateBtn");
const output = document.getElementById("output");

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function generatePassphrase(numWords, separator) {
  let passphrase = "";

  for (let i = 0; i < numWords; i++) {
    const word = getRandomWord();
    passphrase += (i === 0) ? word : separator + word;
  }

  return passphrase;
}

generateBtn.addEventListener("click", () => {
  const numWords = parseInt(numWordsSelect.value);
  const separator = separatorSelect.value;
  const passphrase = generatePassphrase(numWords, separator);
  alert("Hello");
  output.textContent = passphrase;
});
