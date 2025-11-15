// app/page.tsx
import Hero from "@/components/sections/Hero";
import VisionMission from "@/components/sections/VisionMission";
import { strategicGoals, nlpConcepts, teamMembers } from "@/data";
import Link from "next/link";
import {
  Target,
  Users,
  BookOpen,
  Briefcase,
  Brain,
  Globe,
  Mail,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const icons = { Target, Users, BookOpen, Briefcase };

export default function Home() {
  const featuredConcept = nlpConcepts[0];
  const featuredMember =
    teamMembers.find((m) => m.role === "Head of UINLP") || teamMembers[0];

  return (
    <>
      <Hero />
      <VisionMission />

      {/* Quick Links Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore UINLP
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4">
              Your gateway to NLP innovation for African languages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/about",
                label: "About UINLP",
                icon: Globe,
                color: "blue",
              },
              {
                href: "/strategy",
                label: "Strategic Plan",
                icon: Target,
                color: "green",
              },
              {
                href: "/research",
                label: "Research",
                icon: BookOpen,
                color: "purple",
              },
              {
                href: "/concepts",
                label: "NLP Concepts",
                icon: Brain,
                color: "indigo",
              },
              {
                href: "/resources",
                label: "Resources",
                icon: Briefcase,
                color: "teal",
              },
              {
                href: "/team",
                label: "Our Team",
                icon: Users,
                color: "orange",
              },
              {
                href: "/contact",
                label: "Get Involved",
                icon: Mail,
                color: "pink",
              },
            ].map((link, i) => {
              const Icon = link.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600 text-blue-600",
                green: "from-green-500 to-green-600 text-green-600",
                purple: "from-purple-500 to-purple-600 text-purple-600",
                indigo: "from-indigo-500 to-indigo-600 text-indigo-600",
                teal: "from-teal-500 to-teal-600 text-teal-600",
                orange: "from-orange-500 to-orange-600 text-orange-600",
                pink: "from-pink-500 to-pink-600 text-pink-600",
              }[link.color];

              return (
                <Link
                  key={i}
                  href={link.href}
                  className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colorClasses} opacity-0 group-hover:opacity-20 transition`}
                  ></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${colorClasses} rounded-xl flex items-center justify-center mb-3`}
                        style={{ opacity: 0.1 }}
                      >
                        <Icon
                          className={`w-6 h-6 text-white`}
                        />
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900">
                        {link.label}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition" />
                  </div>
                  <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Goals Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic Goals
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Seven pillars guiding UINLP toward a linguistically inclusive
              digital Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicGoals.slice(0, 3).map((goal) => {
              const Icon = icons[goal.icon as keyof typeof icons];
              return (
                <div
                  key={goal.id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group border border-gray-200"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="text-blue-600" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {goal.id}. {goal.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {goal.description}
                  </p>
                  <Link
                    href="/strategy"
                    className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
                  >
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/strategy"
              className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105"
            >
              View All 7 Goals
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* NLP Concept */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100 shadow-sm backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">
                  Featured Concept
                </h3>
              </div>
              <h4 className="text-2xl font-bold text-indigo-700 mb-3">
                {featuredConcept.title}
              </h4>
              <p className="text-gray-700 mb-4">
                {featuredConcept.description}
              </p>
              <Link
                href="/concepts"
                className="text-indigo-600 font-semibold hover:underline inline-flex items-center"
              >
                Explore 20+ Concepts <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Team Member */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100 shadow-sm backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">
                  Leadership Spotlight
                </h3>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {featuredMember.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {featuredMember.name}
                  </h4>
                  <p className="text-green-600 font-medium">
                    {featuredMember.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{featuredMember.bio}"</p>
              <Link
                href="/team"
                className="text-green-600 font-semibold hover:underline mt-4 inline-flex items-center"
              >
                Meet the Full Team <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Shape the Future of African NLP?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join workshops, contribute data, or collaborate on cutting-edge
            research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105"
            >
              Get Involved
            </Link>
            <Link
              href="/resources"
              className="bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition"
            >
              Access Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
