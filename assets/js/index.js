var passwordOptions = [
      
];

var newPassword = "";

var passwordGenerator = function(){
    var isUppercase = false;
    var isLowercase = false;
    var isNumeric = false;
    var hasSpecialChar = false;

    var length = prompt("Please enter a password length");
    if(parseInt(length) < 8 || parseInt(length) > 128 || length == ""){
        if(parseInt(length) < 8){
            alert("password is too short, must be over 8 characters");
        }
        else if(parseInt(length) > 128){
            alert("password is too long, must be under 128 characters");
        }else if(length == ""){
            alert("Input cannot be null")
        }
      return generatePassword();
    }else{
        alert("length chosen: " + length + " characters")
    } 

    var uppercase = confirm("Would you like to include uppercase letter? Confirm or Cancel");
    if(uppercase){
        passwordOptions.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    }

    var lowercase = confirm("Would you like to include lowercase letter? Confirm or Cancel");
    if(lowercase){
        passwordOptions.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    }

    var numeric = confirm("Would you like to include numbers? Confirm or Cancel");
    if(numeric){
        passwordOptions.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
    }

    var specialChar = confirm("Would you like to include special characters? Confirm or Cancel");
    if(specialChar){
        passwordOptions.push("", '!', "''", '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~')
    }

    alert("options: " + passwordOptions);

    for(i = 0; i < parseInt(length); i++){
        var rand = Math.floor(Math.random() * passwordOptions.length)
        newPassword += passwordOptions[rand];
    }

    document.getElementById("password").innerHTML = "Your new password: " + newPassword;

};

