function checkEmail() {
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;
    if (email == "")
        document.getElementById("email-error").innerHTML = "Please fill in this field";
    else
        document.getElementById("email-error").innerHTML = "";
    
    if (confirm == "")
        document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    else
        document.getElementById("confirm-error").innerHTML = "";
    
    if (email != "" && email != confirm) {
        document.getElementById("email-error").innerHTML = "Both emails must be the same";
        document.getElementById("confirm-error").innerHTML = "Both emails must be the same";
    }
}

function pizzaOrder() {
    var output= "<h3>Pizza Order: ";
    if (document.getElementById("small").checked)
        output += " Small";
    else if (document.getElementById("medium").checked)
        output += " Medium";
    else
        output += " Large";
    
    if (document.getElementById("pepperoni").checked)
        output += " Pepperoni";
    if (document.getElementById("sausage").checked)
        output += " Sausage";
    if (document.getElementById("mushrooms").checked)
        output += " Mushroom";
    
    document.getElementById("output").innerHTML = output + "</h3>";
}
