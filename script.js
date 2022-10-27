var x=document.getElementById("hands");
var y=document.getElementById("animcon");
var z=document.getElementById("password");
var v=document.getElementById("submit");

var w=document.getElementById("email");




function closeye()
{
	y.style.backgroundImage="url(https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-blond-haired-woman-72dpi-forPersonalUseOnly.gif)";
	
  if (z.type === "text") {
    x.style.marginTop="0%";
   
  }else{
    x.style.marginTop="110%";
  }
}
function openeye()
{
	y.style.backgroundImage="url(https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-blond-haired-woman-72dpi-forPersonalUseOnly.gif)";
	x.style.marginTop="110%";
}

function myFunction() {
   
    if (z.type === "password") {
      x.style.marginTop="0%";
      z.type = "text";
     
     
    } else {
      x.style.marginTop="110%";
      z.type = "password";
     
     
    }
  }

v.addEventListener("mouseover",(button)=>{
let  email= w.value;
let  password = z.value;

let validate= /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/.test(email) && /[a-zA-Z0-9]{8}/.test(password)


if(!validate){
  button.target.classList.toggle("move");
  
 
}else{ 
  button.target.classList.add("stop");
  v.style.background="red"
}
})