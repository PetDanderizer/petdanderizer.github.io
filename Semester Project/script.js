// used in catch.html to randomize the animations of the hamster
function startGame() {
    ham = document.querySelector(".catchable img");
    str = "" + (Math.random()*1.5+1) + "s, " + (Math.random()*1.5+0.5) + "s, " + (Math.random()*2+0.5) + "s";
    // https://stackoverflow.com/questions/28242013/updating-animation-duration-in-javascript
    ham.style["-webkit-animation-duration"] = str;
}

// used in catch.html
function finishGame() {
    document.querySelector(".catchable").remove();
    document.body.innerHTML += "<h1>You caught the hamster! Wow!</h1>";
}

// used on all pages to prevent hamster haters from accessing site
function hamsterHaterCheck() {
    if (sessionStorage.getItem("likesHamsters")) {
        // deny access to website
        console.log("Nothing personal, kid.");
        // pretty disgusting way of keeping the nav intact while removing the rest of the website, but
        //   I've kinda gotta do this to rub in the fact that this is done via session storage
        document.body.innerHTML = document.body.innerHTML.split("</nav>")[0]+"</nav>";
        document.body.style.backgroundColor = "red";
        document.body.innerHTML += "                                            \
            <div style='margin: auto; text-align: center;'>                     \
            <h1>You have been denied access to this website.</h1>               \
            <h4>Hamster haters are not welcome here.</h4>                       \
            <button class='deniedbutton' onclick='resetHamsterHaterStatus()'>   \
                Click here if you decided you like hamsters, after all          \
            </button>                                                           \
            </div>                                                              \
            "
        document.querySelector("nav").style.backgroundColor = "red";
    }
    else {
        console.log("You like hamsters, so you're alright.")
    }
}

// used to clear hamster hater status and restore access to site (by reloading the page)
function resetHamsterHaterStatus() {
    sessionStorage.removeItem("likesHamsters");
    window.location.reload();
}

// used in questionnaire.html
function submitQuestionnaire() {
    answeredQuestions = true;

    if (document.getElementById("hatesHamsters").checked) {
        // USER HATES HAMSTERS AND MUST BE EJECTED FROM WEBSITE IMMEDIATELY
        sessionStorage.setItem("likesHamsters", false);
        hamsterHaterCheck();
    }
    else if (document.getElementById("likesHamsters").checked) {
        // user likes hamsters, all's well
        document.getElementById("hamsterOpinionFeedback").innerHTML = "";
    }
    else {
        document.getElementById("hamsterOpinionFeedback").innerHTML = "<h5 class='negativeQuestionFeedback'>You must answer this question!</h5>";
        answeredQuestions = false;
    }

    if (document.getElementById("canCatchHamster").checked) {
        document.getElementById("hamsterCatchOpinionFeedback").innerHTML = "";
        // don't add this message if user did not answer first question
        document.getElementById("hamsterCatchButton").innerHTML = "<p>You should try <a href='catch.html'>catching a hamster</a>, a hamster, then!</p>";
    }
    else if (document.getElementById("canNotCatchHamster").checked) {
        document.getElementById("hamsterCatchOpinionFeedback").innerHTML = "";
        document.getElementById("hamsterCatchButton").innerHTML = "<p>You're lame, you should try <a href='catch.html'>catching a hamster</a> anyway</p>";
    }
    else {
        document.getElementById("hamsterCatchOpinionFeedback").innerHTML = "<h5 class='negativeQuestionFeedback'>You must answer this question!</h5>";
        answeredQuestions = false;
    }

    if (answeredQuestions) {
        document.getElementById("questionnaireComplete").innerText = "Thank you for filling out this questionnaire!";
    }
    else {
        document.getElementById("questionnaireComplete").innerText = "";
    }
}

// used in info.html
function printHamsterToHamsterTable()
{
    var name_line = "<td>" + this.name + "</td>";
    var size_line = "<td>" + this.size + "</td>";
    var anger_line = "<td>" + this.anger+ "</td>";

    var row = "<tr>" + name_line + size_line + anger_line +"</tr>";
    document.getElementById("hamsterTable").innerHTML += row;
}

function Hamster(name, size, anger)
{
    this.name = name;
    this.size = size;
    this.anger = anger;

    this.printHamsterToHamsterTable = printHamsterToHamsterTable;
}

function addHamstersToHamsterTable() {

    dwarfHam = new Hamster("Dwarf", "Miniscule", "Low");
    goldenHam = new Hamster("Golden", "Medium", "Low");
    blackBelliedHam = new Hamster("Black Bellied", "Large", "Furious");

    dwarfHam.printHamsterToHamsterTable();
    goldenHam.printHamsterToHamsterTable();
    blackBelliedHam.printHamsterToHamsterTable();
}

// used in more.html
function randomHamster() {
    // look, it's 3:30 in the morning and I really can't be bothered to normalize the file type. Just deal with the hodgepodge of jpg, webp, and png files, of all sorts of sizes. The browser can deal with the details.
    hamsters = ["extrahamster0.jpg","extrahamster1.webp","extrahamster2.jpg","extrahamster3.png","extrahamster4.jpg","extrahamster5.jpg","extrahamster6.jpg","extrahamster7.jpg","extrahamster8.jpg","extrahamster9.jpg","hamper4.jpg","hamster1.jpg","hamster2.jpg","hamster3.jpg"];
    document.getElementById("randomhamster").src = "images/"+hamsters[Math.floor(Math.random() * hamsters.length)];
}
