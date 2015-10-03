document.write("hi");
function check1() {
    try{
        
    fname=document.forms["form1"]["fname"].value;
    lname=document.forms["form1"]["lname"].value;
    m=document.forms["form1"]["male"].value;
    f=document.forms["form1"]["female"].value;
    var x=fname+" "+ lname +" is a " + m +" " + f;
    document.write(x);
    }
    catch{
        }
        try{
        
document.getElementById("demo2").innerHTML = "Successfull";}
catch{
    }
    
}

