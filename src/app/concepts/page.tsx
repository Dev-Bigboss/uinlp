"use client"
import { nlpConcepts } from "@/data";
import {
  BookOpen,
  Search,
  Filter,
  ChevronRight,
  Sparkles,
  Brain,
  Code2,
  Globe,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// export const metadata = {
//   title: "NLP Concepts | UINLP",
//   description:
//     "Master the foundational concepts of Natural Language Processing for African languages.",
// };

interface NLPConcept {
  title: string;
  description: string;
  author: string;
  category: "Core" | "Advanced" | "Applied" | "Emerging";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const conceptsWithMeta: NLPConcept[] = nlpConcepts.map((c, i) => ({
  ...c,
  author: [
    "Dr. Khadijat Ladoja",
    "Mr. Ahmad Khidir",
    "Miss Zaynab Hamzat",
    "Engr. Olalekan Okewale",
    "Dr. Nancy Woods",
  ][i % 5],
  category: ["Core", "Core", "Applied", "Advanced", "Emerging"][i % 5] as NLPConcept["category"],
  difficulty: [
    "Beginner",
    "Intermediate",
    "Intermediate",
    "Advanced",
    "Advanced",
  ][i % 5] as NLPConcept["difficulty"],
}));

const categories = ["All", "Core", "Advanced", "Applied", "Emerging"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Concepts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filtered = conceptsWithMeta.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || c.category === category;
    const matchesDifficulty =
      difficulty === "All" || c.difficulty === difficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 backdrop-blur rounded-full">
              <Brain className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            NLP Concepts Lab
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore 20+ foundational and cutting-edge NLP concepts — tailored
            for African language innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm">
              <Sparkles className="inline w-4 h-4 mr-1" /> Interactive
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm">
              <Code2 className="inline w-4 h-4 mr-1" /> Code-Ready
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm">
              <Globe className="inline w-4 h-4 mr-1" /> African Context
            </span>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search concepts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none"
              >
                {difficulties.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((concept, i) => (
              <Link
                href={`/concepts/${concept.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")}`}
                key={i}
                className="group block bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        concept.category === "Core"
                          ? "bg-blue-100 text-blue-700"
                          : concept.category === "Advanced"
                          ? "bg-purple-100 text-purple-700"
                          : concept.category === "Applied"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {concept.category}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {concept.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {concept.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {concept?.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-gray-700 font-medium">
                        {concept.author}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        concept.difficulty === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : concept.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {concept.difficulty}
                    </span>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No concepts found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Build with NLP?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join our workshops, contribute to datasets, or start your own
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105"
            >
              Join UINLP
            </Link>
            <Link
              href="/resources"
              className="bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
