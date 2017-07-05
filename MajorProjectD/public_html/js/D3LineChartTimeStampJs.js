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
    date: "01-jan-2016",
    performance: "30"
}, {
    date: "02-may-2016",
    performance: "80"
}, {
    date: "03-jul-2016",
    performance: "60"
}, {
    date: "04-oct-2016",
    performance: "55"
}, {
    date: "05-dec-2016",
    performance: "70"
}];

var width=500-margin.left-margin.right;
var height=400-margin.top-margin.bottom;  

var parseDate=d3.timeParse("%d-%b-%Y");
//console.log('kaki',parseDate);

//defining the range
var xRange=d3.scaleTime().range([0,width]).nice();
var yRange=d3.scaleLinear().range([height,0]);

//setting the range of x and y axis
var xAxis = d3.axisBottom(xRange) .ticks(05);
        

var yAxis = d3.axisLeft(yRange)
        .ticks(10);
    
    //defining the line
    var valueline=d3.line()
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
  
   //formatting the data
    data.forEach(function(d) {
        console.log('parse',d);
          d.date = parseDate(d.date);
          d.performance = +d.performance;
          });

    // Scale the range of the data
    xRange.domain(d3.extent(data, function (d) {console.log('domain',d); return d.date; }));  
    yRange.domain([0, d3.max(data, function (d) {  return d.performance; })]);
  
    // Add the valueline path.
    svg.append("path") 
        .attr("d", valueline(data))
        .attr("fill",'none')
        .attr('stroke-width',3)
        .attr('stroke','blue');
 
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
   
