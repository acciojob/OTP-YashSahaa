//your JS code here. If required.
let inputs = document.getElementsByClassName("code")
//console.log(inputs)
window.onload = function() {
  document.getElementById("code-1").focus();
	document.getElementById("code-1").setAttribute("placeholder","")
};
for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("click",(events)=>{
        //console.log(events)
        inputs[i].setAttribute("placeholder","")
    })
}
for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("keyup",(events)=>{
        //console.log(events)

        if(events.key==="Backspace" && inputs[i].value==""){
            if(i>0){
                inputs[i-1].setAttribute("placeholder","")
                inputs[i-1].focus()
            }
        }
        else if(events.key.charCodeAt(0)>47 && events.key.charCodeAt(0)<58){
            if(i<inputs.length-1){
                inputs[i+1].setAttribute("placeholder","")
                inputs[i+1].focus()
            }
        }
		else{
			inputs[i].value=""
		}
    })
}
