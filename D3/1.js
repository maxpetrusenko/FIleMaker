d3.select(); //first 3 elements
d3.selectAll(); //all elements

d3.select('h1').style('color','red')
.attr('class','heading')
.text('Updated h1 tag');

d3.select('body').append('p').text('First Paragrapf');
d3.select('body').append('p').text('First Paragrapf');
d3.select('body').append('p').text('First Paragrapf');

d3.selectAll('p').style('color','blue');