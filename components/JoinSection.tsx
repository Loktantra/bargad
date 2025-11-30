"use client";

import { useState } from "react";
import { Send, CheckCircle, Heart, Users, Megaphone } from "lucide-react";

const joinOptions = [
  {
    icon: Users,
    title: "Become a Member",
    description: "Join our movement and be part of the change. Voting rights on all policy decisions.",
  },
  {
    icon: Heart,
    title: "Volunteer",
    description: "Contribute your time and skills. Help organize events, spread awareness, or assist in campaigns.",
  },
  {
    icon: Megaphone,
    title: "Spread the Word",
    description: "Share our vision with friends and family. Every conversation plants a seed for change.",
  },
];

export default function JoinSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
              India&apos;s future is not written by politicians alone—it&apos;s written by 
              every citizen who dares to dream of a better tomorrow. Take the first 
              step. Join Bargad today.
            </p>

            {/* Join Options */}
            <div className="space-y-4">
              {joinOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-emerald-500/30 rounded-xl backdrop-blur-sm"
                >
                  <div className="p-2 bg-white/10 rounded-lg mr-4">
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{option.title}</h3>
                    <p className="text-emerald-100 text-sm">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex p-4 bg-emerald-100 rounded-full mb-4">
                  <CheckCircle className="h-12 w-12 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to Bargad!
                </h3>
                <p className="text-gray-600">
                  Thank you for joining our movement. We&apos;ll be in touch soon with 
                  next steps on how you can get involved.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Start Your Journey
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill in your details to become a part of India&apos;s progressive movement.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <select
                      id="state"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      required
                    >
                      <option value="">Select your state</option>
                      <option value="an">Andaman and Nicobar Islands</option>
                      <option value="ap">Andhra Pradesh</option>
                      <option value="ar">Arunachal Pradesh</option>
                      <option value="as">Assam</option>
                      <option value="br">Bihar</option>
                      <option value="ch">Chandigarh</option>
                      <option value="cg">Chhattisgarh</option>
                      <option value="dd">Daman and Diu</option>
                      <option value="dl">Delhi</option>
                      <option value="ga">Goa</option>
                      <option value="gj">Gujarat</option>
                      <option value="hr">Haryana</option>
                      <option value="hp">Himachal Pradesh</option>
                      <option value="jk">Jammu and Kashmir</option>
                      <option value="jh">Jharkhand</option>
                      <option value="ka">Karnataka</option>
                      <option value="kl">Kerala</option>
                      <option value="la">Ladakh</option>
                      <option value="ld">Lakshadweep</option>
                      <option value="mp">Madhya Pradesh</option>
                      <option value="mh">Maharashtra</option>
                      <option value="mn">Manipur</option>
                      <option value="ml">Meghalaya</option>
                      <option value="mz">Mizoram</option>
                      <option value="nl">Nagaland</option>
                      <option value="or">Odisha</option>
                      <option value="py">Puducherry</option>
                      <option value="pb">Punjab</option>
                      <option value="rj">Rajasthan</option>
                      <option value="sk">Sikkim</option>
                      <option value="tn">Tamil Nadu</option>
                      <option value="ts">Telangana</option>
                      <option value="tr">Tripura</option>
                      <option value="up">Uttar Pradesh</option>
                      <option value="uk">Uttarakhand</option>
                      <option value="wb">West Bengal</option>
                    </select>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      I agree to the terms and conditions and believe in Bargad&apos;s vision 
                      of an inclusive, transparent, and progressive India.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Join Bargad
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
