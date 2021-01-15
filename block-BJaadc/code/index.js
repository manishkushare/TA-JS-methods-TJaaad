let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log(message.length);
// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
console.log(`The first character of ${message} is ${message.charAt(0)}`);
// Log the last character of message using length like `The last character of [message] is [character]`
console.log(`The last character of ${message} is ${message.charAt(message.length-1)} `);
// Log the index of word "you" in message
console.log(message.indexOf("you"));
// Log the index of word "still" in message
console.log(message.indexOf("still"));

// Log the index of word "answers" in message
console.log(message.lastIndexOf("answer"));
// Log true or false based on whether the word "answers" exist in message or not
console.log(message.includes("answer"));
// Log true or false based on whether the word "they" exist in message or not
console.log(message.includes("they"));  
// Log true or false based on whether the word "is" exist in message or not
console.log("is :",message.includes("is"));
// Log true or false based on whether the word "Is" exist in message or not
console.log("Is :",message.includes("Is"));
// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
console.log("you :", message.slice(3,6).includes("you"));
// Check and log whether the word from index 7 to 8 is "a" or not
console.log(`7 to 8 is "a" :`, message.slice(7,8).includes("a"));
// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
console.log(`last 3 character is "no!" :`, message.slice(message.length-3).endsWith("no!"));
// Check and log whether the last 5 character in message is "no!" or not
console.log("last 5 character is 'no!' :", message.slice(message.length-5).endsWith("no!"));
// Log the message variable, all in lowecase
console.log(`lowercase :`, message.toLowerCase());
// Log the message variable, all in uppercase
console.log(`uppercase :`, message.toUpperCase());

// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
console.log(`replace "are to can't" :`, message.replace("are",'can\'t'));

// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
let newMessage = "";
newMessage = message.replace("still", "");
console.log(`relace still to "" :`, newMessage );
// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
 newMessage = "decide";
newMessage = message.replace("thinking", "decide");
console.log(`replace thinking to decide :`,newMessage)
// Log all the characters from the message variable (you can user for..of loop on string)
newMessage = message.split("");
// console.log(newMessage);
for(let char of newMessage){
    console.log(char);
}
// Split all the words in message (split by " " space) and store it in a variable messageArray
newMessage = message.split(" ");
// Log all the words of messageArray
console.log(newMessage);