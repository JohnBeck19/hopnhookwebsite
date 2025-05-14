export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Welcome to HopNHook
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your ultimate fishing companion
          </p>
          <div className="space-y-4">
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all">
              Get Started
            </button>
            <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all ml-4">
              Learn More
            </button>
          </div>
        </div>

        {/* Game Screenshots Carousel */}
        <div className="mt-20 mb-20">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Game Screenshots</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <div className="flex transition-transform duration-500 ease-in-out">
                <div className="min-w-full">
                  <img
                    src="https://images.unsplash.com/photo-1512034400317-de97d7d81454"
                    alt="Fishing scene 1"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="min-w-full">
                  <img
                    src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0"
                    alt="Fishing scene 2"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="min-w-full">
                  <img
                    src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2"
                    alt="Fishing scene 3"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              <button className="w-3 h-3 rounded-full bg-primary"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            </div>
            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-3 text-primary">Find Fishing Spots</h3>
            <p className="text-gray-600">Discover the best fishing locations near you</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-secondary hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-3 text-secondary">Track Your Catches</h3>
            <p className="text-gray-600">Keep a record of your fishing adventures</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-3 text-primary">Connect with Anglers</h3>
            <p className="text-gray-600">Join a community of fishing enthusiasts</p>
          </div>
        </div>
      </div>
    </div>
  )
} 