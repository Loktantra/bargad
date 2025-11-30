import { 
  MessageSquare, 
  Vote, 
  FileText, 
  PiggyBank, 
  MapPin, 
  Bell,
  BookMarked,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Open Discussion Forums",
    description: "Every policy is debated publicly. Join thousands of citizens in shaping our nation's future through structured, respectful dialogue.",
    status: "Live",
  },
  {
    icon: Vote,
    title: "Citizen Voting",
    description: "Your voice matters. Vote on policy proposals, leadership decisions, and local initiatives. True democracy at your fingertips.",
    status: "Live",
  },
  {
    icon: FileText,
    title: "Transparent Documentation",
    description: "Every meeting recorded. Every decision documented. Every rupee accounted for. Complete transparency in governance.",
    status: "Live",
  },
  {
    icon: PiggyBank,
    title: "Crowdfunded Politics",
    description: "No corporate donations. No hidden agendas. We're funded by small contributions from millions of ordinary citizens.",
    status: "Live",
  },
  {
    icon: MapPin,
    title: "Local Chapters",
    description: "Join or start a local chapter in your neighborhood. Grassroots change starts at home. Connect with like-minded citizens near you.",
    status: "Expanding",
  },
  {
    icon: Bell,
    title: "Real-time Updates",
    description: "Stay informed with instant notifications on policy changes, voting opportunities, and local events. Never miss an important update.",
    status: "Coming Soon",
  },
  {
    icon: BookMarked,
    title: "Citizen Education",
    description: "Free courses on civic rights, governance, and policy-making. Empower yourself with knowledge. Be an informed voter.",
    status: "Coming Soon",
  },
  {
    icon: BarChart3,
    title: "Impact Dashboard",
    description: "Track our collective impact. See real metrics on policy implementations, community improvements, and citizen satisfaction.",
    status: "Coming Soon",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Democracy, Reimagined
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We&apos;re building the tools for true participatory democracy. 
            Technology that empowers citizens, not politicians.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  feature.status === "Live" 
                    ? "bg-green-100 text-green-700"
                    : feature.status === "Expanding"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {feature.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
