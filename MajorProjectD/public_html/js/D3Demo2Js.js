$(document).ready(function(){
var theData = [ 1,2,3 ];
var p = d3.select("body").selectAll("h1")
  .data(theData)
  .enter()
  .append("h1")
  .text("hello ");
});

