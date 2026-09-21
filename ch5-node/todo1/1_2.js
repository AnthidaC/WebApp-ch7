//1.2

async function randomNum(num){
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

randomNum(1)
    .then(result1 => {
        randomNum(2)
            .then(result2 => {
                randomNum()
                    .then(result3 => {
                        console.log("You Win");
                    })
                    .catch(err3 => {
                        console.log("You lost");
                    });
            })
            .catch(err2 => {
                console.log("You lost");
            });
    })
    .catch(err1 => {
        console.log("You lost");
    });
