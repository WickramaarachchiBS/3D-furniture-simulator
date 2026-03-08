import React, { useState } from "react";
import { MapPin, Clock, Phone, ExternalLink, Search } from "lucide-react";
import { Navbar } from "../components/Navbar";

const stores = [
  {
    id: 1,
    name: "iFurnish Downtown",
    address: "125 Main Street, Suite 10, New York, NY 10001",
    hours: "Mon–Sat 9am–8pm · Sun 11am–6pm",
    phone: "+1 (212) 555-0142",
    city: "new york",
    tag: "Flagship",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    name: "iFurnish Westside",
    address: "8800 Sunset Blvd, Los Angeles, CA 90069",
    hours: "Mon–Sat 10am–8pm · Sun 11am–7pm",
    phone: "+1 (310) 555-0198",
    city: "los angeles",
    tag: "Design Studio",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 3,
    name: "iFurnish Midtown",
    address: "233 N Michigan Ave, Chicago, IL 60601",
    hours: "Mon–Fri 9am–7pm · Sat 10am–7pm · Sun 12pm–5pm",
    phone: "+1 (312) 555-0176",
    city: "chicago",
    tag: "Showroom",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    id: 4,
    name: "iFurnish South End",
    address: "900 South Congress Ave, Austin, TX 78704",
    hours: "Mon–Sat 10am–7pm · Sun 12pm–6pm",
    phone: "+1 (512) 555-0231",
    city: "austin",
    tag: "New",
    tagColor: "bg-green-100 text-green-700",
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
            Visit one of our showrooms and experience iFurnish in person with
            expert design consultants ready to help.
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
