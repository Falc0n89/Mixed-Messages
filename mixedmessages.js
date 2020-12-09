const messages = {
    firstMessage : ['Wake up, Neo', 'Get up, NOW!', 'Hello, Neo', 'Why are you sleeping right now?'],

    middleMessage: ['We don\'t have much time', 'You need to move.', 'Follow the white rabbit.', 'I like turtles'],

    lastMessage: ['Blue pill or red pill', 'I just wanted to say your hair is pretty great, dude.', 'Morpheus is getting impatient.', 'Oh, ok. I guess he is going back to sleep...', ],
};
//get a random index
function randomIndex(num) {
    return Math.floor(Math.random() * num)
}

//Get the messages!
const message1 = `The computer says: ${messages.firstMessage[randomIndex(messages.firstMessage.length)]}`;
const message2 = `And then it says, a little more impatiently: ${messages.middleMessage[randomIndex(messages.middleMessage.length)]}`;
const message3 = `And finally, the saga concludes with a righteous: ${messages.lastMessage[randomIndex(messages.lastMessage.length)]}`;

function jackIn() {
    console.log(message1, '\n', message2, '\n', message3)
}

jackIn();
