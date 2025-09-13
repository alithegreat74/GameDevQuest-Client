// components/Charts/AdventureSunburst.jsx
'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const AdventureSunburst = ({ data, width = 400, height = 400 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const radius = Math.min(width, height) / 2;
    
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create partition layout
    const partition = d3.partition()
      .size([2 * Math.PI, radius]);

    // Create arc generator
    const arc = d3.arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(d => d.y0)
      .outerRadius(d => d.y1)
      .padAngle(0.005)
      .padRadius(radius);

    // Convert flat data to hierarchy
    const root = d3.hierarchy(data)
      .sum(d => d.value || 0)
      .sort((a, b) => b.value - a.value);

    // Generate partition nodes
    partition(root);

    // Color scale - adventure-themed colors
    const colorScale = d3.scaleOrdinal()
      .domain(root.descendants().map(d => d.data.name))
      .range([
        '#4f46e5',
        '#10b981',
        '#f59e0b',
        '#ef4444',
        '#8b5cf6',
        '#06b6d4',
        '#d946ef',
        '#84cc16'
      ]);

    const paths = svg.selectAll('path')
      .data(root.descendants())
      .enter()
      .append('path')
      .attr('d', arc)
      .style('fill', d => colorScale(d.data.name))
      .style('opacity', 0.8)
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)

        tooltip.style('visibility', 'visible')
          .html(`
            <strong>${d.data.name}</strong><br/>
            ${d.value || 0} XP<br/>
            ${d.depth > 0 ? `Level: ${d.data.level || '1'}` : ''}
          `);
      })
      .on('mousemove', function(event) {
        tooltip
          .style('top', (event.pageY - 10) + 'px')
          .style('left', (event.pageX + 10) + 'px');
      })
      .on('mouseout', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .style('opacity', 0.8)
          .style('stroke-width', '1px');
        
        tooltip.style('visibility', 'hidden');
      })
      .on('click', (event, d) => {
        console.log('Clicked:', d.data);
      });

    const tooltip = d3.select('body')
      .append('div')
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.8)')
      .style('color', 'white')
      .style('padding', '8px 12px')
      .style('border-radius', '4px')
      .style('font-size', '12px')
      .style('visibility', 'hidden')
      .style('z-index', '1000')
      .style('pointer-events', 'none');

    return () => {
      tooltip.remove();
    };

  }, [data, width, height]);

  return (
    <div className="sunburst-container">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default AdventureSunburst;