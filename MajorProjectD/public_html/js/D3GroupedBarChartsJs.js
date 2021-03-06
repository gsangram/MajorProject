
$(document).ready(function() {
dataset = [
    {label:"90-91", "non-oil imports":18000, "Total imports":24000},
    {label:"91-92", "non-oil imports":14000, "Total imports":19000},
    {label:"92-93", "non-oil imports":16000, "Total imports":22000},
    {label:"93-94", "non-oil imports":17000, "Total imports":23000}   
];


//auto selecting of width and height by netbeans-IDE
var margin = {top: (parseInt(d3.select('body').style('width'), 10)/10), 
    right: (parseInt(d3.select('body').style('width'), 10)/20), 
    bottom: (parseInt(d3.select('body').style('width'), 10)/5), 
    left: (parseInt(d3.select('body').style('width'), 10)/20)},
        
    width = parseInt(d3.select('body').style('width'), 10) - margin.left - margin.right,
    height =parseInt(d3.select('body').style('width'), 10)-margin.top-margin.bottom;

//    console.log('HEIGHT @@@@',height);
//    console.log('WIDTH ####',width);

//setting the range 
x0=d3.scale.ordinal()
        .rangeRoundBands([0,width],0.5);

x1=d3.scale.ordinal();

y=d3.scale.linear().range([height,0]);

//colouring the grouped bar chart canvas
var colorRange = d3.scale.category10();
var color = d3.scale.ordinal()
    .range(colorRange.range());

//create the svg canvas 
var svg=d3.select('body')
            .append('svg')
            .attr('width' , width + margin.left + margin.right)
            .attr('height' , height + margin.top + margin.bottom)
          .style('background-color' , 'cyan')
            .append('g')
            .attr('transform','translate('+margin.left+','+margin.right+')');
  
    
var options= d3.keys(dataset[0])
            .filter(function(key) { return key !=='label'});
//    console.log('options',options);
dataset.forEach(function(d) { 
    d.obs=options.map(function(name) {
//        console.log('name',name);
//        console.log('dname',+d[name]);
        return {name: name, value: +d[name]}; });
})
    
   
    //assigning the domain of the plot
    x0.domain(dataset.map(function(d) {   return d.label ;}));        
    x1.domain(options).rangeRoundBands([0, x0.rangeBand()]);
    y.domain([0,24000]);
    console.log('why x1',x0.rangeBand())   
    
    //scalling both axis
var xAxis=d3.svg.axis()
        .scale(x0)
        .orient('bottom');
        
var yAxis=d3.svg.axis()
        .scale(y)
        .orient('left');

//creating x-axis
svg.append('g')
        .attr('class','x axis')
        .attr('transform','translate(0,'+height+')')
        .call(xAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 5)
        .attr("dy", ".71em")
        .style("text-anchor", "end");


 //creating y-axis      
svg.append('g')
        .attr('class','y axis')
        .attr('transform','translate('+margin.left+',0)')
        .call(yAxis);

var div=d3.select('body')
          .append('div')
          .attr('class','tooltip')
          .style("opacity", 0);  

    //appending the bars to g
var bar=svg.selectAll('.bar')
        .data(dataset)
        .enter()
        .append('g')
        .attr('class','rect')
        .attr("transform", function(d) { return "translate(" +x0(d.label) + ",0)"; });
         
        
     //   
    bar.selectAll("rect")
    .data(function(d) {  return d.obs; }) 
//  console.log('object data',d.obs)                            
    .enter().append("rect")
    .attr("width", x1.rangeBand())
    .attr("x", function(d) { 
//        console.log('tidious',d.name);
                return x1(d.name); })
    .attr("y", function(d) { return y(d.value); })
    .attr("value", function(d){return d.name;})
    .attr("height", function(d) {  return height - y(d.value); })
    .style("fill", function(d) { return color(d.name); })

    .on('mouseover',function(d){ 
                div.transition()
                 .duration(200)
                 .style('opacity',0.9),
              div.html(d.name + '<br/>'+'Qty in Million : '+d.value)
                 .style("left", (d3.event.pageX) + "px")		
                 .style("top", (d3.event.pageY) + "px");})       
        .on("mouseout", function(d) {		
              div.transition()		
                .duration(500)		
                .style("opacity", 0);
                });


var legend = svg.selectAll(".legend")
       .data(options.slice())
       .enter().append("g")
       .attr("class", "legend")
       .attr("transform", function(d, i) {   return "translate(0," + i * 20 + ")";        
        });

   legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

   legend.append("text")
      .attr("x", width - 20)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });
} );