

d3.csv('https://ed-public-download.app.cloud.gov/downloads/Most-Recent-Cohorts-Scorecard-Elements.csv', function(data){
    //console.log(data);
    
    d3.select('svg')
        .selectAll('g')
            .data(data)
            .enter()
            .append('g')
                .attr('class', 'UNITID')
                .attr('transform', function(d) {
                    return 'translate(' + d.converted_x + ',' + 10 * d.converted_y + ')';
                })
                
});