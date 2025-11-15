// app/team/page.tsx
import { teamMembers } from "@/data";
import {
  Users,
  Mail,
  Linkedin,
  Globe,
  Building2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Team & Governance | UINLP",
  description:
    "Meet the leadership driving Africa's NLP innovation at University of Ibadan.",
};

export default function Team() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 backdrop-blur rounded-full">
              <Users className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Leadership Team
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            A multidisciplinary team of researchers, engineers, and strategists
            committed to connecting Africa through language technology.
          </p>
          <div className="w-32 h-1 bg-white/50 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Core Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Core Leadership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers
              .filter((m) =>
                [
                  "Head of UINLP",
                  "Co-Research Head & Founder",
                  "Executive Secretary",
                  "Research Management Officer",
                ].includes(m.role)
              )
              .map((member, i) => (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>

                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-center mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {member.dept}
                    </p>
                    <p className="text-gray-700 text-sm text-center italic">
                      "{member.bio}"
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center gap-3">
                    <a
                      href="#"
                      className="p-2 bg-white/50 rounded-full hover:bg-white transition"
                    >
                      <Mail className="w-4 h-4 text-blue-600" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/50 rounded-full hover:bg-white transition"
                    >
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/50 rounded-full hover:bg-white transition"
                    >
                      <Globe className="w-4 h-4 text-blue-600" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Support & Operations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Operations & Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers
              .filter(
                (m) =>
                  ![
                    "Head of UINLP",
                    "Co-Research Head & Founder",
                    "Executive Secretary",
                    "Research Management Officer",
                  ].includes(m.role)
              )
              .map((member, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <h4 className="font-bold text-gray-900">{member.name}</h4>
                  <p className="text-blue-600 text-sm font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-xs mt-2">{member.bio}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Governance & Reporting
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-inner">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900">Head of UINLP,</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Strategic Oversight
                </p>
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -z-10 hidden md:block"></div>
                <ChevronRight className="w-8 h-8 text-blue-600 mx-auto mb-3 hidden md:block" />
              </div>
              <div>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900">Executive Secretary</h4>
                <p className="text-sm text-gray-600 mt-1">Reports to Head </p>
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-5 gap-4 text-xs">
              {[
               
                {
                  role: "Research Management Officer",
                  reportsTo: "Executive Secretary",
                },
                { role: "Technical Lead", reportsTo: "Executive Secretary" },
                { role: "Data Lead", reportsTo: "Executive Secretary" },
                { role: "Publicity Lead", reportsTo: "Executive Secretary" },
                { role: "Set Lead", reportsTo: "Executive Secretary" },
              ].map((unit, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded-lg text-center shadow-sm"
                >
                  <p className="font-semibold text-gray-800">{unit.role}</p>
                  <p className="text-gray-500">→ {unit.reportsTo}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-blue-50 p-6 rounded-xl text-center">
            <p className="text-gray-700">
              <strong>All roles collaborate cross-functionally</strong> to align
              with UINLP’s{" "}
              <Link
                href="/strategy"
                className="text-blue-600 font-semibold hover:underline"
              >
                7 Strategic Goals
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-8 opacity-90">
            We’re hiring researchers, developers, and interns passionate about
            African language AI.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105"
          >
            Explore Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
