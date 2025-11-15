// app/strategy/page.tsx
import { strategicGoals } from "@/data";
import {
  Target,
  Users,
  BookOpen,
  Briefcase,
  Shield,
  Cpu,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "Strategic Plan | UINLP",
  description:
    "7 goals to connect Africa through language technology and preserve linguistic diversity.",
};

const iconMap: Record<string, React.ElementType> = {
  Target,
  Users,
  BookOpen,
  Briefcase,
  Shield,
  Cpu,
  BarChart3,
};

export default function Strategy() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            UINLP Strategic Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seven interconnected goals to transform language technology across
            Africa.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {strategicGoals.map((goal, index) => {
            const Icon = iconMap[goal.icon];
            const isEven = index % 2 === 0;
            return (
              <div
                key={goal.id}
                className={`mb-16 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all ${
                  isEven ? "bg-blue-50" : "bg-green-50"
                }`}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon & Number */}
                  <div className="flex-shrink-0 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                      <Icon className="text-blue-600" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      0{goal.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {goal.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {goal.description}
                    </p>

                    {/* Key Strategies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        Key Strategies
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {goal.strategies.map((strategy, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-600 text-sm md:text-base"
                          >
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span>{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Expected Outcomes */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 text-white p-10 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Expected Outcomes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                "Strengthened African leadership in NLP research",
                "Inclusive digital solutions bridging linguistic divides",
                "Sustainable ecosystem integrating academia, industry, and community",
                "Greater representation of African languages in global AI",
              ].map((outcome, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-white mr-3 mt-1">Check</span>
                  <p className="text-white font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
