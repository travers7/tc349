// JavaScript Document

var roster_list = new Array();

function is_number(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

function check_input(name) {
	'use strict';
	console.log(name);
	console.log(document.getElementById(name).value);
	var name_str = document.getElementById(name).value;
	if (name_str.length == 0) {
		console.log("length=0");
		document.getElementById(name).style.background = "rgba(330,0,0,0.2)";
		alert("Try again.");
	}
	else if (name_str.length >= 30) {
		console.log("length>30");
		document.getElementById(name).style.background = "rgba(330,0,0,0.2)";
		alert("Try again.");
	}
	else {
		console.log("passed");
		document.getElementById(name).style.background = "white";
	}
	return false;
}

function add_list() {
	'use strict';
	var name_first = document.getElementById('name_first').value;
	var name_last = document.getElementById('name_last').value;
	if ((name_first.length == 0) || (name_last.length == 0)) {
		console.log("length=0");
		document.getElementById('name_first').style.background = "rgba(330,0,0,0.2)";
		document.getElementById('name_last').style.background = "rgba(330,0,0,0.2)";
		alert("Try again.");
	}
	else if ((name_first.length >= 30) || (name_last.length >= 30)) {
		console.log("length>30");
		document.getElementById('name_first').style.background = "rgba(330,0,0,0.2)";
		document.getElementById('name_last').style.background = "rgba(330,0,0,0.2)";
		alert("Try again.");
	}
	else if (document.getElementById('position').value == '0') {
		console.log("Position not selected.");
		alert("Try again.");
	}
	else {
		console.log("passed");
		document.getElementById('name_first').style.background = "white";
		document.getElementById('name_last').style.background = "white";
		roster_list.splice(0, 0, document.getElementById('name_first').value, document.getElementById('name_last').value, document.getElementById('position').value);
		console.log(roster_list, roster_list.length);
		document.getElementById('list').innerHTML = "";
		for (var i = roster_list.length - 1; i >= 0; i-=3) {
			console.log(i);
			document.getElementById('list').innerHTML += "&nbsp;&nbsp;&nbsp;" + roster_list[i-2] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + roster_list[i-1] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + roster_list[i] + "<br/>";
		};
	}
	return false;
}