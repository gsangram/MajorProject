        $(document).ready(function() {
        d3.select("body").transition()
              .style("background-color", "cyan");
      
        var jsonRectArray=[ {"x_axis":20, "y_axis":15, "width":50, "height":30, "color":"green"},
                            {"x_axis":70, "y_axis":100, "width":50, "height":25, "color":"blue"},
                            {"x_axis":150, "y_axis":50, "width":30, "height":55, "color":"red"}];
        
        var x_max=0;
        var y_max=0;
        
        for(i=0;i<jsonRectArray.length;i++){
            var tempx;
            var tempy;           
            var tempx=jsonRectArray[i].x_axis + jsonRectArray[i].width;
            var tempy=jsonRectArray[i].y_axis + jsonRectArray[i].height;
                if(tempx>x_max){x_max=tempx;}
                if(tempy>y_max){y_max=tempy;}
            }      
            
        var svgContainer=d3.select("body").append("svg")
                           .attr("width",x_max)
                           .attr("height",y_max);
                   
        var Drect=svgContainer.selectAll("rect")
                .data(jsonRectArray)
                .enter()
                .append("rect");
        
        var RectAttribute= Drect
                .attr("x", function(d){ return d.x_axis ;})
                .attr("y", function(d){ return d.y_axis ;})
                .attr("width", function(d){ return d.width ;})
                .attr("height", function(d){ return d.height ;})
                .style("fill", function(d) { return d.color; });
    });