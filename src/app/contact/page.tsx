// app/contact/page.tsx
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact UINLP",
  description:
    "Get in touch for collaboration, research partnerships, or inquiries.",
};

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on language technology for Africa?
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">uinlp@ui.edu.ng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+234 800 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">
                      Department of Computer Science
                      <br />
                      Faculty of Science
                      <br />
                      University of Ibadan, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="text-blue-600" size={20} />
                  <p className="font-semibold">Research Meetings</p>
                </div>
                <p className="text-gray-700 flex items-center gap-2">
                  <Clock size={16} /> 2nd & 4th Thursday • 8:00 PM – 9:00 PM WAT
                </p>
                <Link
                  href="#"
                  className="text-blue-600 font-medium mt-2 inline-block hover:underline"
                >
                  Join via Meet Check
                </Link>
              </div>
            </div>

            {/* Collaboration Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Start a Collaboration</h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Organization / Institution"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your project or idea..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

