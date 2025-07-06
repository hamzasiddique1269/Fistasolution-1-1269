export default function VideoSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-12 py-10">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-semibold text-white text-center mb-8 leading-tight">
        The future of customer<br className="hidden md:block" /> experience starts here.
      </h2>
      <div className="w-full max-w-xl bg-[#18191b] rounded-3xl shadow-md flex flex-col items-center p-0 md:p-0 overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="w-full aspect-video object-cover rounded-3xl"
        >
          <source src="/assert/Crystel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
