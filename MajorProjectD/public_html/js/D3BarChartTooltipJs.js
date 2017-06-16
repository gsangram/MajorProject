$(document).ready(function(){
    console.log('this is bar chart');
var margin= {
    top:20,
    bottom:25,
    left:30,
    right:10
};

var barGraph=[
    { "x":05 , "y":10},
    { "x":15 , "y":20},
    { "x":25 , "y":35},
    { "x":35 , "y":17},
    { "x":45 , "y":08},
    { "x":55 , "y":08}       
];

width=400-margin.left-margin.right;
height=250-margin.top-margin.bottom;

xRange=d3.scale.ordinal().rangeRoundBands([0,width], 0.7) ;
                       
yRange=d3.scale.linear().range([height,0]);
                        
var xAxis=d3.svg.axis()
        .scale(xRange)
        .ticks(6)
        .orient('bottom');

var yAxis=d3.svg.axis()
        .scale(yRange)
        .ticks(8)
        .orient('left');





var svg=d3.select('body')
        .append('svg')
        .attr('width' , width+margin.left+margin.right)
        .attr('height' , height+margin.top+margin.bottom)
        .style('background-color','lightcyan')
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var div=d3.select('body')
          .append('div')
          .attr('class','tooltip')
          .style("opacity", 0);  
          
xRange.domain(barGraph.map( function(d){return d.x ;}));
yRange.domain([0,d3.max(barGraph,function(d){ return d.y ;})]);

svg.append('g')
        .attr('class','x axis')
        .attr('transform','translate(0,'+height+')')
        .call(xAxis);

svg.append('g')
        .attr('class','y axis')
        .attr('transform','translate('+0+',0)')
        .call(yAxis);

svg.selectAll('rect')
        .data(barGraph)
        .enter()
        .append('rect')
        .attr('x' , function(d){ return xRange(d.x) ;})
        .attr('y' ,function(d){ return yRange(d.y) ;})
        // sets the width of bar
        .attr('width', xRange.rangeBand()) 
        // sets the height of bar
        .attr('height' , function(d){ return height  - yRange(d.y) ; })  
         // fills the bar with grey color
        .attr('fill' , 'grey')    
        .on('mouseover',function(d){ 
              div.transition()
                 .duration(200)
                 .style('opacity',0.9),
              div.html('X-value '+d.x +'</br> Y-value '+ d.y)
                 .style("left", (d3.event.pageX) + "px")		
                 .style("top", (d3.event.pageY) + "px");})       
        .on("mouseout", function(d) {		
              div.transition()		
                .duration(500)		
                .style("opacity", 0);
    });
});