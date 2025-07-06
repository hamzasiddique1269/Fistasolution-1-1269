import Image from 'next/image';

export default function LastDiv() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch w-full px-4 md:px-12 py-10">
      {/* Card 1 */}
      <div className="flex-1 bg-[#18191b] rounded-3xl overflow-hidden shadow-md flex flex-col items-stretch">
        <div className="group relative w-full flex justify-center items-center transition-colors duration-300 p-8 md:p-12 bg-[#232428] hover:bg-blue-600 rounded-t-3xl">
          <Image src="/assert/one.webp" alt="Bilt Logo" width={120} height={120} className="w-28 h-28 object-contain" />
        </div>
        <div className="px-8 py-8 md:px-10 md:py-10 flex flex-col items-start gap-3">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Bilt</h3>
          <p className="text-base md:text-lg text-gray-300">Bilt uses Decagon to automate tickets and free up the team by integrating deeply with internal systems.</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex-1 bg-[#18191b] rounded-3xl overflow-hidden shadow-md flex flex-col items-stretch">
        <div className="group relative w-full flex justify-center items-center transition-colors duration-300 p-8 md:p-12 bg-[#232428] hover:bg-orange-500 rounded-t-3xl">
          <Image src="/assert/two.webp" alt="ClassPass Logo" width={120} height={120} className="w-28 h-28 object-contain" />
        </div>
        <div className="px-8 py-8 md:px-10 md:py-10 flex flex-col items-start gap-3">
          <h3 className="text-2xl md:text-3xl font-bold text-white">ClassPass</h3>
          <p className="text-base md:text-lg text-gray-300">ClassPass increased deflection rate by 10x and scaled customer chat to 24/7 with Decagon's AI agents.</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="flex-1 bg-[#18191b] rounded-3xl overflow-hidden shadow-md flex flex-col items-stretch">
        <div className="group relative w-full flex justify-center items-center transition-colors duration-300 p-8 md:p-12 bg-[#232428] hover:bg-blue-600 rounded-t-3xl">
          <Image src="/assert/three.webp" alt="Substack Logo" width={120} height={120} className="w-28 h-28 object-contain" />
        </div>
        <div className="px-8 py-8 md:px-10 md:py-10 flex flex-col items-start gap-3">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Substack</h3>
          <p className="text-base md:text-lg text-gray-300">Substack achieved great efficiency while engaging their readers and writers by handling actions and complex workflows.</p>
        </div>
      </div>
    </div>
  );
}
