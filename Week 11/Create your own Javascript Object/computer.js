function printComputer()
{
    var name_line = "<td>" + this.name + "</td>";
    var size_line = "<td>" + this.size + "</td>";
    var power_consumption_line = "<td>" + this.power_consumption+ "</td>";
    var load_line = "<td>" + this.load + "</td>";
    var spikiness_line = "<td>" + this.spikiness+ "</td>";
    var fragility_line = "<td>" + this.fragility + "</td>";

    var row = "<tr>" + name_line + size_line + power_consumption_line + load_line + spikiness_line + fragility_line +"</tr>";
    document.write(row);
}

function Computer(name, size, power_consumption, load, spikiness, fragility)
{
    this.name = name;
    this.size = size;
    this.power_consumption = power_consumption;
    this.load = load;
    this.spikiness = spikiness;
    this.fragility = fragility;

    this.printComputer = printComputer;
}

var myPC = new Computer("my PC","big","high","medium","medium-high","low");
var myPhone = new Computer("my phone","small","low","very low","very low","very high");
var myLaptop = new Computer("my laptop","medium","medium","low","low","medium-low");
// it has a microcontroller that's running an OS, so it counts, right?
var myKeyboard = new Computer("my keyboard","medium","low","low","high","low");
var mySmartwatch = new Computer("my smartwatch","very small","very low","very high","low","medium-high");

var computers = [myPC, myPhone, myLaptop, myKeyboard, mySmartwatch];

for (var i = 0; i < computers.length; i++)
{
    computers[i].printComputer();
}
