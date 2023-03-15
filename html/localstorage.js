function dataFromTheUser()
{
    var userData=document.getElementById("a").value 
    localStorage.setItem("data",userData)
}
function printData()
{
    var userData=localStorage.getItem("data")
    document.getElementById("a").innerHTML=userData
}