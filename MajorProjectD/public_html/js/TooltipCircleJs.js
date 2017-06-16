$(document).ready(function(){
    console.log('this is line chart');
    
    //setting the dimensions of margin
var margin = {
    top: 20,
    right: 25,
    bottom: 20,
    left: 30
};


// Get the data
var data = [{
    date: "01-jan",
    performance: "30"
}, {
    date: "02-feb",
    performance: "80"
}, {
    date: "03-mar",
    performance: "60"
}, {
    date: "04-apr",
    performance: "55"
}, {
    date: "05-may",
    performance: "70"
}];

var width=500-margin.left-margin.right;
var height=400-margin.top-margin.bottom;  

var parseDate=d3.time.format("%d-%b").parse;
var formatTime = d3.time.format("%e %B");


//defining the range
var xRange=d3.time.scale().range([0,width]);
var yRange=d3.scale.linear().range([height,0]);

//setting the range of x and y axis
var xAxis = d3.svg.axis().scale(xRange)
    .orient("bottom").ticks(5);

var yAxis = d3.svg.axis().scale(yRange)
    .orient("left").ticks(20);
    
    //defining the line
var valueline=d3.svg.line()
    .x(function(d){ return xRange(d.date);})
    .y(function(d){ return yRange(d.performance);});        
    
    //creating svg
var svg=d3.select('body')
        .style('background-color','lightcyan')
        .append("svg")
        .attr('width',width+margin.left+margin.right)
        .attr('height',height+margin.top+margin.bottom)
        .append('g')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Define the div for the tooltip
var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);  
  
    //formatting the data
    data.forEach(function (d) {
          d.date = parseDate(d.date);
          d.performance = +d.performance;
          });

    // Scale the range of the data
    xRange.domain(d3.extent(data, function (d) {return d.date; }));  
    yRange.domain([0, d3.max(data, function (d) {  return d.performance; })]);
  
    // Add the valueline path.
    svg.append("path") 
        .attr("d", valueline(data))
        .attr("fill",'none')
        .attr('stroke-width',3)
        .attr('stroke','blue');

    svg.selectAll('dot')
        .data(data)
        .enter().append('circle')
        .attr("r", 5)
        .attr("cx",function(d){return xRange(d.date) ;})
        .attr("cy",function(d){return yRange(d.performance) ;})
        .on("mouseover", function(d) {	
            div.transition()
                .duration(100)
                .style('opacity',0.9);
            div.html( formatTime(d.date) + "<br/>"  + d.performance)	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");          
        })   
        .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	      
        });
 
   // Add the X Axis
    svg.append("g") 
        .attr("class", "x axis")
        .attr('transform', 'translate(0,' + (height) + ')')
        .call(xAxis);

    // Add the Y Axis
    svg.append("g") 
       .attr("class", "y axis")
       .attr('transform', 'translate(' + (0) + ',0)')
       .call(yAxis);
    
    });