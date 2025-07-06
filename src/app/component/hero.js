"use client"
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-black">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-16 md:py-0">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8">
            Redefine customer<br />
            experience with AI<br />
            <span className="text-white">agents.</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl">
            Decagon is the conversational AI platform that transforms customer interactions with AI agents. Seamlessly build, manage, and scale AI agents with Agent Operating Procedures (AOPs).
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-full px-10 py-4 text-lg flex items-center justify-center transition-colors shadow-md">
              Get a demo <span className="ml-2">→</span>
            </a>
            <a href="#" className="flex items-center justify-center text-indigo-300 hover:text-indigo-400 font-medium text-lg px-4 py-4 rounded-full transition-colors">
              Watch video <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 w-full h-[400px] md:h-screen relative">
          <Image
            src="/assert/girl.webp"
            alt="Girl on phone"
            fill
            className="object-cover object-center md:rounded-none rounded-t-3xl md:rounded-l-none"
            priority
          />
        </div>
      </section>
      {/* Marquee Slider */}
      <div className="w-full bg-black py-6 overflow-hidden">
        <div className="relative">
          <div className="marquee flex items-center gap-8">
            {[1,2,3,4,5,1,2,3,4,5].map((num, idx) => (
              <div key={idx} className="flex-shrink-0 w-40 h-24 md:w-56 md:h-32 relative">
                <Image
                  src={`/assert/${num}.webp`}
                  alt={`Brand ${num}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            width: 200%;
            animation: marquee 10s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
}
