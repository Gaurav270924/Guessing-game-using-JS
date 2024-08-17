let max=prompt("enter the maximum number");

let random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the randome number generated");
while(true)
{
    if(guess=="quit")
    {
        console.log("quit the game");
        break;
    }
    if(random==guess)
    {
        console.log("you guessed the correct number");
        break;
    }
    else if(guess<random){
        guess=prompt("Hint:your guess was too small....plzzz try again")
    }
    else{
        guess=prompt("Hint:your guess was too bigggg.....plzz try agaian");
    }
}