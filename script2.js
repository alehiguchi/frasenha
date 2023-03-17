let words = [];
const numWordsSelect = document.getElementById("numWords");
const separatorSelect = document.getElementById("separator");
const capitalizeCheckbox = document.getElementById("capitalize");
const includeNumbersCheckbox = document.getElementById("includeNumbers");
const generateBtn = document.getElementById("generateBtn");
const output = document.getElementById("output");

async function loadWords() {
  try {
    const response = await fetch("wordlist.txt");
    const text = await response.text();
    words = text.trim().split(/\s+/);
  } catch (error) {
    console.error("Error loading wordlist.txt:", error);
  }
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function generatePassphrase(numWords, separator, capitalize, includeNumbers) {
  let passphrase = "";

  for (let i = 0; i < numWords; i++) {
    let word = getRandomWord();
    if (capitalize && i === 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    passphrase += (i === 0) ? word : separator + word;
  }

  if (includeNumbers) {
    const randomNumbers = Math.floor(Math.random() * 1000);
    passphrase += separator + randomNumbers;
  }

  return passphrase;
}

function copyToClipboard() {
  const textarea = document.createElement("textarea");
  textarea.value = output.textContent;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Passphrase copied to clipboard!");
}

generateBtn.addEventListener("click", () => {
  const numWords = parseInt(numWordsSelect.value);
  const separator = separatorSelect.value;
  const capitalize = capitalizeCheckbox.checked;
  const includeNumbers = includeNumbersCheckbox.checked;
  const passphrase = generatePassphrase(numWords, separator, capitalize, includeNumbers);
  output.textContent = passphrase;
});

loadWords();
