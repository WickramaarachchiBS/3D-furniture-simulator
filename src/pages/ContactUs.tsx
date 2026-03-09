import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Navbar } from "../components/Navbar";

const subjects = [
  "General Inquiry",
  "Technical Support",
  "Billing & Payments",
  "Product Feedback",
  "Partnership Opportunities",
  "Press & Media",
  "Other",
];

const contactInfo = [
  {
    icon: MapPin,
    color: "bg-blue-100 text-blue-600",
    label: "Headquarters",
    detail: "42 Duplication Road, Kollupitiya,\nColombo 03, Sri Lanka.",
  },
  {
    icon: Phone,
    color: "bg-purple-100 text-purple-600",
    label: "Phone",
    detail: "+94 11 234 5678\nMon–Fri, 9am–6pm IST",
  },
  {
    icon: Mail,
    color: "bg-pink-100 text-pink-600",
    label: "Email",
    detail: "hello@concept.store.com\nWe reply within 24 hours",
  },
  {
    icon: Clock,
    color: "bg-yellow-100 text-yellow-600",
    label: "Business Hours",
    detail: "Mon–Fri: 9am – 6pm IST\nSat: 9am – 1pm · Sun: Closed",
  },
];

export const ContactUs: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
    }`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden hero-gradient pt-32 pb-16 lg:pt-40 lg:pb-20 text-center px-4">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg')] bg-cover bg-center opacity-50"
            style={{ filter: "blur(8px)" }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold font-heading mb-8 tracking-tight text-black [-webkit-text-stroke:1px_black]">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-600">
            Have a question or just want to say hello? We'd love to hear from
            you.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-8 lg:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-5" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Message Sent!
                  </h2>
                  <p className="text-gray-600 max-w-sm">
                    Thanks for reaching out, <strong>{form.name}</strong>. We'll
                    get back to you at{" "}
                    <span className="text-blue-600">{form.email}</span> within
                    24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-8 px-6 py-2.5 text-sm font-semibold text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send us a message
                  </h2>
                  <p className="text-gray-500 mb-8 text-sm">
                    Fill out the form below and we'll get back to you promptly.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Kelum Silva"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass("name")}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="kelume@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={inputClass("subject")}
                      >
                        <option value="">Select a subject…</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us how we can help…"
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass("message")} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-all transform hover:scale-105 shadow-md"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-500 text-sm">
                  Prefer to reach us directly? Here's all you need.
                </p>
              </div>
              {contactInfo.map(({ icon: Icon, color, label, detail }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{label}</p>
                    {detail.split("\n").map((line, i) => (
                      <p key={i} className="text-gray-500 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
