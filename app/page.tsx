'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/hopnhook4.png',
      alt: 'Hop n\' Hook gameplay - Fishing and platforming'
    },
    {
      image: '/images/hopnhook2.png',
      alt: 'Hop n\' Hook gameplay - Grappling hook mechanics'
    },
    {
      image: '/images/hopnhook5.png',
      alt: 'Hop n\' Hook gameplay - Exploration and fishing'
    },
    {
      image: '/images/hopnhook6.png',
      alt: 'Hop n\' Hook gameplay - Boss encounters'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // SVG pattern for background (earthy olive/green)
  const svgPattern = `url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="%23b0b88a"/><circle cx="10" cy="10" r="2" fill="%238a9a5b"/><circle cx="30" cy="30" r="2" fill="%238a9a5b"/><circle cx="20" cy="20" r="1.5" fill="%23d0d6b0"/></svg>')`;

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #b0b88a 60%, #8a9a5b 100%)', backgroundImage: svgPattern }}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-[#222] drop-shadow-lg" style={{textShadow: '2px 2px 0 #d0d6b0'}}>
            Hop n' Hook
          </h1>
          <p className="text-lg md:text-xl mb-8 tracking-wide text-[#2d3e1c]" style={{textShadow: '1px 1px 0 #d0d6b0'}}>
            A platforming-fishing adventure with Hoppe Jr.
          </p>
        </div>

        {/* Steam Trailer */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            className="relative overflow-hidden border-2 border-black shadow-xl bg-[#a3c6c6] rounded-2xl"
            style={{ aspectRatio: '16/9', maxWidth: '900px', margin: '0 auto' }}
          >
            <video
              src="/trailer/HopNHookTrailerV2.mp4"
              width="100%"
              height="100%"
              controls
              poster="/images/hopnhook4.png"
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              muted
              loop
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="max-w-2xl mx-auto text-[#222] text-base md:text-lg bg-[#e9e7d1] border-2 border-black rounded-xl shadow p-4" style={{textShadow: '1px 1px 0 #fff'}}>
            Hop n' Hook is a platforming-fishing game set across three distinct zones, built around movement, exploration, and collection. You play as Hoppe Jr., using a fishing rod that doubles as a grappling hook. Swing across gaps, scale cliffs, and cast into remote ponds to reel in over 50 unique fish. Some are simple. Others fight back—pulling you into short, reactive boss encounters that break the calm with bursts of tension.
          </p>
        </div>

        {/* Game Screenshots Carousel */}
        <div className="mt-20 mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl border-2 border-black shadow-xl bg-[#a3c6c6]">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full flex justify-center items-center bg-transparent">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full object-contain rounded-xl border-2 border-black"
                      style={{ maxHeight: '70vh', margin: '0 auto' }}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full border-2 border-black transition-all ${
                    currentSlide === index ? 'bg-[#4a6a2c]' : 'bg-[#e9e7d1]'
                  }`}
                />
              ))}
            </div>
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#e9e7d1] p-2 rounded-xl border-2 border-black shadow-md hover:bg-[#b0b88a]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2d3e1c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#e9e7d1] p-2 rounded-xl border-2 border-black shadow-md hover:bg-[#b0b88a]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2d3e1c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#a3c6c6] p-6 rounded-2xl shadow-xl border-2 border-black hover:shadow-2xl transition-all">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#2d3e1c] tracking-wide" style={{textShadow: '1px 1px 0 #e9e7d1'}}>Grappling Hook Movement</h3>
            <p className="text-[#4a6a2c] text-sm">Swing across gaps and scale cliffs with your fishing rod</p>
          </div>
          <div className="bg-[#a3c6c6] p-6 rounded-2xl shadow-xl border-2 border-black hover:shadow-2xl transition-all">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#2d3e1c] tracking-wide" style={{textShadow: '1px 1px 0 #e9e7d1'}}>50+ Unique Fish</h3>
            <p className="text-[#4a6a2c] text-sm">Catch over 50 unique fish across three distinct zones</p>
          </div>
          <div className="bg-[#a3c6c6] p-6 rounded-2xl shadow-xl border-2 border-black hover:shadow-2xl transition-all">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#2d3e1c] tracking-wide" style={{textShadow: '1px 1px 0 #e9e7d1'}}>Boss Encounters</h3>
            <p className="text-[#4a6a2c] text-sm">Face reactive boss encounters when some fish fight back</p>
          </div>
        </div>

        {/* Play Button at Bottom */}
        <div className="text-center">
          <a
            href="https://store.steampowered.com/app/3781950/Hop_n_Hook/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4a6a2c] text-[#e9e7d1] px-12 py-4 rounded-xl hover:bg-[#2d3e1c] transition-all border-2 border-black shadow-md hover:shadow-lg font-bold inline-flex items-center gap-3 text-xl"
            style={{ textShadow: '1px 1px 0 #222' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" className="w-6 h-6"><path d="M496 256c0 137-111 248-248 248S0 393 0 256 111 8 248 8s248 111 248 248zm-80.5 89.6c-8.7-4.1-19.6-.2-23.7 8.5-4.1 8.7-.2 19.6 8.5 23.7 8.7 4.1 19.6.2 23.7-8.5 4.1-8.7.2-19.6-8.5-23.7zm-47.1-37.2c-13.2-6.2-28.7-.3-34.9 12.9-6.2 13.2-.3 28.7 12.9 34.9 13.2 6.2 28.7.3 34.9-12.9 6.2-13.2.3-28.7-12.9-34.9zm-47.1-37.2c-17.7-8.3-38.5-.4-46.8 17.3-8.3 17.7-.4 38.5 17.3 46.8 17.7 8.3 38.5.4 46.8-17.3 8.3-17.7.4-38.5-17.3-46.8z"/></svg>
            Play on Steam - FREE
          </a>
        </div>
      </div>
    </div>
  );
} 