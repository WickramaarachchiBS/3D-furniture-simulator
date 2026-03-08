import React from "react";
import { Link } from "react-router-dom";
import { Heart, Lightbulb, Users, ArrowRight, Star } from "lucide-react";
import { Navbar } from "../components/Navbar";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Co-Founder & CEO",
    bio: "Former interior designer with 12 years of experience. Sarah founded iFurnish to make professional-grade design tools accessible to everyone.",
    initials: "SM",
    color: "bg-blue-500",
  },
  {
    name: "James Okafor",
    role: "Co-Founder & CTO",
    bio: "Software engineer and 3D graphics enthusiast who built the core rendering engine. James believes great design and great technology are inseparable.",
    initials: "JO",
    color: "bg-purple-500",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    bio: "Award-winning UX designer passionate about removing friction from the creative process. Priya ensures every interaction in iFurnish feels effortless.",
    initials: "PS",
    color: "bg-pink-500",
  },
];

const values = [
  {
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
    title: "Design for People",
    description:
      "Every feature we build starts with a real human need. We believe beautiful spaces improve lives, and our tools should reflect that conviction.",
  },
  {
    icon: Lightbulb,
    color: "bg-yellow-100 text-yellow-600",
    title: "Simplicity First",
    description:
      "Powerful doesn't have to mean complicated. We continuously simplify so that anyone — from first-time homeowners to professional decorators — can succeed.",
  },
  {
    icon: Users,
    color: "bg-blue-100 text-blue-600",
    title: "Community Driven",
    description:
      "Our best ideas come from our users. We actively listen, iterate fast, and ship improvements based on real feedback from real designers.",
  },
];

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="hero-gradient pt-32 pb-24 lg:pt-48 lg:pb-32 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            About <span className="text-gradient">iFurnish</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We're a team of designers, engineers, and dreamers on a mission to
            make professional interior design accessible to everyone.
          </p>
        </div>
      </div>

      {/* Mission & Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
                Born from a frustration, built with passion
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                iFurnish started in 2022 when our co-founders — an interior
                designer and a software engineer — kept running into the same
                problem: existing room-planning tools were either too simple to
                be useful or too complex to be approachable.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                They spent a year building a tool they actually wanted to use —
                one that combined real-time 3D rendering with an interface so
                intuitive you could get started in minutes. Today, iFurnish is
                used by over 50,000 homeowners, renters, and professionals
                worldwide.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
              >
                Try It Free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Decorative stats block */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "50K+", label: "Happy Users" },
                { stat: "2022", label: "Founded" },
                { stat: "4.9", label: "Avg. Rating", icon: Star },
                { stat: "150+", label: "Furniture Items" },
              ].map(({ stat, label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-1 flex items-center justify-center gap-1">
                    {stat}
                    {Icon && (
                      <Icon className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    )}
                  </div>
                  <div className="text-gray-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map(({ icon: Icon, color, title, description }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${color}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              The People Behind iFurnish
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map(({ name, role, bio, initials, color }) => (
              <div
                key={name}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-20 h-20 rounded-full ${color} mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold shadow-md`}
                >
                  {initials}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 hero-gradient text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to design your perfect space?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of happy designers. No experience required.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
