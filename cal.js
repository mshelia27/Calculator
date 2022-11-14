const screenDisplay = document.querySelector(".screen")
const  Btns = document.querySelectorAll(".Btn")
const equalBtn = document.querySelector(".equal-Btn")
const clearBtn = document.querySelector(".clear-Btn")


for(let i=0; i<Btns.length;i++){
    Btns[i].addEventListener("click",function(){
        let number=Btns[i].getAttribute("data-num");
        screenDisplay.value += number;
    })
}

equalBtn.addEventListener("click",function(){
    let value=eval(screenDisplay.value);
    screenDisplay.value=value;
})

clearBtn.addEventListener("click", function(){
    screenDisplay.value="";
})


