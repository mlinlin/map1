window.addEventListener("load", mainfunction);

function mainfunction(){
const svg = d3.select("svg");

const path = d3.geoPath();

d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json").then(function(us) {
  svg.append("g")
      .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.counties).features)
    .enter().append("path")
      .attr("d", path);

  svg.append("path")
      .attr("class", "county-borders")
      .attr("d", path(topojson.mesh(us, us.objects.counties, function(a, b) { return a !== b; })));
});
}
