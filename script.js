//your JS code here. If required.
let inputs = document.getElementsByClassName("code")
//console.log(inputs)

for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("click",(events)=>{
        //console.log(events)
        inputs[i].setAttribute("placeholder","")
    })
}
