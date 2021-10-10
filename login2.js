function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

if(username=="timi" && password=="samisagenius")
{
    alert("login successful");
    return false;
}
else
{
    alert("login failed");
}


}