var userId="ruku@gmail.com"
var pass="123"

function logintowebpage()
{
  var userGivenID=document.getElementById("usid").value
  var userGivenPass=document.getElementById("pass").value
  if(userId==userGivenID && pass==userGivenPass)
  {
    var fom=document.forms
    fom[0].action="./index.html"
    fom[0].elements[2].type="submit"
  }
  else if(userId==userGivenID && pass!=userGivenPass)
  {
    document.getElementById("result").innerHTML="wrong password Entered"
    document.getElementById("passdiv").style.borderColor="red"
    document.getElementById("emaildiv").style.borderColor="royalblue"
    document.body.style.backgroundImage="linear-gradient(75deg,rgb(255,0,162),red)"
  }
  else if( UserId!=userGivenID && pass==userGivenPass){
    document.getElementById("result").innerHTML="wrong user id  entered"
    document.getElementById("emaildiv").style.borderColor="red"
    document.getElementById("passdiv").style.borderColor="royalblue"
    document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
  }
  else{
      document.getElementById("result").innerHTML="wrong user id and password"
      document.getElementById("emaildiv").style.borderColor="red"
      document.getElementById("passdiv").style.borderColor="red"
      document.body.style.backgroundColor="red"
      document.body.style.backgroundImage="none"
  }
  }
function passvis()
{
  document.getElementById("pass").removeAttribute("type","password")
  document.getElementById("visible").setAttribute("src","../html/monkopen.png")

  document.getElementById("visible").style.transform="rotate Y(360deg)"
  document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
  document.getElementById("pass").removeAttribute("type", "password")
  document.getElementById("visible").setAttribute("src","../html/monkclose.png")

  document.getElementById("visible").style.transform="rotate Y(-360deg)"
  document.getElementById("visible").style.transition="transform 0.3s"
}
