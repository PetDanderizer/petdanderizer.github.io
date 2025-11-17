function item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

var items = [];

// literally as I was writing out a complaint that IDs don't start at 0,
//   the teacher explained why they start at 1 (image IDs start at 1 too)
// Fair play.
items[0] = new item(1, "Necro Spellbook", 49.99);
items[1] = new item(2, "Palantir", 99.99);
items[2] = new item(3, "Mandrake Root", 19.99);

items[3] = new item(4, "Tarot Cards", 49.99);
items[4] = new item(5, "Weegee Board", "LL.LL"); // I kinda backed myself in a corner, making this one "LL.LL" price...
items[5] = new item(6, "Scrying Mirror", 19.99);

function updateCheckout() {
    // complain about dark reader leaving junk in sessionStorage for tracking purposes

    var numDarkReaderKeys = 0;
    for (i=0;i<sessionStorage.length;++i)
        if (sessionStorage.key(i).startsWith("__darkreader__"))
            ++numDarkReaderKeys;
    if (numDarkReaderKeys > 0)
        console.log("Listing cart as having " + numDarkReaderKeys + " fewer item(s) than there are in sessionStorage! Thanks for the random crap shoved in there, Dark Reader!");

    document.getElementById("cart-link").innerHTML = "Checkout (" + (sessionStorage.length - numDarkReaderKeys) + ")";
}

// gets ID of item based on name
// if no such item exists, returns -1
function getID(arg) {
    // wtf was that version the teacher gave
    for (i = 0; i < items.length; ++i)
        if (items[i].name == arg) return items[i].id;
    return -1; // and add a failsafe, for crying out loud.
}

// add item to shopping cart, accepts the item ID (numerical)
function add(arg) {
    sessionStorage.setItem(items[arg].name, items[arg].price);
    updateCheckout();
}

// remove item from shopping cart, but requires name string passed in, not an item object for some reason?
// stupid inconsistent code with AWFUL variable names
function remove(arg) {
    sessionStorage.removeItem(arg);
    displayCart();
    updateCheckout();
}

function displayCart() {
    var total = 0;
    var output = "<table class='table table-hover'>";

    var numDarkReaderKeys = 0;
    for (i=0;i<sessionStorage.length;++i)
        if (sessionStorage.key(i).startsWith("__darkreader__"))
            ++numDarkReaderKeys;

    if (sessionStorage.length - numDarkReaderKeys == 0) {
        document.getElementById("cart").innerHTML = "<h3>Cart is empty!</h3>";
        document.getElementById("total").innerHTML = ""; // instead of leaving some weird "Total: 0" bit, just remove it...
    }
    else {
        output += "<tr><th>Images</th><th>Name</th><th>Price</th><th>Delete</th>";
        for (x = 0; x < sessionStorage.length; ++x) {
            var key = sessionStorage.key(x);
            // ignore stupid Dark Reader keys
            if (key.startsWith("__darkreader__"))
                continue;
            output += "<tr><td><img src='images/img"+getID(key)+".jpg' width='50px' height='50px'></td>"
            output += "<td>"+key+"</td><td>" + sessionStorage.getItem(key) + "</td>";
            output += "<td><input type='button' class='btn btn-primary' value='Delete' onclick='remove(\""+key+"\")'></td></tr>";
            total += parseFloat(sessionStorage.getItem(key)); // why is parsing necessary here???
        }

        document.getElementById("cart").innerHTML = output;
        // handle LL.LL cost item properly
        if (!Number.isNaN(total))
            document.getElementById("total").innerHTML = "<h3>TOTAL: "+total.toFixed(2)+"</h3>";
        else
            document.getElementById("total").innerHTML = "<h3>TOTAL: LL.LL</h3>";
    }
}
