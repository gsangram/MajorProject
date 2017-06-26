$(document).ready( function() {
        var data = [
                    {  "1485525971074":{"bid":-1.09111,"ask":1.07186,"benchmarkMark":1.071409999999},
                       "1485525971121":{"bid":-1.07099,"ask":-1.07185,"benchmarkMark":3.07140999999},
                       "1485525971170":{"bid":0,"ask":1.07185,"benchmarkMark":1.071409999999999},
                       "1485525971226":{"bid":1.5,"ask":1.07184,"benchmarkMark":1.0713985752},
                       "1485525971269":{"bid":-7.07097,"ask":2.07183,"benchmarkMark":1}  } ];
        
    var keys=d3.keys(data[0]);
//     console.log('keys',keys);
    var newArr =[];
    for(var i=0; i<keys.length; i++){
               
        newArr.push({
            month:keys[i],
            A:data[0][keys[i]].bid,
            B:data[0][keys[i]].ask,
            C:data[0][keys[i]].benchmarkMark
        })
    };
    
    var dom=d3.values(data[0]);  
//     console.log('dom',dom);
     
    
    var xData = ["A", "B", "C"];

// Setting up the margins
 var margin = {top: 20, right: 50, bottom: 30, left: 40},
            width = 800 - margin.left - margin.right,
            height = 700 - margin.top - margin.bottom;

    // setting the range for both axis 
    var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], 0.7);

    var y = d3.scale.linear()
            .rangeRound([height, 0]);

    //assigning the colour range to the bars 
    var color = d3.scale.category20();

   //creating svg canvas and appending the g
    var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 
    var dataIntermediate = xData.map(function (c) {
        return newArr.map(function (d) {
            return { x: d.month, y: d[c]};
            }); });        
                   
//calling stack() function on our data 
    var dataStackLayout = d3.layout.stack()(dataIntermediate);

     var dataIntermediate = xData.map(function (c) {
        return newArr.map(function (d) {
            return { x: d.month, y: d[c]};
            }); });        
                   
//calling stack() function on our data 
    var dataStackLayout = d3.layout.stack()(dataIntermediate);
   

// assigning the domains
    x.domain(dataStackLayout[0].map(function (d) {
//         console.log('dataStackLayout',dataStackLayout);
              return d.x ; }));
    
    var maxi=d3.max(dataStackLayout[dataStackLayout.length - 1],function (d) { return  d.y0 + d.y;});
     
    var mini=d3.max(dataStackLayout[dataStackLayout.length - 1],function (d) {
    if(d.y0<0 && d.y<0){
        return d.y0 + d.y;
    }     
    else if(d.y0<0 && d.y>0){
         return  d.y0 ; 
     }
    else if(d.y0>0 && d.y<0){
         return  d.y ;    
     }      
    else{
         return 0 ;
    }     
    });
   y.domain([mini,maxi]).nice();
   
   
 //  scaling the both axis 
    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

    var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

    // filling the stack with colors 
    var layer = svg.selectAll(".stack")
            .data(dataStackLayout)
            .enter().append("g")
            .attr("class", "stack")
            .style("fill", function (d, i) {
                return color(i);
            });
            
    layer.selectAll("rect")
            .data(function (d) {
                return d;  })
            .enter().append("rect")
            .attr("x", function (d) {
                return x(d.x);  })     
            .attr("y", function (d) {
                return y(d.y + d.y0); })     
            .attr("height", function (d) {
                return y(d.y0) - y(d.y + d.y0);  })
            .attr("width", x.rangeBand());

    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
    
    svg.append('g')
           .attr('class','y axis')
           .attr('transform','translate('+0+',0)')
           .call(yAxis);
})