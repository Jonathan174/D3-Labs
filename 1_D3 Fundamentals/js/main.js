/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var rect = svg.append("rect")
	.attr("x", 35)
	.attr("y", 185)
	.attr("width", 130)
	.attr("height", 130)
	.attr("fill","black");

var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 65)
	.attr("fill", "green");

var rect = svg.append("rect")
	.attr("x", 55)
	.attr("y", 205)
	.attr("width", 90)
	.attr("height", 90)
	.attr("fill","red");

var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 45)
	.attr("fill", "blue");