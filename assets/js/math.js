
/* Trig functions */
function findHyp() {
	var A = document.getElementById("trig-A").value;
	A = A * 1;
	var B = document.getElementById("trig-B").value;
	B = B * 1;
	console.log(Math.hypot(A, B));
	var out = Math.hypot(A, B);
	document.getElementById("trigOut").innerHTML = out;
}
function findA() {
	var B = document.getElementById("trig-B").value;
	B = B * 1;
	var C = document.getElementById("trig-C").value;
	C = C * 1;
	var out = Math.sqrt(Math.pow(C, 2) - Math.pow(B, 2));
	document.getElementById("trigOut").innerHTML = out;
}
function findB() {
	var A = document.getElementById("trig-A").value;
	A = A * 1;
	var C = document.getElementById("trig-C").value;
	C = C * 1;
	var out = Math.sqrt(Math.pow(C, 2) - Math.pow(A, 2));
	document.getElementById("trigOut").innerHTML = out;
}