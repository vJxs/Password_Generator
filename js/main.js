document.getElementById('generate-password').addEventListener('click', function() {
    generateAndDisplayPassword();
});

document.getElementById('clipboard').addEventListener('click', function() {
    var copyText = document.getElementById('generated-password');
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    
    
    var copyMessage = document.getElementById('copy-message');
    copyMessage.style.display = 'block';
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 2000);
});

document.getElementById('password-length').addEventListener('input', function() {
    document.getElementById('password-length-value').textContent = this.value;
});

function generateAndDisplayPassword() {
    var length = document.getElementById('password-length').value;
    var includeLowercase = document.getElementById('include-lowercase').checked;
    var includeUppercase = document.getElementById('include-uppercase').checked;
    var includeNumbers = document.getElementById('include-numbers').checked;
    var includeSymbols = document.getElementById('include-symbols').checked;
    
    var password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('generated-password').value = password;
}

// Password generation function with specified length and options
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    var allCharacters = '';
    if (includeLowercase) allCharacters += lowercase;
    if (includeUppercase) allCharacters += uppercase;
    if (includeNumbers) allCharacters += numbers;
    if (includeSymbols) allCharacters += symbols;
    
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }
    return password;
}

// Generate password on page load
window.onload = function() {
    generateAndDisplayPassword();
};
