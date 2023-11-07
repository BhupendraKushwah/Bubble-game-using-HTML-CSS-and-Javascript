let timer=60
let score=0
let HitRn
const makebubble=()=>{
    let panel_btm=document.getElementById("panel-bottom");
    let bubbles =""
    for(let i=0;i<=143;i++){
    let rn=Math.floor(Math.random()*10)
    bubbles+=`<div class="bubble">${rn}</div>`
}
panel_btm.innerHTML=bubbles
}
const setTimer=()=>{
    let TimerInterval=setInterval(()=>{
        if(timer>0){
            timer--;
            document.getElementById("Timer").innerText=timer
        }
        else{
            clearInterval(TimerInterval)
            document.getElementById("panel-bottom").innerHTML=`<h1> Game Over!</h1>`
        }
    },1000)
}
const ScoreIncrement=()=>{
    score+=10
    document.getElementById("Score").innerText=score
}

const hitScore=()=>{
    HitRn=Math.floor(Math.random()*10);
    console.log(HitRn)
    document.getElementById("HitRn").innerText=HitRn
}

document.getElementById("panel-bottom").addEventListener("click",(e)=>{
    let Num=Number(e.target.innerText)
    if(HitRn===Num){
        makebubble()
        ScoreIncrement()
        hitScore()
    }
})

makebubble()
setTimer()
hitScore()