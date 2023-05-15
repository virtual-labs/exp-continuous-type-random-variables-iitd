function change(){
    var dist = document.getElementById("distribution").value;
    if (dist == "pdf"){
        location.href="./pdf.html";
    }
    else if (dist == "pmf"){
        location.href="./pmf.html";
    }
}