import { ArrowRight, Sparkles, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4 mr-2" />
          A New Dawn in Indian Politics
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
            India
          </span>{" "}
          Together
        </h1>
        
        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          Bargad is a progressive, inclusive political movement that believes in the power of 
          the people. We stand for transparency, equality, and a future where every voice matters. 
          Built by everyone, for everyone.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#join"
            className="group inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Join the Movement
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#manifesto"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all"
          >
            Read Our Manifesto
          </a>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600">1M+</div>
            <div className="text-gray-600">Citizens Engaged</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600">28</div>
            <div className="text-gray-600">States Active</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-emerald-600">100%</div>
            <div className="text-gray-600">Transparent Funding</div>
          </div>
        </div>

        {/* Community Badge */}
        <div className="mt-12 inline-flex items-center gap-2 text-gray-600">
          <Users className="h-5 w-5 text-emerald-600" />
          <span>Join thousands of citizens shaping India&apos;s future</span>
        </div>
      </div>
    </section>
  );
}
