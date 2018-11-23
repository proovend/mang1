var colors = [ "red", "green", "blue", "yellow", "black", "red" ];
let index = 0;
console
		.log("\
		 \
 YYYYYYYYYYYYYYYYYYYYYYYYYYYYYasdf kaldsjf ölasdkjf öalskdjf aölskdjf aölsdkjf alökaj sdf\
 YYYYYYYYYYYYYYYYYYYYYYYYYYYYY\
 1+1=2 QUICK MATHS\
 yyyyyyyyyyyyyyyyyyyyyyyyyyyyy\
 yyyyyyyyyyyyyyyyyyyyyyyyyyyyy\
 \
hello my name is jeff");
var not2 = true;
var notSwitch;
function switchRgb(notSwitch, not2) {
	console.info(' 15: ' + not2);
	if (not2) {

		notSwitch = setInterval(function() {
			funca(number1);
			number1++;
			if (number1 == 6) {
				number1 = 0;
			}

		}, 500);
		not2 = true;
	} else {

		clearInterval(notSwitch);
		not2 = false;
	}

}
document.getElementById("button").onclick = function() {
	// switchRgb(notSwitch, not2);
	if (not2) {

		notSwitch = setInterval(function() {
			funca(number1);
			number1++;
			if (number1 == 6) {
				number1 = 0;
			}

		}, 500);

		not2 = false;
	} else {
		clearInterval(notSwitch);
		document.querySelector("body").style.backgroundColor = "white";
		not2 = true;
	}
}
function myfunction(colors, index) {

	if (document.querySelector("body").style.backgroundColor == "blue")

		(document.querySelector("body").style.backgroundColor = "red");
	else

		document.querySelector("body").style.backgroundColor = "blue";

}
var number = 0;
function doSomething(number) {
	let variable1 = number;
	return function() {
		// console.info(' 48: ' + variable1);
		variable1++;
	}();

}
doSomething(4);

let interval = window.setInterval(function(number) {
	// console.info(' 56: ' + number);
	number++;
}, 500);
function callback(a, b) {
	return function() {
		// console.log('sum = ', (a + b));
	}()
}

var x = 1, y = 2;
function funca(a) {
	// console.info(a);
	document.querySelector("body").style.backgroundColor = colors[a];
	clearInterval(notSwitch);

}
var number1 = 0;
