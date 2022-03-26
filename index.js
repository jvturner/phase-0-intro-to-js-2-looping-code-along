

const cards = ["Guadalupe", "Ollie", "Aki"]
let eventName = ["surprise"]

let newArray = [];



function writeCards(cards, eventName) {

    for (let i = 0; i < cards.length; i++) {
        [`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!"`]
    }
    return newArray;
}
    

console.log(newArray);



    function countDown(num) {
        for (let countdown = 10; countdown > -1; countdown--)
            console.log(countdown);
    }


