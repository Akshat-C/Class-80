var stn = [];
var darray = [];
function Submit(){
    for (var i = 1; i<=4; i++)
    {
        var n = document.getElementById("s"+i).value;
        stn.push(n);
        console.log(stn);
    }
    console.log(stn);
    var len = stn.length;
    console.log(len);

    for (var j = 0; j<len; j++)
    {
        darray.push("<h4>Name- "+ stn[j]+"</h4>");
    }
    console.log(darray);
    document.getElementById("display1").innerHTML = darray;
    var rc = darray.join(" ");
    console.log(rc);
    document.getElementById("display2").innerHTML = rc;

    document.getElementById("sub").style.display = "none";
    document.getElementById("sor").style.display = "inline";
}
function Sort(){
    darray.sort();
    console.log(darray);
    rc = darray.join(" ");
    document.getElementById("display2").innerHTML = rc;
}