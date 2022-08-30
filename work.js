const hour=document.getElementById("hr");
const minute=document.getElementById("min");
const second=document.getElementById("sec");
const am=document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
        h=h-12
        ampm="PM"
    }
    
    h=h<10 ? "0"+h : h;
    m=m<10 ? "0"+m : m;
    s=s<10 ? "0"+s : s;

    hour.innerText= h;
    minute.innerText=m;
    second.innerText=s;
    am.innerText=ampm;

    setTimeout(()=>{
        updateClock()
    },1000)

}
updateClock()
