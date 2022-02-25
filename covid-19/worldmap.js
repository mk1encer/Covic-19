let width = window.innerWidth,
  height = window.innerHeight * 0.85,
  centered,
  clicked_point;

let svg = d3
  .select("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "map");

const projection = d3.geoMercator().translate([width / 2.2, height / 1.5]);

const path = d3.geoPath().projection(projection);
const g = svg.append("g");

queue()
  .defer(
    d3.json,
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
  )
  .await(ready);

function ready(error, data) {
  const features = topojson.feature(data, data.objects.countries).features;
  const patient = {
    Germany: 4536.71,
    Israel: 4181.9,
    Russia: 1124.63,
    "United Kingdom": 976.94,
    "South Korea": 965.95,
    Brazil: 829.38,
    Japan: 801.93,
    "United States of America": 596.96,
    Canada: 237.02,
    India: 51.22,
    "South Africa": 13.72,
  };

  svg
    .selectAll("path")
    .data(features)
    .enter()
    .append("path")
    .attr("class", "country")
    .attr("d", path)
    .attr("fill", "black")
    .append("title") // Add a tooltop
    .text((d) => `${d.properties.name} : ${patient[d.properties.name + ""]}`);
}
