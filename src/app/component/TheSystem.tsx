export default function TheSystem() {
  return (
    <section className="w-full py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main container */}
        <div
          className="relative bg-white rounded-3xl border border-gray-200 p-16"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #F9FBFE 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left section */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#615F63" }}
                >
                  THE SYSTEM
                </h3>
                <div className="w-20 h-0.5 bg-primary" />
              </div>

              <h2
                className="text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: "#2A2A2A" }}
              >
                Nothing Powerful Operates Alone.
              </h2>

              <p
                className="text-xl leading-relaxed"
                style={{ color: "#615F63" }}
              >
                Search influences reputation. Reputation influences conversion.
                Conversion reinforces visibility.
              </p>
            </div>

            {/* Right section */}
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                <div
                  className="w-40 h-1 mb-4"
                  style={{ backgroundColor: "#027BFF" }}
                />
                <p
                  className="text-xl leading-relaxed"
                  style={{ color: "#433E3F" }}
                >
                  When these elements are disconnected, effort is wasted. When
                  they are aligned, energy compounds.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
            <p className="text-xl leading-relaxed" style={{ color: "#433E3F" }}>
              We design connected digital ecosystems where each signal
              strengthens the next—creating clarity, momentum, and long-term
              stability.
            </p>
            <p className="text-xl leading-relaxed" style={{ color: "#615F63" }}>
              Most of the work happens beneath the surface. The impact is
              unmistakable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
