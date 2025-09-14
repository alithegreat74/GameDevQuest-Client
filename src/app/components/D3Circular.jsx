"use client";

import { useEffect, useRef, useMemo } from "react";
import * as d3 from "d3";

const AdventureCircularProgress = ({
  progress = 0,
  total = 100,
  size = 120,
  strokeWidth = 12,
  theme = "default",
}) => {
  const svgRef = useRef(null);

  const themes = {
    default: {
      progress: "#b451ff",
      background: "#e5e7eb",
      text: "#b451ff",
    },
  };

  const colors = useMemo(() => themes[theme] || themes.default, [theme]);

  useEffect(() => {
    if (progress === undefined) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const radius = (size - strokeWidth) / 2;
    if (!Number.isFinite(radius) || radius <= 0) return;
    const circumference = 2 * Math.PI * radius;
    const safeTotal = total > 0 ? total : 1;
    const progressRatio = Math.max(0, Math.min(progress / safeTotal, 1));
    const dashOffset = circumference * (1 - progressRatio);
    const svg = d3
      .select(svgRef.current)
      .attr("width", size)
      .attr("height", size)
      .append("g")
      .attr("transform", `translate(${size / 2}, ${size / 2})`);

    svg
      .append("circle")
      .attr("r", radius)
      .attr("fill", "none")
      .attr("stroke", colors.background)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-dasharray", circumference)
      .attr("stroke-dashoffset", 0);

    const progressArc = svg
      .append("circle")
      .attr("r", radius)
      .attr("fill", "none")
      .attr("stroke", colors.progress)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-linecap", "round")
      .attr("stroke-dasharray", circumference)
      .attr("stroke-dashoffset", circumference)
      .attr("transform", "rotate(-90)");

    progressArc
      .transition()
      .duration(1500)
      .ease(d3.easeExpOut)
      .attr("stroke-dashoffset", dashOffset);

    const defs = svg.append("defs");
    const filter = defs
      .append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    filter
      .append("feGaussianBlur")
      .attr("stdDeviation", "3")
      .attr("result", "coloredBlur");

    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", size * 0.2)
      .style("font-weight", "bold")
      .style("fill", colors.text)
      .text(`${Math.round(progressRatio * 100)}%`);
  }, [progress, total, size, strokeWidth, colors]);

  return (
    <div className="circular-progress-container text-center">
      <svg ref={svgRef} className="mx-auto"></svg>
    </div>
  );
};

export default AdventureCircularProgress;
