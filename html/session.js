function collectVal()
{
    var nameOfTheUser=document.getElementById("a").value 
    var colour=document.getElementById("b").value
    sessionStorage.setItem("Name",nameOfTheUser)
    sessionStorage.setItem("Colour",colour)

}
function getVal()
{
    var nameOfTheUser=sessionStorage.getItem("Name")
    var colour=sessionStorage.getItem("colour")
    document.getElementById("a").innerHTML=nameOfTheUser;
    document.getElementById("a").style.color=colour
}