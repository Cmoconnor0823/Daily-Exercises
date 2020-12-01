# Question One

What value is now stored in the variable name?

```javascript

var isKing = true;
var name = isKing ? ‘Arthur’ : ‘Hank’;

Arthur
```



# Question Two

How to Play Exploding Kittens 
You play the game by putting the deck face down and taking turns drawing cards until someone draws an Exploding Kitten. (In this case the joker)

Write a function to mimic the game of Exploding Kittens using a standard 52 card deck with a single joker. Deal a random card to each player each turn. The game ends when someone is dealt the joker. Display a dialogue message to the losing player.

Answer:

```javascript


var deck = [
    2,3,4,5,6,7,8,9,'J','Q','K','A',
2,3,4,5,6,7,8,9,'J','Q','K','A',
2,3,4,5,6,7,8,9,'J','Q','K','A',
2,3,4,5,6,7,8,9,'J','Q','K','A',
'Joker']


function explodingKittens(card){

var moveCard = card[Math.floor(Math.random() * card.length)]
console.log(moveCard)
if(moveCard === 'Joker'){
    return 'Loser'
} return 'Lucky Pick'


}

explodingKittens(deck)

```