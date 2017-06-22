$(document).ready(function(){
    
var margin={top:30, bottom:50, left:20, right:25 },
        width=600-margin.left-margin.right,
        height=600-margin.top-margin.bottom;

//assigning the color range 
var color = d3.scaleOrdinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


var arc=d3.arc()
        .outerRadius(radius-20)
        .innerRadius(0);

var pie=d3.arc()
        .sort(null)
        .value(function(d) { return d.percentile; });

//var path=d3.arc()
//        .outerRadius(radius-40)
//        .innerRadius(radius-40)

var svg=d3.select('body')
        .append('svg')
        .attr('width', width+margin.left+margin.right)
        .attr('height',height+margin.top+margin.bottom)
        .style('background-color','cyan')
        .append('g')
        .attr('width',width)
        .attr('height',height) ;     
})

