function start(){
         d3.select("body").transition()
              .style("background-color", "black");
            d3.select("body")
              .append("h1")
              .style("color","yellow")
              .text(  "I’m a colour");          
          }
            