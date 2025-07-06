"use client"
import Image from "next/image";
import { useState } from "react";

export default function Div1() {
  // Track which segment is hovered: 0 (blue), 1 (off-white), 2 (gray), null (none)
  const [hoveredSegment, setHoveredSegment] = useState(null);

  // Chart segment values
  const segments = [35, 25, 40]; // Blue, Off-white, Gray
  const colors = ["#4f46e5", "#f3f4f6", "#d1d5db"];
  const textColors = ["text-white", "text-black", "text-black"];
  const labels = ["Active: 35%", "Segment1: 25%", "Segment2: 40%"];

  // Chart constants
  const radius = 60;
  const stroke = 18;
  const circumference = Math.PI * radius;
  const arcLengths = segments.map((v) => (v / 100) * circumference);
  const arcOffsets = [0, arcLengths[0], arcLengths[0] + arcLengths[1]];

  // Label positions (percentages along the arc, but below the arc)
  const labelAngles = [45, 90, 135]; // degrees for each segment's center
  const getLabelPosition = (angleDeg) => {
    const angleRad = (Math.PI * angleDeg) / 180;
    const r = radius + stroke / 2 - 10; // slightly inside the arc
    const x = 70 + r * Math.cos(Math.PI + angleRad);
    const y = 70 + r * Math.sin(Math.PI + angleRad) + 40; // move label below arc
    return { left: `${x}px`, top: `${y}px` };
  };

  return (
    <section className="w-full bg-gray-50 py-12 px-2 md:px-8 flex flex-col gap-12 items-stretch">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-stretch">
        {/* Left Side */}
        <div className="md:w-1/2 w-full flex flex-col justify-start bg-white rounded-xl shadow-sm p-6 md:p-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">Auto-resolve issues</h2>
          <p className="text-lg text-gray-700 mb-8">Personalized conversations with your customers over chat, email, or calls. Resolve complex issues by taking action.</p>
          <div className="flex flex-col gap-4 mb-6">
            <div className="bg-indigo-100 text-indigo-700 px-6 py-4 rounded-2xl text-lg font-medium max-w-xl shadow">
              Hi, I was expecting 5x points on my card for my last transaction, but only got 3x.
            </div>
            <div className="bg-white text-gray-800 px-6 py-4 rounded-2xl text-lg shadow max-w-xl">
              Hey Rachel, thanks for reaching out! I see that your last transaction was a dining purchase, which qualifies for 5x points, but only for Platinum Status Tier members.
            </div>
            <div className="bg-white text-gray-800 px-6 py-4 rounded-2xl text-lg shadow max-w-xl">
              You are currently in the Gold Status Tier, which means you earn 3x points on dining transactions.
            </div>
          </div>
          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full text-lg w-max mt-2 shadow transition-colors">
            <span className="inline-block">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M12 2l3 3M12 2l-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="18" r="1.5" fill="#fff"/></svg>
            </span>
            Adjust tone
          </button>
          {/* Chat input bubble */}
          <div className="flex items-center mt-8">
            <div className="flex items-center w-full bg-white rounded-full shadow-lg px-6 py-4 gap-4">
              <span className="text-indigo-600 text-lg font-medium whitespace-nowrap">Ok, how do I get to the next tier?</span>
              <button className="ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="none" />
                  <path d="M8 12h8m-4-4 4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-start bg-white rounded-xl shadow-sm p-6 md:p-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4 text-center md:text-left">Seamless integrations & workflows</h2>
          <p className="text-lg text-gray-700 mb-8 text-center md:text-left">Zero-lift integrations with your existing knowledge, tools, data sources, and workflows. Build your AI without needing old-fashioned decision trees and canned responses.</p>
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="relative w-full max-w-lg h-64 md:h-80 mx-auto">
              <Image
                src="/assert/right2.webp"
                alt="Integrations"
                fill
                className="object-contain rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 32rem"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-stretch">
        {/* Left: Agent assistance */}
        <div className="md:w-1/2 w-full flex flex-col justify-start bg-white rounded-xl shadow-sm p-6 md:p-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">Agent assistance</h2>
          <p className="text-lg text-gray-700 mb-8">Supercharge your team with an AI copilot that will do the heavy lifting on mundane tasks and continuously learn from agents.</p>
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="relative w-full max-w-lg h-64 md:h-80 mx-auto">
              <Image
                src="/assert/left3.webp"
                alt="Agent assistance"
                fill
                className="object-contain rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 32rem"
                priority
              />
            </div>
          </div>
        </div>
        {/* Right: AI-powered insights */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-start bg-white rounded-xl shadow-sm p-6 md:p-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4 text-center md:text-left">AI-powered insights</h2>
          <p className="text-lg text-gray-700 mb-8 text-center md:text-left">Identify themes, find anomalies, and unlock valuable insights across all your conversations.</p>
          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between w-full mb-8 gap-4">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg font-medium text-gray-700">Subscriptions</span>
              <span className="text-sm text-gray-400">category</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-900">16%</span>
              <span className="flex items-center text-red-500 text-lg font-medium"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/></svg>3%</span>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <span className="text-lg font-medium text-gray-700">12,540 tickets</span>
              <span className="text-sm text-gray-400">monthly</span>
            </div>
          </div>
          {/* Interactive Multi-segment Chart */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="relative w-56 h-60 md:w-72 md:h-72">
              <svg width="100%" height="100%" viewBox="0 0 140 140">
                {/* Blue Segment */}
                <path
                  d="M20,90 A50,50 0 0,1 120,90"
                  fill="none"
                  stroke={colors[0]}
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${arcLengths[0]},${circumference - arcLengths[0]}`}
                  strokeDashoffset="0"
                  style={{ transition: 'stroke-dasharray 0.6s cubic-bezier(.4,2,.6,1)', cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredSegment(0)}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
                {/* Off-white Segment */}
                <path
                  d="M20,90 A50,50 0 0,1 120,90"
                  fill="none"
                  stroke={colors[1]}
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${arcLengths[1]},${circumference - arcLengths[1]}`}
                  strokeDashoffset={`-${arcOffsets[1]}`}
                  style={{ transition: 'stroke-dasharray 0.6s cubic-bezier(.4,2,.6,1)', cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredSegment(1)}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
                {/* Gray Segment */}
                <path
                  d="M20,90 A50,50 0 0,1 120,90"
                  fill="none"
                  stroke={colors[2]}
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${arcLengths[2]},${circumference - arcLengths[2]}`}
                  strokeDashoffset={`-${arcOffsets[2]}`}
                  style={{ transition: 'stroke-dasharray 0.6s cubic-bezier(.4,2,.6,1)', cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredSegment(2)}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
              </svg>
              {/* Only show label for hovered segment, just below the arc */}
              {hoveredSegment !== null && (
                <span
                  className="absolute z-10 px-4 py-2 rounded-xl shadow bg-white text-black text-base md:text-lg font-semibold"
                  style={{
                    ...getLabelPosition(labelAngles[hoveredSegment]),
                    whiteSpace: 'nowrap',
                    transform: 'translate(-50%, 0%)',
                  }}
                >
                  {labels[hoveredSegment]}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
