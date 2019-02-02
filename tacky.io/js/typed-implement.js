//Implementation of typed.js library


var typedName = new Typed("#typedName", {
    strings: ["My name is James Harbour","My name is tACK(y)^750","My name is kyrem1^750"],
    typeSpeed: 30,
    smartBackspace: true,
    backDelay: 500,
    loop: true
});

var typedLink1 = new Typed("#typedLink1", {
    strings: ["<a id=\"link1\" href=\"https://github.com/kyrem1/\">Github</a>^300\n\n<a id=\"link2\" href=\"https://steamcommunity.com/id/hewillendyou\">Steam</a>"],
    typeSpeed: 30,
    startDelay: 1000
});
