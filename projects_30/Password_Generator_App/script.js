const passwordBox = document.getElementById('password');
const length = 13;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = "abdcdefghijklmnopqrstuvwxyz"
const number = '0123456789'
const symbol = '@#$%^&*()+_`~-/|><{}[]';
const allChars = upperCase + lowerCase + number + symbol;


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]; 
    }

    passwordBox.value = password;

    function copyText() {
        // Get the password text
        const password = passwordBox.value;
    
        // Copy the password to the clipboard
        navigator.clipboard.writeText(password)
          .then(() => {
            // Success feedback
            alert("Password copied to clipboard!");
          })
          .catch((error) => {
            // Error handling
            alert("Failed to copy password. Error: " + error.message);
          });
        }
}


