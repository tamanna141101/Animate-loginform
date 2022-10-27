var x=document.getElementById("hands");
var y=document.getElementById("animcon");
var z = document.getElementById("myInput");
function closeye()
{
	y.style.backgroundImage="url(https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-blond-haired-woman-72dpi-forPersonalUseOnly.gif)";
	x.style.marginTop="0%";
}
function openeye()
{
	y.style.backgroundImage="url(https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-blond-haired-woman-72dpi-forPersonalUseOnly.gif)";
	x.style.marginTop="110%";
}

function myFunction() {
   
    if (z.type === "password") {
      x.style.marginTop="110%";
      z.type = "text";
     
    } else {
      x.style.marginTop="0%";
      z.type = "password";
     
    }
  }