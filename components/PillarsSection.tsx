import { 
  Heart, 
  Globe, 
  Users, 
  Scale, 
  BookOpen, 
  ShieldCheck,
  Lightbulb,
  HandHeart
} from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Zero Tolerance for Corruption",
    description: "We believe corruption is the root of inequality. Every rupee of public money must serve the public. Complete transparency in all dealings.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Users,
    title: "Inclusive & Beyond Religion",
    description: "We see no Hindu, Muslim, Christian, or Sikh—only Indians. Our policies transcend religious boundaries and embrace every citizen equally.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: BookOpen,
    title: "Open Source Governance",
    description: "Our manifesto is written by the people. Every policy is debated openly. Every decision is documented. True democracy in action.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Globe,
    title: "Global Unity",
    description: "While we serve India first, we dream of a borderless world. We work towards global cooperation, peace, and shared prosperity.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Scale,
    title: "Equality for All",
    description: "Not just for the rich. Not just for the powerful. Every citizen deserves equal opportunities, justice, and respect regardless of their background.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Heart,
    title: "Happiness & Well-being",
    description: "GDP is not our only metric. We measure success by the happiness, health, and well-being of our citizens. Joy is a fundamental right.",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Lightbulb,
    title: "Science, Tech & Innovation",
    description: "We invest heavily in education, research, and technology. India will lead the world in scientific discovery and technological advancement.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    icon: HandHeart,
    title: "Kindness as Policy",
    description: "Compassion guides our governance. We care for the vulnerable, uplift the marginalized, and ensure no one is left behind.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Pillars
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            These are the foundational principles that guide every decision we make. 
            Non-negotiable. Unwavering. Built for the people.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className={`inline-flex p-3 rounded-xl ${pillar.bgColor} mb-4`}>
                <pillar.icon className={`h-6 w-6 ${pillar.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
