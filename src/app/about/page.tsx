// app/about/page.tsx
import { vision, mission } from "@/data";
import { Calendar, MapPin, Users } from "lucide-react";

export const metadata = {
  title: "About UINLP | University of Ibadan NLP Unit",
  description:
    "Established in 2024 to advance NLP research for African languages and digital inclusion.",
};

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About UINLP</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering language technology for a connected, inclusive, and
            linguistically rich Africa.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  V
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{vision}</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Establishment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Founded</h3>
              <p className="text-3xl font-bold text-blue-600">July 2024</p>
              <p className="text-gray-600 mt-2">University of Ibadan</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Department of Computer Science</p>
              <p className="text-gray-600">Faculty of Science, UI</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Leadership
              </h3>
              <p className="text-gray-700">Multidisciplinary Team</p>
              <p className="text-gray-600">Academia + Industry + Community</p>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-center mb-6">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              UINLP was established in <strong>July 2024</strong> within the{" "}
              <strong>Department of Computer Science</strong> at the University
              of Ibadan to address the critical gap in digital representation of
              African languages. With over <strong>2,000 languages</strong>{" "}
              spoken across the continent, less than 1% have adequate digital
              resources. We are changing that.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
