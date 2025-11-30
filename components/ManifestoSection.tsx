import { Github, FileCode, GitBranch, Users } from "lucide-react";

const manifestoPoints = [
  "Universal Basic Income for all citizens below poverty line",
  "Free quality education from kindergarten to university",
  "Universal healthcare as a fundamental right",
  "100% renewable energy by 2040",
  "Gender equality in all government positions",
  "Digital literacy programs for rural India",
  "Transparent public spending dashboard",
  "Citizen-first immigration policies",
  "Investment in scientific research (5% of GDP)",
  "Decentralized governance with local autonomy",
];

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Github className="h-4 w-4 mr-2" />
              Open Source Manifesto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Manifesto Lives on{" "}
              <span className="text-emerald-400">GitHub</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We believe in radical transparency. Our entire manifesto, policy proposals, 
              and governance documents are open source. Anyone can read, suggest changes, 
              or contribute. Every modification is tracked, discussed, and voted upon by 
              the community.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="flex items-center text-emerald-400 mb-1">
                  <FileCode className="h-5 w-5 mr-2" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-gray-400 text-sm">Policy Proposals</p>
              </div>
              <div>
                <div className="flex items-center text-emerald-400 mb-1">
                  <GitBranch className="h-5 w-5 mr-2" />
                  <span className="text-2xl font-bold">2.5K</span>
                </div>
                <p className="text-gray-400 text-sm">Contributors</p>
              </div>
              <div>
                <div className="flex items-center text-emerald-400 mb-1">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="text-2xl font-bold">50K</span>
                </div>
                <p className="text-gray-400 text-sm">Discussions</p>
              </div>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              View on GitHub
            </a>
          </div>

          {/* Right Content - Manifesto Preview */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FileCode className="h-5 w-5 mr-2 text-emerald-400" />
              Key Manifesto Points
            </h3>
            <ul className="space-y-4">
              {manifestoPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-500 text-sm">
              This is just a preview. View the full manifesto and contribute your ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
