import { TreeDeciduous, Github, Twitter, Mail, Heart } from "lucide-react";

const footerLinks = {
  about: [
    { name: "Our Story", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "Open Manifesto", href: "#manifesto" },
    { name: "Transparency Reports", href: "#" },
  ],
  getInvolved: [
    { name: "Become a Member", href: "#join" },
    { name: "Volunteer", href: "#" },
    { name: "Donate", href: "#" },
    { name: "Spread the Word", href: "#" },
  ],
  resources: [
    { name: "Policy Proposals", href: "#" },
    { name: "Discussion Forums", href: "#" },
    { name: "Media Kit", href: "#" },
    { name: "FAQs", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <TreeDeciduous className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Bargad</span>
            </div>
            <p className="text-emerald-200 text-sm mb-4">
              Building India Together. A progressive, inclusive political movement 
              for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-300 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-emerald-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-emerald-300 hover:text-white transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-emerald-200 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-emerald-200 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-emerald-200 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
          <p className="text-emerald-300 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-400" /> by the people of India
          </p>
          <p className="text-emerald-400 text-xs mt-2">
            © {new Date().getFullYear()} Bargad. Open source. Open governance. Open hearts.
          </p>
        </div>
      </div>
    </footer>
  );
}
