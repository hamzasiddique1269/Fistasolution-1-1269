"use client"
import { useState } from "react";

const data = [
  { week: "Week 1", tickets: 320, csat: 82 },
  { week: "Week 2", tickets: 350, csat: 85 },
  { week: "Week 3", tickets: 400, csat: 83 },
  { week: "Week 4", tickets: 450, csat: 86 },
  { week: "Week 5", tickets: 370, csat: 87 },
  { week: "Week 6", tickets: 320, csat: 81 },
  { week: "Week 7", tickets: 340, csat: 84 },
  { week: "Week 8", tickets: 410, csat: 88 },
  { week: "Week 9", tickets: 360, csat: 86 },
  { week: "Week 10", tickets: 500, csat: 89 },
  { week: "Week 11", tickets: 470, csat: 90 },
  { week: "Week 12", tickets: 460, csat: 91 },
];

const maxTickets = 600;
const minCSAT = 60;
const maxCSAT = 100;

export default function Dov2() {
  const [hovered, setHovered] = useState(null);
  const [mouseX, setMouseX] = useState(0);

  // Graph sizing
  const graphWidth = 600;
  const graphHeight = 260;
  const barWidth = 28;
  const barGap = 22;
  const leftPad = 50;
  const bottomPad = 40;
  const topPad = 20;

  return (
    <section className="w-full bg-white py-8 px-2 md:px-8 flex flex-col md:flex-row md:gap-12 gap-8 items-stretch">
      {/* Left: Graph and Table */}
      <div className="flex-[2_2_0%] min-w-0 w-full md:w-2/3 flex flex-col justify-start">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-4xl  text-gray-900 font-serif   text-left mb-4 leading-tight">Instant ROI on the metrics that matter</h1>
          <div className="text-left mb-6 text-lg md:text-2xl text-gray-600 font-medium">Turn your support operation into a growth driver and scale revenue without scaling headcount.</div>
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xl md:text-2xl font-serif font-bold">
            <span className="text-gray-900 ">February</span>
            <span className="text-gray-400 font-normal">2026</span>
            <span className="inline-flex items-center ml-4 mr-2">
              <span className="w-3 h-3 rounded bg-indigo-400 inline-block mr-2"></span>
              <span className="text-base text-gray-700 font-normal">Tickets resolved</span>
            </span>
            <span className="inline-flex items-center">
              <span className="w-3 h-3 rounded-full bg-orange-500 inline-block mr-2"></span>
              <span className="text-base text-gray-700 font-normal">Average CSAT</span>
            </span>
          </div>
          <div className="relative w-full overflow-x-auto flex justify-center">
            <svg
              viewBox={`0 0 ${graphWidth} ${graphHeight}`}
              className="w-full max-w-xl h-64"
              style={{ minWidth: 400 }}
            >
              {/* Y axis grid lines */}
              {[0, 150, 300, 450, 600].map((y) => (
                <line
                  key={y}
                  x1={leftPad}
                  x2={graphWidth - 10}
                  y1={graphHeight - bottomPad - ((y / maxTickets) * (graphHeight - topPad - bottomPad))}
                  y2={graphHeight - bottomPad - ((y / maxTickets) * (graphHeight - topPad - bottomPad))}
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                />
              ))}
              {/* Bars */}
              {data.map((d, i) => {
                const x = leftPad + i * (barWidth + barGap);
                const y = graphHeight - bottomPad - (d.tickets / maxTickets) * (graphHeight - topPad - bottomPad);
                return (
                  <g key={i}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={graphHeight - bottomPad - y}
                      rx={6}
                      fill="#6366f1"
                      opacity={hovered === i ? 1 : 0.7}
                      onMouseEnter={e => { setHovered(i); setMouseX(e.nativeEvent.offsetX); }}
                      onMouseMove={e => setMouseX(e.nativeEvent.offsetX)}
                      onMouseLeave={() => setHovered(null)}
                    />
                    {/* Tooltip */}
                    {hovered === i && (
                      <foreignObject
                        x={Math.max(x - 30 + (mouseX - x) * 0.2, 10)}
                        y={y - 60}
                        width={110}
                        height={60}
                      >
                        <div className="bg-white rounded-xl shadow-lg px-4 py-2 text-xs text-gray-900 font-semibold flex flex-col items-center animate-fadeIn border border-gray-100">
                          <span>{d.week}</span>
                          <span className="text-indigo-600">Tickets: {d.tickets}</span>
                          <span className="text-orange-500">CSAT: {d.csat}%</span>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                );
              })}
              {/* Line for CSAT */}
              <polyline
                fill="none"
                stroke="#fb923c"
                strokeWidth={2}
                points={data
                  .map(
                    (d, i) =>
                      `${leftPad + i * (barWidth + barGap) + barWidth / 2},${graphHeight - bottomPad - ((d.csat - minCSAT) / (maxCSAT - minCSAT)) * (graphHeight - topPad - bottomPad)}`
                  )
                  .join(" ")}
              />
              {/* Dots for CSAT */}
              {data.map((d, i) => {
                const cx = leftPad + i * (barWidth + barGap) + barWidth / 2;
                const cy = graphHeight - bottomPad - ((d.csat - minCSAT) / (maxCSAT - minCSAT)) * (graphHeight - topPad - bottomPad);
                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={5}
                    fill="#fb923c"
                    stroke="#fff"
                    strokeWidth={1.5}
                  />
                );
              })}
              {/* X axis labels */}
              {data.map((d, i) => (
                <text
                  key={i}
                  x={leftPad + i * (barWidth + barGap) + barWidth / 2}
                  y={graphHeight - bottomPad + 18}
                  textAnchor="middle"
                  className="fill-gray-600 text-xs md:text-sm"
                >
                  {d.week}
                </text>
              ))}
              {/* Y axis labels (left) */}
              {[0, 150, 300, 450, 600].map((y) => (
                <text
                  key={y}
                  x={leftPad - 10}
                  y={graphHeight - bottomPad - ((y / maxTickets) * (graphHeight - topPad - bottomPad)) + 4}
                  textAnchor="end"
                  className="fill-gray-400 text-xs md:text-sm"
                >
                  {y}
                </text>
              ))}
              {/* Y axis labels (right, CSAT) */}
              {[60, 70, 80, 90, 100].map((csat) => (
                <text
                  key={csat}
                  x={graphWidth - 5}
                  y={graphHeight - bottomPad - ((csat - minCSAT) / (maxCSAT - minCSAT)) * (graphHeight - topPad - bottomPad) + 4}
                  textAnchor="start"
                  className="fill-gray-400 text-xs md:text-sm"
                >
                  {csat}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>
      {/* Right: Testimonial or Content */}
      <div className="flex-[1_1_0%] min-w-0 w-full md:w-1/3 bg-gray-50 rounded-xl shadow-sm p-6 md:p-10 flex flex-col justify-center items-start mt-8 md:mt-0 md:ml-8">
        <blockquote className="text-lg md:text-xl text-gray-700 mb-6">
          "Working with Decagon has been nothing short of phenomenal. The team has taken our extremely complicated data and created a tool that allows our customers to seamlessly receive help across our business."
        </blockquote>
        <div className="mt-4">
          <div className="font-bold text-xl text-gray-900">Thatcher Foster</div>
          <div className="text-gray-500 text-base">VP Client Solutions at Bilt</div>
        </div>
      </div>
    </section>
  );
}
