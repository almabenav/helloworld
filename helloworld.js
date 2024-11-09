const message = ["Hello", "World"];
let index = 0;

function typeMessage() {
    if (index < message.length) {
        console.log(message[index]);
        index++;
        setTimeout(typeMessage, 1000);
    } else {
        console.log("It's a pleasure to have you here");
    }
}

typeMessage();