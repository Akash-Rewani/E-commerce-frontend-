import React from 'react'
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiMapPin,
  FiPhone,
  FiClock,
} from 'react-icons/fi'

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl font-semibold leading-tight">
            Get in <span className="font-normal text-gray-600 underline">Touch</span>
          </h1>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            We’d love to hear from you. Whether you have a question about our
            products, pricing, or anything else — our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10">
            <h2 className="text-xl font-semibold mb-6">
              Send us a message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Full name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Akash Kumar"
                      className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-sm outline-none transition focus:border-black"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="akash@gmail.com"
                      className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-sm outline-none transition focus:border-black"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
                  <textarea
                    rows="6"
                    placeholder="Tell us how we can help you..."
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-sm outline-none transition focus:border-black resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-6">
                Contact information
              </h2>

              <p className="text-gray-500 mb-10 leading-relaxed max-w-md">
                Reach out through any of the following channels. We aim to respond
                within 24 hours.
              </p>

              <div className="space-y-8 text-sm">
                <div className="flex items-start gap-4">
                  <FiMapPin className="text-gray-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Address</p>
                    <p className="text-gray-500">
                      123 Bazario Work Office<br />
                      Kolkata City, FC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiMail className="text-gray-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Email</p>
                    <p className="text-gray-500">bazario_official@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiPhone className="text-gray-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Phone</p>
                    <p className="text-gray-500">+1 (800) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SUPPORT CARD */}
            <div className="mt-14 rounded-2xl bg-slate-50 border border-gray-200 p-8 flex gap-4">
              <FiClock className="text-gray-700 text-xl mt-1" />
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  24/7 Customer Support
                </p>
                <p className="text-sm text-gray-500">
                  Our support team is available around the clock to assist you.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
