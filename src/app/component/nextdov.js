import Image from 'next/image';

export default function NextDov() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center min-h-screen bg-[#171717] px-2 sm:px-4 md:px-6 py-6">
      {/* Card 1 */}
      <div className="group w-full md:w-1/2 max-w-xl h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px] flex items-stretch">
        <div
          className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg bg-cover bg-center transition-all duration-300 ease-out
            group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-3xl group-hover:shadow-black/70"
          style={{ backgroundImage: 'url(/assert/final.png)' }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 z-10" />
          <div className="relative z-20 flex flex-col justify-center h-full p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <Image src="/assert/logo.webp" alt="Duolingo Logo" width={40} height={40} className="drop-shadow-lg sm:w-[48px] sm:h-[48px] md:w-[60px] md:h-[60px]" />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">duolingo</span>
            </div>
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-4 group-hover:text-yellow-300 transition duration-300">
              Regain lost time and elevate customer experience
            </h2>
            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-yellow-300 transition duration-300">80%</span>
              <span className="block text-sm sm:text-base md:text-lg lg:text-2xl text-white mt-1 sm:mt-2">resolution rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group w-full md:w-1/2 max-w-xl h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px] flex items-stretch">
        <div
          className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg bg-cover bg-center transition-all duration-300 ease-out
            group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-3xl group-hover:shadow-black/70"
          style={{ backgroundImage: 'url(/assert/final2.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 z-10" />
          <div className="relative z-20 flex flex-col justify-center h-full p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <Image src="/assert/logo.webp" alt="Rippling Logo" width={40} height={40} className="drop-shadow-lg sm:w-[48px] sm:h-[48px] md:w-[60px] md:h-[60px]" />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">RIPPLING</span>
            </div>
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-4 group-hover:text-yellow-300 transition duration-300">
              Solve complex cases
            </h2>
            <div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-yellow-300 transition duration-300">10k</span>
              <span className="block text-sm sm:text-base md:text-lg lg:text-2xl text-white mt-1 sm:mt-2">businesses supported</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
