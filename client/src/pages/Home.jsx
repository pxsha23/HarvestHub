// import Hero from '../components/Hero.jsx'
// import FarmCard from '../components/FarmCard.jsx'
// import Footer from '../components/Footer.jsx'
// import { mockFarms, mockReviews } from '../mockData.js'

// export default function Home(){
//   return (
//     <div className="space-y-12">
//       <Hero />

//       <section className="max-w-7xl mx-auto px-6">
//         <h2 className="text-2xl font-semibold">Why HarvestHub?</h2>
//         <div className="mt-4 grid md:grid-cols-3 gap-4">
//           <div className="p-5 bg-white rounded border">
//             <div className="font-medium">Verified Farmers</div>
//             <p className="text-sm text-gray-600 mt-2">Each Farm is Verified and Authentic.</p>
//           </div>
//           <div className="p-5 bg-white rounded border">
//             <div className="font-medium">Secure Investment</div>
//             <p className="text-sm text-gray-600 mt-2">Very Transcation Secure and Safe.</p>
//           </div>
//           <div className="p-5 bg-white rounded border">
//             <div className="font-medium">Real-Time Tracking</div>
//             <p className="text-sm text-gray-600 mt-2">Tracking Profits in Real-Time.</p>
//           </div>
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl font-semibold">Featured Farms</h2>
//           {/* UPDATE_FAKE_REVIEW_SECTION */}
//           <a href="/farms" className="text-green-800 hover:text-green-900">View all</a>
//         </div>
//         <div className="mt-4 grid md:grid-cols-3 gap-6">
//           {mockFarms.map(f => <FarmCard key={f._id} farm={f} />)}
//         </div>
//       </section>

//       <section className="bg-white/80 border-t">
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <h2 className="text-2xl font-semibold">What investors say</h2>
//           <div className="mt-4 grid md:grid-cols-4 gap-4">
//             {mockReviews.map(r => (
//               <div key={r.id} className="p-4 rounded border bg-white">
//                 <div className="flex items-center gap-3">
//                   <img src={r.avatar} className="h-10 w-10 rounded-full" />
//                   <div>
//                     <div className="font-medium text-sm">{r.name}</div>
//                     <div className="text-yellow-500 text-xs">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
//                   </div>
//                 </div>
//                 <p className="mt-3 text-sm text-gray-700">{r.comment}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

import Hero from '../components/Hero.jsx'
import FarmCard from '../components/FarmCard.jsx'
import Footer from '../components/Footer.jsx'
import { mockFarms, mockReviews } from '../mockData.js'

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />

      {/* WHY HARVESTHUB */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-emerald-700">Why HarvestHub?</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition">
            <div className="font-medium text-emerald-700">Verified Farmers</div>
            <p className="text-sm text-gray-600 mt-2">Each Farm is Verified and Authentic.</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition">
            <div className="font-medium text-emerald-700">Secure Investment</div>
            <p className="text-sm text-gray-600 mt-2">Every Transaction is Secure and Transparent.</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition">
            <div className="font-medium text-emerald-700">Real-Time Tracking</div>
            <p className="text-sm text-gray-600 mt-2">Monitor your farm performance live.</p>
          </div>
        </div>
      </section>

      {/* FEATURED FARMS */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-emerald-700">Featured Farms</h2>
          <a href="/farms" className="text-emerald-700 hover:text-emerald-800 font-medium">View all</a>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {mockFarms.map(f => <FarmCard key={f._id} farm={f} />)}
        </div>
      </section>

      {/* INVESTOR REVIEWS — Now with green aesthetics */}
      <section className="relative border-t border-emerald-200 bg-gradient-to-t from-emerald-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-emerald-700">What Investors Say</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            {mockReviews.map(r => (
              <div
                key={r.id}
                className="p-5 rounded-xl border border-emerald-100 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <img src={r.avatar} className="h-10 w-10 rounded-full ring-2 ring-emerald-300" />
                  <div>
                    <div className="font-medium text-sm text-emerald-800">{r.name}</div>
                    <div className="text-yellow-500 text-xs">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-700">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GREEN FOOTER GLOW WRAP */}
      <div className="bg-gradient-to-t from-emerald-600 to-emerald-400 py-10 text-center text-white shadow-inner">
        <h3 className="text-xl font-semibold mb-2">Join the Green Revolution 🌾</h3>
        <p className="text-sm mb-4">Invest sustainably and grow with India’s most trusted agri-investment platform.</p>
        <a href="/signup" className="inline-block px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-medium">
          Get Started
        </a>
      </div>

      <Footer />
    </div>
  )
}

