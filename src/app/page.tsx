"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Users,
  Target,
  BookOpen,
  Briefcase,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { nlpConcepts } from "@/data";

export default function UINLPWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentConceptIndex, setCurrentConceptIndex] = useState(0);

  const conceptsPerPage = 6;
  const totalPages = Math.ceil(nlpConcepts.length / conceptsPerPage);

  const nextConcepts = () => {
    setCurrentConceptIndex((prev) =>
      prev + conceptsPerPage >= nlpConcepts.length ? 0 : prev + conceptsPerPage
    );
  };

  const prevConcepts = () => {
    setCurrentConceptIndex((prev) =>
      prev - conceptsPerPage < 0
        ? Math.max(0, nlpConcepts.length - conceptsPerPage)
        : prev - conceptsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentConceptIndex(pageIndex * conceptsPerPage);
  };

  const currentPage = Math.floor(currentConceptIndex / conceptsPerPage);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                UINLP
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("focus")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Focus Areas
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("focus")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
              >
                Focus Areas
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            University of Ibadan
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Natural Language Processing
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advancing AI and Machine Learning research for Nigerian languages
            through innovative data solutions and collaborative research
          </p>
          <button
            onClick={() => scrollToSection("about")}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              About UINLP
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                The University of Ibadan Natural Language Processing Research
                Group was established in July 2024 with a clear mission: to
                address the critical shortage of robust, accurate, and
                accessible digital data for Nigerian languages.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Based in the Department of Computer Science at the University of
                Ibadan, Nigeria, our multidisciplinary team is dedicated to
                advancing NLP, Machine Learning, and Artificial Intelligence
                research specifically tailored to Nigerian linguistic contexts.
              </p>
              <p className="text-lg text-gray-700">
                We're bridging the digital divide by creating tools and datasets
                that enable technology to understand and process Yoruba, Igbo,
                Hausa, and other Nigerian languages effectively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Develop comprehensive datasets for Nigerian languages
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Create accessible translation and NLP tools
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Advance AI research in low-resource language contexts
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Provide innovative language technology services
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Data Collection & Aggregation
              </h4>
              <p className="text-gray-600">
                Generating and aggregating accurate text and speech data for
                Nigerian languages through structured, incremental approaches
                and stakeholder engagement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Translation Technology
              </h4>
              <p className="text-gray-600">
                Developing applications for translating between English and
                Nigerian languages including Yoruba, Igbo, and Hausa, with
                attention to linguistic complexities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Platform Evaluation
              </h4>
              <p className="text-gray-600">
                Testing and evaluating translation accuracy across existing AI
                platforms to identify gaps and opportunities for improvement in
                Nigerian language processing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-green-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                NLP Specializations
              </h4>
              <p className="text-gray-600">
                Research in specialized NLP areas including memory systems,
                personalization, and benchmarking tailored to Nigerian language
                contexts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Knowledge Sharing
              </h4>
              <p className="text-gray-600">
                Regular training sessions, documentation of research findings,
                and collaborative learning on NLP concepts applied to Nigerian
                languages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-green-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Service Provision
              </h4>
              <p className="text-gray-600">
                Exploring entrepreneurial opportunities to provide language
                technology services to the university community and the broader
                public.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NLP Concepts Section with Carousel */}
      <section id="concepts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Core NLP Concepts
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Key foundational topics our team explores to advance language
              understanding and AI for Nigerian languages.
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
                {nlpConcepts
                  .slice(
                    currentConceptIndex,
                    currentConceptIndex + conceptsPerPage
                  )
                  .map((concept, idx) => (
                    <div
                      key={currentConceptIndex + idx}
                      className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {concept.title}
                      </h4>
                      <p className="text-gray-600">{concept.description}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prevConcepts}
                className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg transition transform hover:scale-110"
                aria-label="Previous concepts"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Page Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToPage(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      currentPage === idx
                        ? "bg-gradient-to-r from-blue-600 to-green-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to page ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextConcepts}
                className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg transition transform hover:scale-110"
                aria-label="Next concepts"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Counter */}
            <div className="text-center mt-6 text-gray-600">
              Showing {currentConceptIndex + 1}-
              {Math.min(
                currentConceptIndex + conceptsPerPage,
                nlpConcepts.length
              )}{" "}
              of {nlpConcepts.length} concepts
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A dedicated team of researchers and engineers committed to
              advancing NLP for Nigerian languages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Nancy C. Woods", role: "Research Head" },
              {
                name: "Dr. Khadijat T. Ladoja",
                role: "Co-Research Head & Founder",
              },
              {
                name: "Engr. Olalekan A. Okewale",
                role: "Executive Secretary",
              },
              {
                name: "Miss Zaynab A. Hamzat",
                role: "Research Management Officer",
              },
              { name: "Mr. Sherifdeen A. Adeleke", role: "Publicity Lead" },
              { name: "Mr. Razaq H. Abiola", role: "Recruitment Lead" },
              { name: "Mr. Ahmad A. Khidir", role: "Technical Lead" },
              { name: "Mr. Micheal T. Oyebamiji", role: "Data Lead" },
              { name: "Mr. Tamilore M. Adebayo", role: "Set Lead" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center hover:shadow-lg transition"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 to-green-600"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-4xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-xl text-blue-100 mb-8">
            Interested in collaborating or learning more about our research?
            <br />
            We'd love to hear from you.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
            <p className="text-lg mb-2">Department of Computer Science</p>
            <p className="text-lg mb-2">University of Ibadan</p>
            <p className="text-lg mb-6">Ibadan, Oyo State, Nigeria</p>
            <p className="text-sm text-blue-100">
              Research meetings: 2nd & 4th Thursday of each month, 8:00 PM -
              9:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">
            © 2025 University of Ibadan Natural Language Processing Research
            Group
          </p>
          <p className="text-sm text-gray-400">
            Advancing AI research for Nigerian languages since 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
