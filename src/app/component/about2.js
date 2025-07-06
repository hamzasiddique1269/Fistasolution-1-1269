export default function About2() {
  return (
    <section className="w-full bg-gray-200 py-16 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-6">
        <span className="text-gray-500 text-xl font-medium">About</span>
      </div>
      <h2 className="text-3xl md:text-6xl font-serif font-normal text-black text-center leading-tight mb-12">
        Your customer experience solution for<br className="hidden md:block" />
        the AI era. Faster. Cheaper. Smarter.
      </h2>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* Always online */}
        <div className="flex items-center gap-3 bg-green-50 px-8 py-4 rounded-full text-lg font-medium text-gray-800 shadow-sm">
          <span className="inline-block w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/><circle cx="12" cy="12" r="6" stroke="#22c55e" strokeWidth="2"/></svg>
          </span>
          Always online
        </div>
        {/* Fully generative */}
        <div className="flex items-center gap-3 bg-blue-50 px-8 py-4 rounded-full text-lg font-medium text-gray-800 shadow-sm">
          <span className="inline-block w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><rect x="4" y="7" width="16" height="10" rx="3" stroke="#3b82f6" strokeWidth="2"/><path d="M8 11h8M8 15h4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          Fully generative
        </div>
        {/* Constantly learning */}
        <div className="flex items-center gap-3 bg-orange-50 px-8 py-4 rounded-full text-lg font-medium text-gray-800 shadow-sm">
          <span className="inline-block w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M4 16c1.333-2 2.667-6 4-6s2.667 4 4 4 2.667-6 4-6 2.667 4 4 4" stroke="#fb923c" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          Constantly learning
        </div>
      </div>
    </section>
  );
}
