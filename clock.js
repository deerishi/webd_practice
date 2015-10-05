
function startclock()
{
  
    var d=new Date();
    document.getElementById("demo").innerHTML=d.toLocaleTimeString();
    var timer=setInterval(startclock,1000);
}