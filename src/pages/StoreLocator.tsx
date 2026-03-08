import React, { useState } from "react";
import { MapPin, Clock, Phone, ExternalLink, Search } from "lucide-react";
import { Navbar } from "../components/Navbar";

const stores = [
  {
    id: 5,
    name: "Concept.Store Colombo",
    address: "42 Duplication Road, Kollupitiya, Colombo 03",
    hours: "Mon–Sat 9am–8pm · Sun 10am–6pm",
    phone: "+94 11 234 5678",
    city: "colombo",
    tag: "Flagship",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 6,
    name: "Concept.Store Kandy",
    address: "18 Peradeniya Road, Kandy 20000",
    hours: "Mon–Sat 9am–7pm · Sun 11am–5pm",
    phone: "+94 81 223 4567",
    city: "kandy",
    tag: "Showroom",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    id: 7,
    name: "Concept.Store Galle",
    address: "7 Wakwella Road, Galle 80000",
    hours: "Mon–Fri 9am–6pm · Sat 9am–7pm · Sun 11am–4pm",
    phone: "+94 91 222 3456",
    city: "galle",
    tag: "Design Studio",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 8,
    name: "Concept.Store Negombo",
    address: "55 Poruthota Road, Negombo 11500",
    hours: "Mon–Sat 10am–7pm · Sun 11am–5pm",
    phone: "+94 31 221 7890",
    city: "negombo",
    tag: "New",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    id: 9,
    name: "Concept.Store Kurunegala",
    address: "23 Colombo Road, Kurunegala 60000",
    hours: "Mon–Sat 9am–7pm · Sun Closed",
    phone: "+94 37 222 6543",
    city: "kurunegala",
    tag: "Showroom",
    tagColor: "bg-pink-100 text-pink-700",
  },
];

export const StoreLocator: React.FC = () => {
  const [query, setQuery] = useState("");

  const filtered = stores.filter(
    (s) =>
      query === "" ||
      s.city.includes(query.toLowerCase()) ||
      s.address.toLowerCase().includes(query.toLowerCase()) ||
      s.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="hero-gradient pt-32 pb-16 lg:pt-40 lg:pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Find a <span className="text-gradient">Store Near You</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Visit one of our showrooms and experience Concept.Store in person
            with expert design consultants ready to help.
          </p>
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by city, state, or store name…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>
        </div>
      </div>

      {/* Store listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {query
                ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`
                : `All Stores (${stores.length})`}
            </h2>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <MapPin className="w-12 h-12 mx-auto mb-3" />
              <p className="text-xl font-medium">No stores found</p>
              <p className="text-sm mt-1">Try a different city or zip code.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((store) => (
                <div
                  key={store.id}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {store.name}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${store.tagColor}`}
                    >
                      {store.tag}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{store.address}</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-600">
                      <Clock className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{store.hours}</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-600">
                      <Phone className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                      <a
                        href={`tel:${store.phone}`}
                        className="text-sm hover:text-blue-600 transition-colors"
                      >
                        {store.phone}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    Get Directions <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
