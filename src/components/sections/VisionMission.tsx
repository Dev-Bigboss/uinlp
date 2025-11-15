// components/sections/VisionMission.tsx
import { vision, mission } from "@/data";

export default function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-sm backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">
                V
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{vision}</p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-sm backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">
                M
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
