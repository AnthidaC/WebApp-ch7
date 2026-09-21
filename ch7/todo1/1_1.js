//1.1

async function randomNum(num,callback){
        console.log("\nWait 2 second …");
        setTimeout(()=>{
            let ss=Math.floor(Math.random()*10);
            console.log("Num "+num+" : " + ss);
            callback(ss);
        },2000)
}

randomNum(1,(ss)=>{
    if(ss%2==0){
        randomNum(2,(ss)=>{
        if(ss%2==0){
            randomNum(3,(ss)=>{
                if(ss%2==0){
                    console.log("You win");
                }
                else{console.log("You lost");}
            });
        }else{console.log("You lost");}
        });
    }else{console.log("You lost");}
});
