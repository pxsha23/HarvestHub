// import { mockTeam } from '../mockData.js'

// export default function About(){
//   return (
//     <div className="max-w-7xl mx-auto px-6 space-y-8">
//       <div className="prose max-w-none">
//         <h1>About HarvestHub</h1>
//         <p>We connect farms with capital. Cropzor yield blip dolor sit amet, harvesto bloomus vitae.</p>
//       </div>
//       <div>
//         <h2 className="text-xl font-semibold mb-3">Our Team</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {mockTeam.map(t => (
//             <div key={t.id} className="bg-white border rounded p-4 text-center">
//               <img src={t.img} className="h-32 w-32 object-cover rounded-full mx-auto" />
//               <div className="mt-3 font-medium">{t.name}</div>
//               <div className="text-sm text-gray-600">{t.role}</div>
//               <p className="text-sm mt-2">Agri lorem sproutus vitae terra bloom. Greenflow sapien.</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


export default function About() {
  const team = [
    {
      id: 1,
      name: "Piyusha Kate",
      role: "Tech Lead",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgb7YQ91bZVEtOaAGys33n_6QfdxTwMDRtNz1OSBLFmsEM-Ayu0VhAAOUhWTkyezfCIfk&usqp=CAU",
      desc: "Visionary leader driving innovation in agri-investment and sustainability."
    },
    {
      id: 2,
      name: "Gauri Chavan",
      role: "Tech Lead",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYcPCwvXj0Hw45RIS47oLwDWmN0gWiyxKeA&s",
      desc: "Tech architect ensuring seamless connections between farmers and investors."
    },
    {
      id: 3,
      name: "Varshita Tummuri",
      role: "Tech Lead",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IC239LDu2Qs7P0bykvDVtHjJ1NJjTskEfwHTcpmi-hKWd9HbU4JabbqRqvYrf_VFyKI&usqp=CAU",
      desc: "Manages on-ground logistics and partnerships with rural farming communities."
    },
    {
      id: 4,
      name: "Parth Patil",
      role: "Testing Lead",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFO590I843JA262-3_gl2r-DeAkVQZArhPh4WO_iMbnAwivzmMN6K_Fu4au7uHNVanh4&usqp=CAU",
      desc: "Builds awareness and fosters trust among investors and farmers alike."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-12 py-16">
      <div className="prose max-w-none">
        <h1>About HarvestHub</h1>
        <p>
          HarvestHub bridges the gap between technology, finance, and agriculture — empowering
          farmers to grow while offering investors a chance to create real impact. Our mission is to
          revolutionize the agri-economy through transparency, innovation, and sustainability.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-emerald-700">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {team.map((t) => (
            <div
              key={t.id}
              className="bg-white border rounded-xl shadow-md hover:shadow-lg transition p-6 text-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="h-32 w-32 object-cover rounded-full mx-auto ring-2 ring-emerald-500/40"
              />
              <div className="mt-4 font-semibold text-lg">{t.name}</div>
              <div className="text-sm text-emerald-700 font-medium">{t.role}</div>
              <p className="text-sm mt-3 text-gray-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
