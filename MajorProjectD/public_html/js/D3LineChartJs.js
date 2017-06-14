$(document).ready(function() {
          console.log('this is chrome');
            
    //  input domain data  
      var lineData=[
          { x:0 , y:0 },
          { x:30 , y:50 }, 
          { x:70 , y:10 }, 
          { x:85 , y:85}, 
          { x:95 , y:100 } 
      ];     
      
     
    var charDim= d3.select('#svg01'),
                 width=500,
                 height=400,
                 margin = {top: 20,
                right: 20,
                bottom: 20,
                left: 50
            },         
    
    //specifying the range of the graph
     xRange=d3.scale.linear().range([margin.left,width-margin.right])
             .domain([d3.min(lineData,function(d){return d.x}) , d3.max(lineData,function(d){return d.x;})]) ,
                   
     yRange=d3.scale.linear().range([height-margin.top,margin.bottom])
             .domain([d3.min(lineData,function(d){return d.y}) , d3.max(lineData,function(d){ return d.y;})]) , 
                                     
                           
    //specifying the scale for the x-axis                       
    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
//      .orient("bottom")
      .tickSubdivide(true),
        
    //specifying the scale for the x-axis                          
    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient('left')
      .tickSubdivide(true); 
         
    // adding x-axis in the graph  
    charDim.append('svg:g')
            .attr('class','x axis')
            .attr('transform', 'translate(0,' + (height-margin.bottom) + ')')
            .call(xAxis);
    
     // adding y-axis in the graph
     charDim.append('svg:g')
            .attr('class','y axis')
            .attr('transform', 'translate(' + (margin.left) + ',0)')
            .call(yAxis);
    
    //calling the line()to draw the line graph
    var lineFunc=d3.svg.line()
            .x(function(d){ return xRange(d.x);})
            .y(function(d){ return yRange(d.y);})
            .interpolate('linear');
//    
//    //set the d attribute to line() function 
    charDim.append('svg:path')   
        .attr('d',lineFunc(lineData))
        .attr("stroke","blue")
        .attr('stroke-width',2)
        .attr('fill','none');
//       
  });

