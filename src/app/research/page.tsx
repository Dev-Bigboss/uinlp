// app/research/page.tsx
import { Target, BookOpen, Users } from "lucide-react";

export const metadata = {
  title: "Research & Innovation | UINLP",
  description:
    "Advancing NLP research in machine translation, speech, and multilingual AI for African languages.",
};

const researchClusters = [
  {
    title: "Machine Translation",
    icon: Target,
    desc: "Building bidirectional translation systems for Yoruba, Igbo, Hausa, and English with context-aware accuracy.",
  },
  {
    title: "Speech Technology",
    icon: BookOpen,
    desc: "Developing ASR and TTS models for low-resource African languages using self-supervised learning.",
  },
  {
    title: "Information Retrieval",
    icon: Users,
    desc: "Creating search engines that understand African linguistic nuances and cultural context.",
  },
  {
    title: "Multilingual AI",
    icon: Target,
    desc: "Designing foundation models that support code-switching, dialect variation, and cross-lingual transfer.",
  },
];

export default function Research() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Research & Innovation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Goal 1: Advance impactful NLP research that drives digital inclusion
            and real-world transformation in Africa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Research Clusters
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchClusters.map((cluster, i) => {
              const Icon = cluster.icon;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {cluster.title}
                      </h3>
                      <p className="text-gray-700">{cluster.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-center mb-6">
              Key Activities
            </h3>
            <ul className="space-y-4 max-w-3xl mx-auto">
              {[
                "Develop open-source datasets for African languages",
                "Collaborate with global AI labs on multilingual models",
                "Publish in ACL, EMNLP, NeurIPS, and AfriCHI",
                "Host annual African NLP Workshop at UI",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-3">Check</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
