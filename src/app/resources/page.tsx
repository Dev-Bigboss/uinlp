// app/resources/page.tsx
import { Download, Globe, Database, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resources | UINLP",
  description:
    "Open datasets, tools, and publications for African language NLP research.",
};

const resources = [
  {
    title: "African Language Resource Hub",
    icon: Globe,
    desc: "Centralized open-access portal for datasets, models, and tools.",
    link: "#",
    status: "Coming Q1 2026",
  },
  {
    title: "Yoruba Speech Corpus",
    icon: Database,
    desc: "10,000+ hours of annotated speech data across dialects.",
    link: "#",
    status: "In Progress",
  },
  {
    title: "Igbo-Hausa Parallel Corpus",
    icon: BookOpen,
    desc: "1M+ sentence pairs for machine translation training.",
    link: "#",
    status: "Available",
  },
  {
    title: "NLP Toolkit for Low-Resource Languages",
    icon: Download,
    desc: "Python library with preprocessing, tokenization, and evaluation tools.",
    link: "https://github.com/uinlp/toolkit",
    status: "Open Source",
  },
];

export default function Resources() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Goal 6: Strengthen infrastructure with open datasets, tools, and
            collaborative platforms.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="text-blue-600" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {res.title}
                      </h3>
                    </div>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        res.status.includes("Available") ||
                        res.status.includes("Open")
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {res.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{res.desc}</p>
                  {res.link !== "#" ? (
                    <Link
                      href={res.link}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Access Resource Check
                    </Link>
                  ) : (
                    <p className="text-gray-500 text-sm">Launching soon</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Contribute to Our Mission
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Help us build the largest open repository of African language
              data. Share speech recordings, text corpora, or volunteer as a
              data annotator.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
            >
              Get Involved
            </Link>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/concepts"
              className="text-blue-600 font-semibold hover:underline"
            >
              Explore 20+ NLP Concepts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
