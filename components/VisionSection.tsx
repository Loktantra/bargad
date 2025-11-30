import { Target, Eye, Rocket } from "lucide-react";

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Vision for India
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We dream of an India where every citizen has the opportunity to thrive, 
            where governance is by the people and for the people.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="inline-flex p-4 rounded-2xl bg-emerald-100 mb-6">
              <Target className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize Indian politics by creating a truly democratic, transparent, 
              and inclusive political movement. We aim to eradicate corruption, bridge 
              inequality gaps, and empower every citizen to participate in governance.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-emerald-600 rounded-3xl p-8 shadow-sm text-white hover:bg-emerald-700 transition-colors">
            <div className="inline-flex p-4 rounded-2xl bg-emerald-500 mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-emerald-100 leading-relaxed">
              An India where happiness is the measure of progress. Where technology 
              serves humanity. Where borders become bridges. Where every child, 
              regardless of their birth, has access to world-class education, healthcare, 
              and opportunities.
            </p>
          </div>

          {/* Future Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="inline-flex p-4 rounded-2xl bg-amber-100 mb-6">
              <Rocket className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Future</h3>
            <p className="text-gray-600 leading-relaxed">
              We envision India as a global leader in science, philosophy, and 
              compassionate governance. A nation that invests in its people, nurtures 
              innovation, and spreads kindness beyond its borders to create a 
              harmonious world.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-700 italic max-w-4xl mx-auto">
            &ldquo;The strength of a nation lies not in its wealth, but in the happiness 
            and dignity of its people.&rdquo;
          </blockquote>
          <p className="mt-4 text-emerald-600 font-medium">— Bargad Founding Principle</p>
        </div>
      </div>
    </section>
  );
}
