// components/Charts/AdventureCircularProgress.jsx
'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const AdventureCircularProgress = ({
  progress = 0,       // Current progress (0-100)
  total = 100,        // Total value
  size = 120,         // Diameter of the SVG
  strokeWidth = 12,   // Width of the progress bar
  theme = 'default'   // Theme: 'default', 'fire', 'ice', 'nature', 'arcane'
}) => {
  const svgRef = useRef(null);

  // Theme colors
  const themes = {
    default: {
      progress: '#b451ff',
      background: '#e5e7eb',
      text: '#b451ff'
    }
  };

  const colors = themes[theme] || themes.default;

  useEffect(() => {
    if (progress === undefined) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progressPercentage = Math.min(progress / total, 1);
    const dashOffset = circumference * (1 - progressPercentage);

    const svg = d3.select(svgRef.current)
      .attr('width', size)
      .attr('height', size)
      .append('g')
      .attr('transform', `translate(${size / 2}, ${size / 2})`);

    svg.append('circle')
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('stroke', colors.background)
      .attr('stroke-width', strokeWidth)
      .attr('stroke-dasharray', circumference)
      .attr('stroke-dashoffset', 0);

    const progressArc = svg.append('circle')
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('stroke', colors.progress)
      .attr('stroke-width', strokeWidth)
      .attr('stroke-linecap', 'round')
      .attr('stroke-dasharray', circumference)
      .attr('stroke-dashoffset', circumference)
      .attr('transform', 'rotate(-90)');

    progressArc.transition()
      .duration(1500)
      .ease(d3.easeExpOut)
      .attr('stroke-dashoffset', dashOffset);

    const defs = svg.append('defs');
    const filter = defs.append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');

    filter.append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'coloredBlur');

    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode')
      .attr('in', 'coloredBlur');
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');

    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .style('font-size', size * 0.2)
      .style('font-weight', 'bold')
      .style('fill', colors.text)
      .text(`${Math.round(progressPercentage * 100)}%`);

  }, [progress, total, size, strokeWidth, colors]);

  return (
    <div className="circular-progress-container text-center">
      <svg ref={svgRef} className="mx-auto"></svg>
    </div>
  );
};

export default AdventureCircularProgress;