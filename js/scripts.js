function encryptText() {
  const n = 7; //making the given value of n a constant
  const input = document.getElementById("plaintext").value.toUpperCase(); // Get user input and convert to uppercase
  let result = ""; // Initialization

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    // Check if the character is a letter or not using the logic
    if (char >= "A" && char <= "Z") {
      // Get our encrypted letter using Caesar cipher formula as given
      const encryptedChar = String.fromCharCode(
        ((char.charCodeAt(0) - 65 + n) % 26) + 65
      );
      result += encryptedChar;
    } else {
      result += char;
    }
  }

  // Display the result
  document.getElementById(
    "result"
  ).textContent = `Encrypted Text: ${result}`;
}
