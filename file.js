       var colors = ["red","green","blue","jellow"];
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

document.getElementById("jeff2").onclick = function(index) {
	let colors = ["red","green","blue","jellow"];
	let index = 0;
	setInterval(function(index){
		if(index === colors.length - 1){
			index = 0;
		}else{
			index = index + 1;
		}
		document.querySelector("body").style.backgroundColor = colors[index];
	}, 100)
	if (document.getElementById("jeff2").style.color == "red") {
		document.getElementById("jeff2").style.color = "green";

	} else {
		document.querySelector("body").style.backgroundColor = "blue";
		document.getElementById("jeff2").style.color = "red";
	}

}
function myfunction(colors, index) {

	
	
	
	
	
	
	
	
	if (document.querySelector("body").style.backgroundColor == "blue")

		(document.querySelector("body").style.backgroundColor = "red");
	else

		document.querySelector("body").style.backgroundColor = "blue";

}