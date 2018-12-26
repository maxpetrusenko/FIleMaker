var svgWidth = 600, svgHeight = 500;
var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .attr('class', 'svg-container');

var line = svg.append("line")
    .attr('x1', 100)
    .attr('x2', 500)
    .attr('y1', 50)
    .attr('y2', 50)
    .attr('stroke',"blue")
    .attr('stroke-width', 10)

    var circle = svg.append("circle")
             .attr("cx", 350)
              .attr("cy", 150)
              .attr("r", 20);