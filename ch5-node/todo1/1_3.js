
function randomNum(num){
    return new Promise((wining,lost)=>{
        console.log("\nWait 2 second …");
        setTimeout(()=>{
            let ss=Math.floor(Math.random()*10);
            console.log("Num "+num+" : " + ss);
            if(ss%2==0){
                wining(ss);}
            else{
                lost(ss);
            }
        },2000)
    })
}

async function playGame() {
    try {
        let result1 = await randomNum(1);
        let result2 = await randomNum(2
        );
        let result3 = await randomNum(3);
        console.log("You Win");

    } catch (err) {
        console.log("You lost");
    }
}

playGame();
