function colorMixer()
{
    var red = document.getElementById("red").value;
    var greem = document.getElementById("greem").value;
    var blue = document.getElementById("blue").value;

    document.getElementById("sample").style = "background-color: rgb("+red+","+greem+","+blue+");";
    document.getElementById("color-output").innerHTML= "background-color: rgb("+red+","+greem+","+blue+");";
}
