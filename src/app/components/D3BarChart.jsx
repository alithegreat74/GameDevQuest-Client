"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const SimpleBarChart = ({ data, width = 700, height = 300 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();
    if (!data || data.length === 0) return;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#0000")
      .style("border-radius", "8px")
      .style("overflow", "visible");

    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => `Quest ${i + 1}`))
      .range([0, width])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${height})`)
      .style("color", "#888");

    svg.append("g").call(yAxis).style("color", "#888");

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => xScale(`Quest ${i + 1}`))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", "#b451ff")
      .on("mouseover", function (event, d) {
        d3.select(this).transition().duration(200).attr("fill", "#b451cc");
      })
      .on("mouseout", function (event, d) {
        d3.select(this).transition().duration(200).attr("fill", "#b451ff");
      });
  }, [data, width, height]);

  return (
    <div className="chart-container">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default SimpleBarChart;
